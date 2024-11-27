import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { drectionsStackNavigations } from '@/constants';
import { useNavigation } from '@react-navigation/native';


const DirectionsScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* 검색 입력 섹션 */}
      <View style={styles.searchSection}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="location-on" size={20} color="#2196F3" style={styles.icon} />
          <TextInput 
            style={styles.input}
            placeholder="출발지"
            placeholderTextColor="#666"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <MaterialIcons name="location-on" size={20} color="#F44336" style={styles.icon} />
          <TextInput 
            style={styles.input}
            placeholder="도착지"
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity style={styles.searchButton} onPress={() => {
          navigation.navigate(drectionsStackNavigations.MAP_DIRECTIONS_STATUS as never)
        }}>
          <Text style={styles.searchButtonText}>경로 검색</Text>
        </TouchableOpacity>
      </View>

      {/* 최근 검색 섹션 */}
      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>최근 목적지 검색</Text>
        <Text style={styles.recentItem}>서천군청</Text>
        <Text style={styles.recentItem}>장항 스카이워크</Text>
        <Text style={styles.recentItem}>국립해양생물</Text>
      </View>

      {/* 추천 목적지 섹션 */}
      <View style={styles.recommendSection}>
        <Text style={styles.sectionTitle}>추천 목적지</Text>
        
        <TouchableOpacity style={styles.placeItem}>
          <MaterialIcons name="place" size={40} color="#666" style={styles.placeIcon} />
          <View style={styles.placeInfo}>
            <Text style={styles.placeName}>서천 해양생물자원관</Text>
            <View style={styles.placeSubInfo}>
              <Text style={styles.placeDesc}>해양 생물 전시관</Text>
              <Text style={styles.placeDistance}>2.5km</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.placeItem}>
          <MaterialIcons name="place" size={40} color="#666" style={styles.placeIcon} />
          <View style={styles.placeInfo}>
            <Text style={styles.placeName}>신성리 갈대밭</Text>
            <View style={styles.placeSubInfo}>
              <Text style={styles.placeDesc}>아름다운 갈대 군락지</Text>
              <Text style={styles.placeDistance}>4.8km</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.placeItem}>
          <MaterialIcons name="place" size={40} color="#666" style={styles.placeIcon} />
          <View style={styles.placeInfo}>
            <Text style={styles.placeName}>한산모시관</Text>
            <View style={styles.placeSubInfo}>
              <Text style={styles.placeDesc}>전통 모시 문화 체험</Text>
              <Text style={styles.placeDistance}>6.2km</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchSection: {
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 12,
    padding: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recentSection: {
    marginBottom: 24,
  },
  recentItem: {
    fontSize: 16,
    marginBottom: 12,
    color: '#666',
  },
  recommendSection: {
    flex: 1,
  },
  placeItem: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 16,
  },
  placeIcon: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  placeInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  placeDesc: {
    fontSize: 14,
    color: '#666',
  },
  placeSubInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeDistance: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: '500',
  },
});

export default DirectionsScreen;
