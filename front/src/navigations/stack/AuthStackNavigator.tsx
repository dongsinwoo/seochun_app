import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import { authNavigations } from '../../constants';
import SignupScreen from '../../screens/auth/SignupScreen';



// 파라미터 타입 지정 
export type AuthStackParamList = {
  [authNavigations.AUTH_HOME] : undefined;
  [authNavigations.LOGIN] : undefined;
  [authNavigations.SIGNUP] : undefined;
}

function AuthStackNavigator() {
  // Stack_navigator
  // 스택형식으로 화면이 전환되고 history를 남김
  // 파라미터 타입 객체 넣어주기
    const Stack = createStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator 
    screenOptions={{
      cardStyle:{
        backgroundColor: "white",
      },
      headerStyle:{
        backgroundColor : "white",
        shadowColor : "gray"
      },
      headerTitleStyle:{
        fontSize : 15,
      },
      headerTintColor: "black"
    }}
    >
        <Stack.Screen 
        name= {authNavigations.AUTH_HOME} 
        component = {AuthHomeScreen}
        options={{
          headerTitle: " ",
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name= {authNavigations.LOGIN} 
        component = {LoginScreen}
        options={{
          headerTitle: "로그인"
        }}
        />
        <Stack.Screen 
        name= {authNavigations.SIGNUP} 
        component = {SignupScreen}
        options={{
          headerTitle: "회원가입"
        }}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;