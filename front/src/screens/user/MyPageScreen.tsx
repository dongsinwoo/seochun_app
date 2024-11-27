import { colors } from '@/constants';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const MyPageScreen = () => {
  const [activeTab, setActiveTab] = useState('recent-rides');

  const user = {
    name: "김느림",
    profileImage: "https://via.placeholder.com/100",
    level: 3,
    experience: 75,
  };

  const stats = {
    totalRideTime: "32:45:30",
    totalDistance: 256.7,
    savedPlaces: 12,
    photos: 87,
  };

  const recentRides = [
    { id: 1, name: "서천 해양생물자원관 코스", date: "2023-06-25", distance: 15.3 },
    { id: 2, name: "신성리 갈대밭 산책", date: "2023-06-20", distance: 8.7 },
    { id: 3, name: "한산모시관 투어", date: "2023-06-15", distance: 12.1 },
  ];

  const savedPlaces = [
    { id: 1, name: "서천 해양생물자원관", description: "해양 생물 전시관" },
    { id: 2, name: "신성리 갈대밭", description: "아름다운 갈대 군락지" },
    { id: 3, name: "한산모시관", description: "전통 모시 문화 체험" },
    { id: 4, name: "금강하구둑", description: "철새 도래지" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>느린여행</Text>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={require('@/assets/user-default.png')} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <View style={styles.levelContainer}>
              <MaterialIcons name="emoji-events" size={16} color="#F59E0B" />
              <Text style={styles.levelText}>느린 여행자 Lv.{user.level}</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${user.experience}%` }]} />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <MaterialIcons name="photo-camera" size={16} color="#4B5563" />
          <Text style={styles.editButtonText}>프로필 편집</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statCard, styles.blueCard]}>
          <MaterialIcons name="timer" size={32} color="#3B82F6" />
          <View>
            <Text style={styles.statValue}>{stats.totalRideTime}</Text>
            <Text style={styles.statLabel}>총 주행 시간</Text>
          </View>
        </View>
        <View style={[styles.statCard, styles.greenCard]}>
          <MaterialIcons name="directions-bike" size={32} color="#10B981" />
          <View>
            <Text style={styles.statValue}>{stats.totalDistance} km</Text>
            <Text style={styles.statLabel}>총 주행 거리</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'recent-rides' && styles.activeTabButton]}
          onPress={() => setActiveTab('recent-rides')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'recent-rides' && styles.activeTabButtonText]}>나만의 자전거길</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'saved-places' && styles.activeTabButton]}
          onPress={() => setActiveTab('saved-places')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'saved-places' && styles.activeTabButtonText]}>저장한 장소</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'recent-rides' && (
        <View style={styles.listContainer}>
          {recentRides.map((ride) => (
            <View key={ride.id} style={styles.listItem}>
              <View>
                <Text style={styles.listItemTitle}>{ride.name}</Text>
                <Text style={styles.listItemSubtitle}>{ride.date} • {ride.distance} km</Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#9CA3AF" />
            </View>
          ))}
        </View>
      )}

      {activeTab === 'saved-places' && (
        <View style={styles.listContainer}>
          {savedPlaces.map((place) => (
            <View key={place.id} style={styles.listItem}>
              <View>
                <Text style={styles.listItemTitle}>{place.name}</Text>
                <Text style={styles.listItemSubtitle}>{place.description}</Text>
              </View>
              <MaterialIcons name="favorite" size={20} color="#EF4444" />
            </View>
          ))}
        </View>
      )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.blueButton]}>
            <Text style={styles.buttonText}>주행 기록</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.greenButton]}>
            <Text style={styles.buttonText}>새 주행 시작</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    backgroundColor: colors.MAIN_700,
    color: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  levelText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#4B5563',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    marginTop: 8,
    width: 120,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 2,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  editButtonText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#4B5563',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  blueCard: {
    backgroundColor: '#EFF6FF',
  },
  greenCard: {
    backgroundColor: '#ECFDF5',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginLeft: 12,
  },
  statLabel: {
    fontSize: 12,
    color: '#4B5563',
    marginLeft: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#4B5563',
  },
  activeTabButtonText: {
    color: '#3B82F6',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  listItemSubtitle: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  blueButton: {
    backgroundColor: '#3B82F6',
  },
  greenButton: {
    backgroundColor: '#10B981',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyPageScreen;