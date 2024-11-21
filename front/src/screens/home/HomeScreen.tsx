import { bikeStatusNavigations, colors,  myBikeRoadNavigations } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,SafeAreaView, Dimensions } from 'react-native';
import { HomeStackParamList } from '@/types/navigator';



type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

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
          <TouchableOpacity 
          style={[styles.optionBox, {zIndex: 100, backgroundColor: colors.BLUE_100}]}
          onPress={() => navigation.navigate(bikeStatusNavigations.BIKE_STATUS_HOME)}
          >
            <Image source={require('@/assets/home/home_bike.png')} style={[styles.optionIcon, styles.bikeimg]} />
            <Text style={styles.optionText}>느린 자전거</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
          style={styles.optionBox}
          onPress={() => navigation.navigate(myBikeRoadNavigations.MY_BIKE_ROAD)}
          >
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
          <Text style={styles.sectionTitle}>이런곳도 있어요</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.bottom_ui}>
              <Image source={require('@/assets/home/home_paty.png')} style={styles.optionIcon} />
              <Text style={styles.optionText}>느린 카페</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.bottom_ui}>
              <Image source={require('@/assets/home/home_bus.png')} style={styles.optionIcon} />
              <Text style={styles.optionText}>서천 관광지</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
});

export default HomeScreen;