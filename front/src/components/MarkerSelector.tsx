import React from 'react';
import {Pressable, StyleSheet, View ,Text} from 'react-native';
import CustomMarker from './CustomMarker';
import { colors } from '@/constants';
import { ScrollView } from 'react-native-gesture-handler';
import { MarkerColor } from '@/types/domain';

interface MarkerSelectorProps {
    markerColor: MarkerColor
    score: number
    onPressMarker: (name: MarkerColor) => void
}
const markerColors:MarkerColor[] = ["RED","YELLOW","GREEN", "BLUE", "PURPLE"];

function MarkerSelector({markerColor, score,onPressMarker}: MarkerSelectorProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.markerLabel}>마커 선택</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
           <View style={styles.markerInputScroll}>
                {markerColors.map(color =>{
                    return (
                        <Pressable key = {color} style = {[styles.markerBox, markerColor === color && styles.selectedMarkerBox]} onPress={() => onPressMarker(color)}>
                            <CustomMarker color={color} score = {score}/>
                        </Pressable>
                    )
                })}
           </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.GRAY_200,
        padding: 15,
    },
    markerLabel: {
        marginBottom: 15,
        color: colors.GRAY_700,
    },
    markerInputScroll: {
        flexDirection: 'row',
        gap: 17,
    },
    markerBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.GRAY_100,
    },
    selectedMarkerBox: {
        borderWidth: 2,
        borderColor: colors.MAIN_700,
    }
});

export default MarkerSelector;