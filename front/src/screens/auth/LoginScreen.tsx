import React, { useRef, } from 'react';
import {StyleSheet, View,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils';
import { TextInput } from 'react-native-gesture-handler';
import useAuth from '../../hooks/queries/useAuth';



function LoginScreen() {
  const {loginMutation} = useAuth(); 
  const passwordRef = useRef<TextInput | null>(null);
  const login = useForm({
    initialValue: { email : '', password : '' },
    validate: validateLogin,
  })
  
  const handleSubmit = ()=>{
    console.log("values",login.values)
    loginMutation.mutate(login.values);
    console.log(loginMutation.mutate(login.values))
  }
  
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.inputContainer}>
          <InputField 
          autoFocus
          placeholder='이메일' 
          inputMode='email' 
          error={login.errors.email}
          touched = {login.touched.email}
          returnKeyType='next'
          blurOnSubmit = {false}
          onSubmitEditing={()=> passwordRef.current?.focus()}
          {...login.getTextInputProps("email")}

          />
          <InputField
          ref = {passwordRef}
          placeholder= '비밀번호'  
          error={login.errors.password}
          touched = {login.touched.password}
          returnKeyType='join'
          blurOnSubmit = {false}
          onSubmitEditing={handleSubmit}
          textContentType='oneTimeCode'
          secureTextEntry
          {...login.getTextInputProps("password")}
          />
        </View>
        <CustomButton
          label='로그인'
          variant='filled'
          size='large'
          onPress={handleSubmit}
        />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    margin: 30,
  },
  inputContainer:{
    gap: 20,
    marginBottom: 30
  }
});

export default LoginScreen;