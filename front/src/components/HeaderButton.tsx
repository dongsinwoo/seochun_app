import { colors } from "@/constants";
import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, PressableProps } from "react-native";


interface HeaderButtonProps extends PressableProps {
    labelText?: string;
    icon?: ReactNode;
    hasError?: boolean;
    
}

function HeaderButton({
    labelText,
    icon,
    hasError = false,
    ...props
}: HeaderButtonProps){

    return (
        <Pressable disabled={hasError} style={styles.container} {...props}>
            {!labelText && icon}
            {!icon && labelText &&
            (<Text style={[styles.text, hasError&&styles.textError]}>{labelText}</Text>)}
        </Pressable>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.MAIN_700,
    },
    textError: {
        color: colors.GRAY_200,
    }
})

export default HeaderButton;