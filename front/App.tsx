/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {

SafeAreaView,
Text,
Linking,
Image,
TouchableOpacity
} from 'react-native';

import { StyleSheet } from 'react-native';

function App(): JSX.Element {

  const appURL = "https://www.apple.com/kr/"

  return (
    <SafeAreaView style={styles.flex}>
      <Text onPress={()=> Linking.openURL(appURL)}>애플 바로가기</Text>
      <TouchableOpacity onPress={()=> Linking.openURL(appURL)}>
        <Image 
        source={{uri: "https://cdn.imweb.me/thumbnail/20230303/b8ea3e5c047ac.jpg"}} 
        style={{width:200, height:200}} 
        resizeMode='cover'/>
      </TouchableOpacity>
      
    </SafeAreaView>
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
