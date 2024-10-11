import React from 'react';
import {StyleSheet, Text, Pressable, PressableProps, Dimensions, View} from 'react-native';
import { colors } from '../constants';

interface CustomButtonProps extends PressableProps{
    label: string;
    variant?: "filled" | "outlined";
    size?: 'large' | 'medium';
    inValid?: boolean;
    
}

const deviceHeight = Dimensions.get("screen").height

function CustomButton({
    label, 
    variant='filled', 
    size = 'large', 
    inValid = false,
    ...props
}:CustomButtonProps) {
    
  return (
    <Pressable 
    disabled = {inValid}
    style ={({pressed})=> [
        styles.container, 
        styles[variant], 
        pressed ? styles[`${variant}Pressed`] : styles[variant], 
        inValid && styles.inValid]} 

    {...props}>  

        <View style = {styles[size]}>
            <Text style = {[styles.text, styles[`${variant}Text`]]}>{label}</Text>
        </View>
        
    </Pressable>
    
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 5,
        justifyContent: "center",
        flexDirection: "row"
    },
    inValid:{
        opacity: 0.5 
    },
    filled:{
        backgroundColor: colors.MAIN_700,
    },
    outlined:{
        borderColor: colors.MAIN_700,
        borderWidth: 1,
    },
    large:{
        width: "100%",
        paddingVertical: deviceHeight > 700 ? 15 : 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    medium:{
        width: "50%",
        paddingVertical: deviceHeight > 700 ? 12 : 8,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    text:{
        fontSize:16,
        fontWeight: "700"
    },
    filledText:{
        color: colors.WHITE
    },
    outlinedText:{
        color: colors.MAIN_700
    },
    filledPressed:{
        backgroundColor: colors.MAIN_500
    },
    outlinedPressed:{
        borderColor: colors.MAIN_700,
        borderWidth: 1,
        opacity: 0.5
    },
});

export default CustomButton;