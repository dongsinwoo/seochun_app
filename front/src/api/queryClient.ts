import { QueryClient } from "@tanstack/react-query";

// 쿼리 클라이언트 
const queryClient = new QueryClient({
    // 쿼리 기본 옵션 설정
    defaultOptions:{
        queries:{
            retry: false,
        },
        mutations: {
            retry: false,
        }
    }
})

export default queryClient;