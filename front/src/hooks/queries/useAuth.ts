import { useMutation, useQuery} from "@tanstack/react-query";
import { getAccessToken, getProfile, logout, postLogin, postSignup } from "../../api/auth";
import { UseMutationCustomOptions, useQueryCustomOptions } from "../../types/common";
import { removeEncryptStorage, setEncryptStorage } from "../../utils";
import { removeHeader, setHeader } from "../../utils/header";
import { useEffect } from "react";
import queryClient from "../../api/queryClient";
import { numbers, queryKeys, storageKeys } from "../../constants";


function useSignup(mutationsOptions?: UseMutationCustomOptions ){
    return useMutation({
        // 뮤테이션 함수는 onErrors나 onSuccess를 통해 인수를 전달받을 수 있다.
        mutationFn: postSignup,
        ...mutationsOptions,
    })
}

function useLogin(mutationsOptions?: UseMutationCustomOptions){
    return useMutation({
        mutationFn: postLogin,
        onSuccess({accessToken, refreshToken}) {
            setEncryptStorage(storageKeys.REFRESH_TOKEN, refreshToken);
            setHeader("Authorization", `Bearer ${accessToken}`);
        },
        onSettled:()=>{
            queryClient.refetchQueries({queryKey: [queryKeys.AUTH,queryKeys.GET_ACCESS_TOKEN]});
            queryClient.invalidateQueries({queryKey: [queryKeys.AUTH,queryKeys.GET_PROFILE]});
        },
        ...mutationsOptions,
    })
}

function useGetRefreshToken(){
    const {data, isSuccess, isError} = useQuery({
        queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
        staleTime: numbers.ACCESS_TOKEN_REFETCH_TIME,
        queryFn: getAccessToken,
        refetchInterval: numbers.ACCESS_TOKEN_REFETCH_TIME,
        refetchIntervalInBackground: true,
        refetchOnReconnect: true,


    })

    useEffect(()=>{
        if(isSuccess){
            setHeader("Authorization", `Bearer ${data.accessToken}`);
            setEncryptStorage(storageKeys.REFRESH_TOKEN, data.refreshToken);
        }
    },[isSuccess])

    useEffect(()=>{
        if(isError){
            removeHeader("Authorization");
            removeEncryptStorage(storageKeys.REFRESH_TOKEN);
        }
    },[isError])
    
    return {isSuccess, isError}
}



function useGetProfile(queryOptions?: useQueryCustomOptions){
    return useQuery({
        queryKey: [queryKeys.AUTH,queryKeys.GET_PROFILE],
        queryFn: getProfile,
        ...queryOptions,
    })
}

function useLogout(mutationsOptions?: UseMutationCustomOptions){
    return useMutation({
        mutationFn: logout,
        onSuccess: ()=>{
            removeHeader("Authorization");
            removeEncryptStorage(storageKeys.REFRESH_TOKEN);
        },
        onSettled: ()=>{
            queryClient.invalidateQueries({queryKey: [queryKeys.AUTH]});
        },
        ...mutationsOptions,
    })
}

function useAuth(){
    const signupMutation = useSignup();
    const refreshTokenQuery = useGetRefreshToken();
    const getProfileQuery = useGetProfile({
        enabled: refreshTokenQuery.isSuccess,
    });
    const isLogin = getProfileQuery.isSuccess;
    const loginMutation = useLogin();
    const logoutMutation = useLogout();

    return {signupMutation, loginMutation, getProfileQuery, isLogin, logoutMutation}
}


export default useAuth;