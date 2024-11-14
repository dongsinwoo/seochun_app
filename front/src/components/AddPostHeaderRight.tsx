import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderButton from './HeaderButton';


function AddPostHeaderRight(onSubmit: () => void) {
  return (
    <View>
        <HeaderButton labelText='등록' onPress={onSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({});

export default AddPostHeaderRight;