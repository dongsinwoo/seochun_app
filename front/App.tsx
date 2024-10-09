/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import {

SafeAreaView,
Text,
Linking,
Image,
TouchableOpacity
} from 'react-native';

import { StyleSheet } from 'react-native';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

function App (){
  // 클래스형 컴포넌트

  const handleOpenURL = () => {
    const appURL = "https://www.apple.com/kr/";
    Linking.openURL(appURL);
  };

  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  flex: {
    justifyContent: "center",
    alignItems: "center",
    height: 700
  }
});

export default App;
