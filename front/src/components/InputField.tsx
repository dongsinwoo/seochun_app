import React, { ForwardedRef, forwardRef, useRef } from 'react';
import {Dimensions, StyleSheet, View,TextInput, TextInputProps, Text, Pressable} from 'react-native';
import { colors } from '../constants';
import { mergeRefs } from '../utils';

interface InputFieldProps extends TextInputProps {
    disabled?: boolean,
    error? : string,
    touched? : boolean,
    icon?: React.ReactNode
}

const deviceHeight = Dimensions.get("screen").height

const InputField = forwardRef((
    {disabled = false, error, touched, icon=null, ...props}: InputFieldProps, ref?:ForwardedRef<TextInput>
) => {
    const innerRef = useRef<TextInput | null>(null);
    const handlePressInput = () =>{
        innerRef.current?.focus()
    }
  return (
    <Pressable onPress={() => handlePressInput()}>
        <View style={[
            styles.container, 
            disabled && styles.disabled, 
            props.multiline && styles.multiline,
            touched && Boolean(error)&& styles.inputError]}>
            <View style={Boolean(icon) && styles.innerContainer}>
                {icon}
                <TextInput 
                    ref = {ref? mergeRefs(innerRef, ref): innerRef}
                    editable={!disabled} 
                    placeholderTextColor={colors.GRAY_500} 
                    style ={ [styles.input, disabled && styles.disabled ]} 
                    autoCapitalize='none'
                    spellCheck = {false}
                    autoCorrect={false}
                    {...props}/>
            </View>
            {touched && Boolean(error) && <Text style = {styles.error}>{error}</Text>}
        </View>
    </Pressable>
    )
})

const styles = StyleSheet.create({
    container:{
        borderWidth :1,
        borderColor:colors.GRAY_200,
        padding : deviceHeight > 700 ? 15 : 10,
    },
    input:{
        fontSize:16,
        color:colors.BLACK,
        padding: 0,
    },
    disabled:{
        backgroundColor : colors.GRAY_200,
        color : colors.GRAY_700
    },
    inputError:{
        borderColor : colors.RED_300,
        borderWidth : 1
    },
    error:{
        color : colors.RED_500,
        fontSize:12,
        paddingTop:5 
    },
    innerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    multiline:{
        height: 100,
        paddingBottom: deviceHeight > 700 ? 45 : 30,
    }
});

export default InputField;