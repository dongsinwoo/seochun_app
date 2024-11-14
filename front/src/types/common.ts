import { AxiosError } from "axios"
import { UseMutationOptions, UseQueryOptions, QueryKey} from "@tanstack/react-query"

// ResponseError 에러 타입 설정
type ResponseError = AxiosError<{
    statusCode: string;
    message: string;
    error: string;
}>;


// 나중에 공부
type UseMutationCustomOptions <TData= unknown, Tvariables= unknown>= Omit<UseMutationOptions<TData,ResponseError, Tvariables, unknown>,"mutationFn">

type useQueryCustomOptions<TQueryFnData=unknown, TData=TQueryFnData> = Omit<UseQueryOptions<TQueryFnData,ResponseError,TData,QueryKey>, "queryKey" | "queryFn">


export type {ResponseError, UseMutationCustomOptions, useQueryCustomOptions}