import CustomMarker from '@/components/CustomMarker';
import useGetMarkers from '@/hooks/queries/useGetMarkers';
import mapStyle from '@/styles/mapStyle';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView, Platform, Alert, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BikeRouteStatus = () => {
  const [isRecording, setIsRecording] = useState(true);
  const [location, setLocation] = useState<GeolocationResponse | null>(null);
  const [initialRegion, setInitialRegion] = useState<Region | undefined>(undefined);
  const {data: markers = []} = useGetMarkers();

  useEffect(() => {
   myLocation();
  }, []);

  const myLocation = ()=>{
     // 컴포넌트 마운트 시 바로 위치 권한 요청 및 위치 가져오기
     Geolocation.getCurrentPosition(
      (position) => {
        setInitialRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      },
      (error) => {
        console.log(error);
        Alert.alert('위치를 가져오는데 실패했습니다.');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  const handleRecordPress = () => {
    if (isRecording) {
      Alert.alert(
        "기록 정지",
        "정말 정지하시겠습니까?",
        [
          {
            text: "취소",
            style: "cancel"
          },
          {
            text: "확인",
            onPress: () => setIsRecording(false)
          }
        ]
      );
    } else {
      setIsRecording(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 위치 바 */}
      <View style={styles.locationBar}>
        <View style={styles.locationInfo}>
          <Icon name="location-on" size={20} color="#4B89FF" />
          <Text style={styles.locationText}>현재 위치: 서천군 장항읍</Text>
        </View>
        <TouchableOpacity 
          style={[styles.recordButton, !isRecording && styles.recordButtonPaused]}
          onPress={handleRecordPress}
        >
          <Icon 
            name={isRecording ? "fiber-manual-record" : "play-arrow"} 
            size={16} 
            color="white" 
          />
          <Text style={styles.recordText}>
            {isRecording ? "기록 일시정지" : "기록 시작"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 중앙 지도 영역 */}
      <MapView 
        style={styles.mapContainer} 
        provider={Platform.select({
          ios: PROVIDER_GOOGLE,
          android: undefined,
        })}

        showsUserLocation
        followsUserLocation
        // 내 위치 버튼
        showsMyLocationButton ={false}
        customMapStyle={mapStyle}
        initialRegion={initialRegion}
        >
          {markers.map(({id, color, score, latitude, longitude}) => (
            <CustomMarker
              key={id}
              color={color}
              score={score}
              coordinate={{
                latitude,
                longitude,
              }}
            />
          ))}
        
        </MapView>

      {/* 하단 정보 카드 */}
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>나의 자전거길</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>거리</Text>
            <Text style={styles.statValue}>5.2 km</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>시간</Text>
            <Text style={styles.statValue}>00:45:30</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>평균 속도</Text>
            <Text style={styles.statValue}>11.5 km/h</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="map" size={20} color="black" />
            <Text style={styles.buttonText}>경로 저장</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="share" size={20} color="black" />
            <Text style={styles.buttonText}>경로 공유</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.finishButton}>
          <Text style={styles.finishButtonText}>방문한 정소</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  locationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    margin: 16,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
  },
  recordButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF4B4B',
    padding: 8,
    borderRadius: 8,
  },
  recordText: {
    color: 'white',
    marginLeft: 4,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    margin: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
    flex: 0.48,
  },
  buttonText: {
    marginLeft: 8,
  },
  finishButton: {
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  finishButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recordButtonPaused: {
    backgroundColor: '#4B89FF', // 빨간색에서 파란색으로 변경
  }
});

export default BikeRouteStatus;