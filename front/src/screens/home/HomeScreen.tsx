import { colors, mapNavigations } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,SafeAreaView, Dimensions, ImageBackground  } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export type RootStackParamList = {
  Home: undefined;
  MapStack: undefined;
  Auth: undefined;
  // 필요한 다른 스크린들도 여기에 추가
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>느린여행</Text>
      
      <ScrollView style={styles.scrollView}>
        {/* Banner Image */}
        <Image 
          source={require('../../assets/seochun_banner.png')} 
          style={styles.bannerImage}
        />

        {/* Main Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={[styles.optionBox, {zIndex: 100, backgroundColor: colors.BLUE_100}]}>
            <Image source={require('@/assets/home/home_bike.png')} style={[styles.optionIcon, styles.bikeimg]} />
            <Text style={styles.optionText}>느린 자전거</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionBox}>
            <Image source={require('@/assets/home/home_road.png')} style={[styles.optionIcon, styles.roadimg] } />
            <Text style={styles.optionText}>나만의 자전거길</Text>
          </TouchableOpacity>
        </View>

        {/* Map Section */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.mapContainer} onPress={() => navigation.navigate('MapStack')}>
            <Text style={styles.sectionTitle}>서천 느리게 여행하기</Text>
            {/* Map Component will go here */}
          </TouchableOpacity>
        </View>

        {/* Additional Options */}
        <View style={styles.additionalSection}>
          <Text style={styles.sectionTitle}>이런것도 있어요</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.bottom_ui}>
              <Image source={require('@/assets/home/home_paty.png')} style={styles.optionIcon} />
              <Text style={styles.optionText}>느린 파티</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.bottom_ui}>
              <Image source={require('@/assets/home/home_bus.png')} style={styles.optionIcon} />
              <Text style={styles.optionText}>셔틀 운행</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Octicons name={"home"} color={colors.MAIN_700} size={28}/>
          <Text style = {[styles.navText, {color: colors.MAIN_700}]}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.qrCode}>
          <ImageBackground
            source={require('@/assets/navigation/qr_bg.png')} // 배경 이미지 경로
            style={styles.qrBackground}
          >
            <MaterialIcons name='qr-code-scanner' color={colors.WHITE} size={32}/>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Octicons name={"person"} color={colors.GRAY_500} size={28}/>
          <Text style = {[styles.navText, {color: colors.GRAY_500}]}>me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    width: "100%",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    backgroundColor: colors.MAIN_700,
    color: '#fff',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal:16,
    width: "100%",

  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop:16
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:16,
    columnGap: 16,
    width: "100%",
  },
  optionBox: {
    position: 'relative',
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: "50%",
    height: 171,
    justifyContent: 'center',
  },
  bottom_ui: {
    padding: 20,
    width: "50%",
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GRAY_200,
    borderRadius: 10,
  },
  optionIcon: {
    
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  bikeimg: {
    position: 'absolute',
    width: 130,
    height: 130,
    bottom: 0,
    right: 0,
    objectFit: 'contain',
    zIndex: 100,
  },
  roadimg:{
    position: 'absolute',
    width: 160,
    height: 60,
    objectFit: "contain",
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  optionText: {
    position: 'absolute',
    top: 16,
    left: 16,
    fontSize: 16,
    fontWeight: "bold"
  },
  mapContainer: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    height: 200,
    marginTop:16,
    width: "100%"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  additionalSection: {
    marginTop: 20
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:16,
    columnGap: 16,
    width: "100%",
    elevation: 5, 
    shadowColor: '#666666',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    zIndex: 99,
  },
  navItem: {
    width: 70,  //
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 4,
  },
  qrCode: {
    position: 'absolute',
    left: SCREEN_WIDTH / 2 - 29,
    top: -30,  // 위로 올리기
    backgroundColor: colors.MAIN_700,
    width: 58,
    height: 58,
    borderRadius: 29,  // width/2 로 설정
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    zIndex: 1,
  },
  qrBackground: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;