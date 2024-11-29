import { getFormDataImages } from '@/utils';
import ImagePicker from 'react-native-image-crop-picker';
import useMutateImages from './queries/useMutateImages';
import { ImageUri } from '@/types/domain';
import { useState } from 'react';
import { Alert } from 'react-native';

interface useImagePickerType {
    initialImage: ImageUri[];
}

function useImagePicker({initialImage=[]}:useImagePickerType) {
    const uploadImages = useMutateImages();
    const [imageUris, setImageUris] = useState(initialImage);

    const addImageUris = (uris: string[]) => {
        if (imageUris.length + uris.length > 5) {
            Alert.alert('사진 최대 개수', '사진은 최대 5개까지 선택할 수 있습니다.');
            return;
        }
        setImageUris(prev => [...prev, ...uris.map(uri => ({uri}))]);
    }

    const handleChange = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            multiple: true,
            includeBase64: true,
            maxFiles: 5,
            cropperChooseText: '완료',
            cropperCancelText: '취소',
        }).then(images => {
            const formData = getFormDataImages(images);
            uploadImages.mutate(formData,{
                onSuccess: data => addImageUris(data),
            });
        }).catch(e => {
            if (e.code === 'E_PICKER_CANCELLED') {
                return;
            }
            Alert.alert('사진 선택 실패', '사진 선택에 실패했습니다.');
        });
    }
    return {imageUris, handleChange};
}  

export default useImagePicker;