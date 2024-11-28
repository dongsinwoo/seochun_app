import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import { colors } from '@/constants';
interface ScoreInputProps {
    score: number
    onChangeScore: (value: number) => void
}

function ScoreInput({score, onChangeScore}: ScoreInputProps) {
  return (
    <View style = {styles.container}>
        <View style = {styles.scoreContainer}>
            <Text style = {styles.scoreText}>평점</Text>
            <Text style = {styles.scoreText}>{score}점</Text>
        </View>
        <Slider
            value={score}
            onValueChange={onChangeScore}
            minimumValue={1}
            maximumValue={5}
            step={1}
            minimumTrackTintColor={colors.MAIN_700}
            maximumTrackTintColor={colors.GRAY_200}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        borderWidth: 1,
        borderColor: colors.GRAY_200,
    },
    scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scoreText: {
        color: colors.GRAY_700,
    }
});

export default ScoreInput;