import { colors } from '@/constants';
import React from 'react';
import {Modal, StyleSheet, View, SafeAreaView, Text, Pressable} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface DatePickOptionProps {
    isVisible: boolean
    date: Date
    onChangeDate: (date: Date) => void
    onConfirmDate: () => void
}

function DatePickOption({isVisible, date, onChangeDate, onConfirmDate}: DatePickOptionProps) {
  return (
    <Modal visible = {isVisible} transparent animationType='slide'>
        <SafeAreaView style = {styles.container}>
            <View style = {styles.contentContainer}>
                <View style = {styles.datePickerContainer}>
                    <DatePicker mode='date' date={date} onDateChange={onChangeDate} locale='ko'/>
                </View>
            </View>
            <View style = {styles.contentContainer}>
                <Pressable style = {styles.button} onPress={onConfirmDate}>
                    <Text style = {styles.buttonText}>확인</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
    datePickerContainer: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    contentContainer: {
        borderRadius: 15,
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: colors.GRAY_100,
        overflow: 'hidden',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        gap: 5,
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.MAIN_700,
    }
});

export default DatePickOption;