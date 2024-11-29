import { colors } from '@/constants';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
interface ImageInputProps {
    onChange: () => void;
}

function ImageInput({onChange}: ImageInputProps) {
  return (
    <Pressable style={({pressed})=> [pressed && styles.imageInputPressed, styles.imageInput]} onPress={onChange}>
        <Ionicons name='camera-outline' size={20} color={colors.GRAY_500}/>
        <Text style={styles.imageInputText}>이미지 추가</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    imageInput: {
        borderWidth: 1.5,
        borderStyle: 'dotted',
        borderColor: colors.GRAY_300,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        gap: 5,
    },
    imageInputPressed: {
        opacity: 0.5,
    },
    imageInputText: {
        color: colors.GRAY_500,
        fontSize: 12,
    },
});

export default ImageInput;