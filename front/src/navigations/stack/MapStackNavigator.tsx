import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {  mapNavigations } from '../../constants';
import MapHomeScreen from '@/screens/map/MapHomeScreen';




// 파라미터 타입 지정 
export type MapStackParamList = {
  [mapNavigations.MAP_HOME] : undefined;
  
}

function MapStackNavigator() {
  // Stack_navigator
  // 스택형식으로 화면이 전환되고 history를 남김
  // 파라미터 타입 객체 넣어주기
    const Stack = createStackNavigator<MapStackParamList>();
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
        name= {mapNavigations.MAP_HOME} 
        component = {MapHomeScreen}
        options={{
          headerTitle: " ",
          headerShown: false,
        }}
        />
    </Stack.Navigator>
  )
}

export default MapStackNavigator;