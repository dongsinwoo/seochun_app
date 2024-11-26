import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';

const SCREEN_WIDTH = Dimensions.get('window').width;
const FRAME_SIZE = SCREEN_WIDTH * 0.7;

const QRScreen = () => {
  const [scanning, setScanning] = useState(true);

  const onBarCodeRead = (e: any) => {
    if (scanning) {
      setScanning(false);
      Alert.alert('QR 코드 스캔 완료', e.data, [
        {
          text: '확인',
          onPress: () => setScanning(true),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>느린여행</Text>
      <View style={styles.cameraContainer}>
        <RNCamera
          style={styles.camera}
          onBarCodeRead={onBarCodeRead}
          captureAudio={false}
        />
        <View style={styles.frameContainer}>
          {/* Corner frames */}
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>
      </View>
      <Text style={styles.guideText}>QR 코드를 스캔해주세요</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  cameraContainer: {
    width: FRAME_SIZE,
    height: FRAME_SIZE,
    position: 'relative',
  },
  camera: {
    flex: 1,
  },
  frameContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  corner: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderColor: '#2196F3',
    borderWidth: 3,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  guideText: {
    fontSize: 16,
    marginTop: 30,
    color: '#666',
  },
});

export default QRScreen;