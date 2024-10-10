import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import AuthHomeScreen from '../../screens/AuthHomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import { authNavigations } from '../../constants';



// 파라미터 타입 지정 
export type AuthStackParamList = {
  [authNavigations.AUTH_HOME] : undefined;
  [authNavigations.LOGIN] : undefined;
}

function AuthStackNavigator() {
  // 파라미터 타입 객체 넣어주기
    const Stack = createStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator>
        <Stack.Screen name= {authNavigations.AUTH_HOME} component = {AuthHomeScreen}/>
        <Stack.Screen name= {authNavigations.LOGIN} component = {LoginScreen}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;