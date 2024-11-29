import axiosInstance from "./axios";

const uploadImages = async (body: FormData): Promise<string[]> => {
    const {data} = await axiosInstance.post('/images', body,{
        headers: {
            // 여기가 없으면 에러발생할 수 있음
            'Content-Type': 'multipart/form-data',
        },
    });
    return data;
}

export {uploadImages};