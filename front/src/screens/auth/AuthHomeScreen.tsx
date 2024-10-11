import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator'
import { authNavigations } from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.AUTH_HOME>

function AuthHomeScreen({navigation}:AuthHomeScreenProps){
  return (
    <SafeAreaView style = {styles.container}>
        <View style={styles.imageContainer}>
          <Image 
          resizeMode='contain'
          source={require("../../assets/login_logo.png")}
          style= {styles.image}/>
        </View>
        
        <View style = {styles.buttonContainer}>
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

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 30,
    alignItems: 'center'
  },
  buttonContainer:{
    flex: 1,
    gap : 8,
  },
  image:{
    width:"100%",
    height:"100%"
  },
  imageContainer:{
    flex: 3,
    width: Dimensions.get("screen").width / 1.6
  }
});

export default AuthHomeScreen;