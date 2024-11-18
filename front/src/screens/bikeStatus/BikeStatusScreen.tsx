import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BicycleStatusScreen() {
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [speed, setSpeed] = useState(12.5);
  const [distance, setDistance] = useState(5.2);
  const [time, setTime] = useState(0);
  const [wheelLightImage, setWheelLightImage] = useState('heart');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const remainingDistance = Math.round((batteryLevel / 100) * 80); // 80km at 100% battery

  const renderCard = (title: string, iconName: string, content: React.ReactNode) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Icon name={iconName} size={20} color="#000000" />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.cardContent}>
        {content}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>자전거 상태</Text>
      
      {renderCard('자전거 상태', 'battery-full', (
        <View style={styles.bicycleStatusContainer}>
          <Image
            source={require('@/assets/home/home_bike.png')}
            style={styles.bicycleImage}
          />
          <View style={styles.statusInfo}>
            <View style={styles.statusRow}>
              <Text>배터리 잔량</Text>
              <Text style={styles.boldText}>{batteryLevel}%</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${batteryLevel}%` }]} />
            </View>
            <View style={styles.statusRow}>
              <Text>남은 주행 가능 거리</Text>
              <Text style={styles.boldText}>{remainingDistance} km</Text>
            </View>
            <View style={styles.statusRow}>
              <Text>현재 위치</Text>
              <Text style={styles.boldText}>서천군 장항읍</Text>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.gridContainer}>
        {renderCard('현재 속도', 'speed', (
          <Text style={styles.largeText}>{speed.toFixed(1)} km/h</Text>
        ))}
        {renderCard('총 주행 거리', 'place', (
          <Text style={styles.largeText}>{distance.toFixed(1)} km</Text>
        ))}
      </View>

      {renderCard('주행 시간', 'timer', (
        <Text style={styles.largeText}>{formatTime(time)}</Text>
      ))}

      <TouchableOpacity 
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="image" size={16} color="#ffffff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>휠 라이트 이미지 변경</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.endRideButton]}
        onPress={() => Alert.alert('알림', '주행을 종료합니다.')}
      >
        <Text style={styles.buttonText}>주행 종료</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>휠 라이트 이미지 선택</Text>
          {['heart', 'star', 'smile', 'custom'].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.modalButton}
              onPress={() => {
                setWheelLightImage(item);
                setModalVisible(false);
                Alert.alert('알림', `${item} 이미지가 적용되었습니다.`);
              }}
            >
              <Text style={styles.modalButtonText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.modalButton, styles.closeButton]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalButtonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  cardContent: {
    alignItems: 'center',
  },
  bicycleStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bicycleImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  statusInfo: {
    flex: 1,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonIcon: {
    fontSize: 16,
    color: '#ffffff',
    marginRight: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  endRideButton: {
    backgroundColor: '#ef4444',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    minWidth: 100,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: '#ff0000',
  },
});