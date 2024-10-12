import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../components/InputField';


function LoginScreen() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState("");

  // const handleChangeEmail = (text:string) =>{
  //   setEmail(text)
  // }
  // const handleChangePassword = (text:string) => {
  //   setPassword(text)
  // }

  const [value, setValue] = useState({
    email : '',
    password : ''
  })
  const [touched, setTouched] = useState({
    email : false,
    password : false
  })

  const handleChangeValue = (name: string, text:string)=>{
    setValue({
      ...value,
      [name] : text
    })
  }
  const handleBlur = (name:string) =>{
    setTouched({
      ...touched,
      [name] : true
    })
  }
  
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.inputContainer}>
          <InputField 
          placeholder='이메일' 
          inputMode='email' 
          error='이메일을 입력하세요'
          touched = {touched.email}
          value={value.email} 
          onChangeText={(text)=> handleChangeValue("email",text)}
          onBlur={()=>handleBlur("email")} />
          <InputField 
          placeholder='비밀번호' 
          value={value.password} 
          error='비밀번호를 입력하세요'
          touched = {touched.password}
          onChangeText={(text)=> handleChangeValue("password",text)} 
          onBlur={()=>handleBlur("password")}
          secureTextEntry/>
        </View>
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

  }
});

export default LoginScreen;