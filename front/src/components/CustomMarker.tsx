import { colors } from '@/constants';
import { MarkerColor } from '@/types/domain';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { LatLng, MapMarkerProps, Marker } from 'react-native-maps';

interface CustomMarkerProps extends MapMarkerProps {
    coordinate: LatLng;
    color: MarkerColor;
    score?: number;
}

const colorHex = {
    RED: colors.PINK_400,
    BLUE: colors.BLUE_400,
    GREEN: colors.GREEN_400,
    YELLOW: colors.YELLOW_400,
    PURPLE: colors.PURPLE_400,
}

function CustomMarker({coordinate, color, score = 5, ...props}: CustomMarkerProps) {
  return (
   <Marker coordinate={coordinate} {...props}> 
     <View style={styles.container}>
        <View style={[styles.marker, {backgroundColor: colorHex[color]}]}>
            <View style = {[styles.eye, styles.leftEye]}/>
            <View style = {[styles.eye, styles.rightEye]}/>
            {score > 3 && <View style = {[styles.mouth, styles.good]}/>}
            {score === 3 && <View style = {styles.soso}/>}
            {score < 3 && <View style = {[styles.mouth, styles.bad]}/>}
        </View>
     </View>
   </Marker>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 37,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    marker: {
        transform: [{rotate: '45deg'}],
        height: 27,
        width: 27,
        borderRadius: 27,
        borderBottomRightRadius:1,
        borderWidth: 1,
        borderColor: colors.BLACK,
    },
    eye: {
        position: 'absolute',
        backgroundColor: colors.BLACK,
        width: 4,
        height: 4,
        borderRadius: 4,
    },
    leftEye: {
        left: 5,
        top: 12
    },
    rightEye: {
        top: 5,
        left: 12,
    },
    mouth: {
        transform: [{rotate: '45deg'}],
        borderTopColor: "rgba(255,255,255/0.01)",
        borderBottomColor: "rgba(255,255,255/0.01)",
        width: 12,
        height: 12,
        borderWidth: 1,
        borderRadius: 12,
    },
    good: {
        transform: [{rotate: '225deg'}],
        marginLeft: 5,
        marginTop: 5,
        borderRightColor: "rgba(255,255,255/0.01)",
        borderLeftColor: colors.BLACK,
    },
    soso: {
        transform: [{rotate: '45deg'}],
        width: 8,
        height: 8,
        marginLeft: 13,
        marginTop: 13,
        borderLeftWidth: 1,
        borderLeftColor: colors.BLACK,
    },
    bad: {
        marginLeft: 12,
        marginTop: 12,
        borderRightColor: "rgba(255,255,255/0.01)",
        borderLeftColor: colors.BLACK,
    },
});

export default CustomMarker;