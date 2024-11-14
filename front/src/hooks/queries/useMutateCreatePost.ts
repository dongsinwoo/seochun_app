
import { createPost } from '@/api';
import queryClient from '@/api/queryClient';
import { queryKeys } from '@/constants';
import { UseMutationCustomOptions } from '@/types/common';
import { Marker } from '@/types/domain';
import { useMutation } from '@tanstack/react-query';


function useMutateCreatePost(mutationOptions?: UseMutationCustomOptions){
    
    return useMutation({
        mutationFn: createPost,
        onSuccess: newPost => {
            // 쿼리 업데이트 사항
            // queryClient.invalidateQueries({
            //     queryKey: [queryKeys.MARKERS, queryKeys.GET_MARKERS]
            // });

            // 캐시업데이트 방안
            queryClient.setQueryData<Marker[]>([queryKeys.MARKERS,queryKeys.GET_MARKERS], 
            existingMarkers => {
                const newMarkers = {
                    id: newPost.id,
                    color: newPost.color,
                    score: newPost.score,
                    latitude: newPost.latitude,
                    longitude: newPost.longitude,
                }
                return existingMarkers ? [...existingMarkers, newMarkers] : [newMarkers];
            });
        },
        ...mutationOptions,
    })
}

export default useMutateCreatePost;