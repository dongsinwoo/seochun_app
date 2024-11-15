import AddPostHeaderRight from '@/components/AddPostHeaderRight';
import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import { colors, mapNavigations } from '@/constants';
import useMutateCreatePost from '@/hooks/queries/useMutateCreatePost';
import useForm from '@/hooks/useForm';
import { MapStackParamList } from '@/navigations/stack/MapStackNavigator';
import { MarkerColor } from '@/types/domain';
import { validateAddPost } from '@/utils';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons'

type AddPostScreenProps = StackScreenProps<MapStackParamList, typeof mapNavigations.MAP_ADD_POST>;

function AddPostScreen({route, navigation}: AddPostScreenProps) {
  const {location} = route.params;
  const descriptionRef = useRef<TextInput | null>(null);
  const createPost = useMutateCreatePost();
  const addPost = useForm({
    initialValue: { title : '', description : '' },
    validate: validateAddPost,
  })
  const [markerColor, setMarkerColor] = useState<MarkerColor>('RED');
  const [score, setScore] = useState(5);
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    console.log("Submit button clicked"); // 디버깅용 로그
    console.log("Current values:", {address, ...location, ...addPost.values, markerColor, score}); // 현재 값들 확인
    
    const body = {
      date: new Date(),
      title: addPost.values.title,
      description: addPost.values.description,
      color: markerColor,
      score,
      imageUris: [],
    }
    createPost.mutate({address, ...location, ...body}, {
        onSuccess: () => {
            navigation.goBack();
        },
        onError: (error) => {
            console.error("Error details:", error);
            console.error("Error response:", error.response);
            console.error("Error message:", error.message);
        }
    })
  }

  useEffect(() => {
    navigation.setOptions({
        headerRight: () => AddPostHeaderRight(handleSubmit),
    })
  }, [location, addPost.values, markerColor, score]);

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.contentContainer}>
            <View style={styles.inputContainer}>
                <InputField 
                    value='' 
                    disabled 
                    placeholder='제목을 입력해주세요.' 
                    icon={<Octicons name='location' size={16} color={colors.GRAY_500}/>}
                />
                <CustomButton variant='outlined' size='large' label='날짜 선택'/>
                <InputField
                    placeholder='제목을 입력하세요.' 
                    inputMode='email' 
                    error={addPost.errors.title}
                    touched = {addPost.touched.title}
                    returnKeyType='next'
                    blurOnSubmit = {false}
                    onSubmitEditing={() => descriptionRef.current?.focus()}
                    {...addPost.getTextInputProps("title")}
                />
                <InputField
                    ref = {descriptionRef}
                    autoFocus
                    placeholder='기록하고 싶은 내용을 입력하세요. (선택)' 
                    inputMode='email' 
                    error={addPost.errors.description}
                    touched = {addPost.touched.description}
                    returnKeyType='next'
                    multiline
                    blurOnSubmit = {false}
                    {...addPost.getTextInputProps("description")}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 20,
  },
});

export default AddPostScreen;