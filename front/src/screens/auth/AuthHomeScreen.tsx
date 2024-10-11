import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator'
import { authNavigations } from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.AUTH_HOME>

function AuthHomeScreen({navigation}:AuthHomeScreenProps){
  return (
    <SafeAreaView>
        <View>
            <CustomButton 
              label='로그인하기'
              variant='filled'
              onPress={()=> navigation.navigate(authNavigations.LOGIN)}
              
            />
           <CustomButton 
              label='회원가입하기'
              variant='outlined'
              onPress={()=> navigation.navigate(authNavigations.SIGNUP)}
            />
        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;