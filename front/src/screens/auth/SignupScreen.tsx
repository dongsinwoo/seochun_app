import React, { useRef } from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import { validateSignup } from '../../utils';
import CustomButton from '../../components/CustomButton';
import { TextInput } from 'react-native-gesture-handler';
import useAuth from '../../hooks/queries/useAuth';

function SignupScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const {signupMutation, loginMutation} = useAuth();
  const signup = useForm({
    initialValue: {email: "", password: "", passwordConfirm: ""},
    validate: validateSignup
  })
  const handleSubmit = () =>{
    const {email, password} = signup.values;
    signupMutation.mutate({email, password},{
      onSuccess: ()=> loginMutation.mutate({email, password}),
    });
  }

  return (
    <SafeAreaView style = {styles.container}>
      <View style ={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder='이메일' 
          inputMode='email' 
          error={signup.errors.email}
          touched = {signup.touched.email}
          returnKeyType='next'
          blurOnSubmit = {false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps("email")}
        />
        <InputField
          ref = {passwordRef}
          placeholder= '비밀번호'  
          textContentType='oneTimeCode'
          error={signup.errors.password}
          touched = {signup.touched.password}
          {...signup.getTextInputProps("password")}
          returnKeyType='next'
          blurOnSubmit = {false}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          secureTextEntry
        />
        <InputField
          placeholder= '비밀번혼 확인'  
          ref = {passwordConfirmRef}
          error={signup.errors.passwordConfirm}
          touched = {signup.touched.passwordConfirm}
          {...signup.getTextInputProps("passwordConfirm")}
          returnKeyType='next'
          blurOnSubmit = {false}
          onSubmitEditing={handleSubmit}
          secureTextEntry
        />

      </View>
      <CustomButton label='회원가입' onPress={handleSubmit}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    margin:30
  },
  inputContainer:{
    gap:20,
    marginBottom:30
  }
});

export default SignupScreen;