import { bikeStatusNavigations, colors,  myBikeRoadNavigations } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,SafeAreaView, Dimensions, ImageBackground } from 'react-native';
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
          source={require('../../assets/seochun_banner.jpeg')} 
          style={styles.bannerImage}
        />

        {/* Main Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
          style={[styles.optionBox, {zIndex: 100, backgroundColor: colors.BLUE_100}]}
          onPress={() => navigation.navigate(bikeStatusNavigations.BIKE_STATUS_HOME)}
          >
            <Image source={require('@/assets/home/home_bike.png')} style={[ styles.bikeimg]} />
            <Text style={styles.optionText}>느린 자전거</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
          style={styles.optionBox}
          onPress={() => navigation.navigate(myBikeRoadNavigations.MY_BIKE_ROAD)}
          >
            <Image source={require('@/assets/home/home_road.png')} style={[ styles.roadimg] } />
            <Text style={styles.optionText}>나만의 자전거길</Text>
          </TouchableOpacity>
        </View>

        {/* Map Section */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.mapContainer} onPress={() => navigation.navigate('MapStack')}>
            <ImageBackground source={require('@/assets/home/home_map.jpeg')} style={styles.mapImage} >
              <Text style={styles.sectionTitle}>서천 느리게 여행하기</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* Additional Options */}
        <View style={styles.additionalSection}>
          <Text style={styles.bottomTitle}>이런곳도 있어요</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.bottom_ui} onPress={() => navigation.navigate("Cafe")}>
              <Image source={require('@/assets/home/home_paty.png')} style={styles.cafeIcon} />
              <Text style={styles.optionText}>느린 카페</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.bottom_ui} onPress={() => navigation.navigate("Seochun")}>
              <Image source={require('@/assets/home/home_bus.png')} style={styles.cameraIcon} />
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
    paddingLeft: 16,
    paddingRight: 16,
    boxSizing: "border-box",
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop:16,
    borderWidth: 0.5,
    borderColor: "#cccccc",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    borderRadius: 10,
    
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
    borderRadius: 10,
    alignItems: 'center',
    width: SCREEN_WIDTH / 2 - 24,
    height: 171,
    justifyContent: 'center',
  },
  bottom_ui: {
    width: SCREEN_WIDTH / 2 - 24,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    marginBottom: 16,
    position: "relative",

  },
  cameraIcon: {
    width: "65%",
    height: "100%",
    objectFit: "contain",
    marginBottom: 10,
    position: "absolute",
    top: 0,
    right: 0,
  },
  cafeIcon: {
    width: "35%",
    height: "40%",
    objectFit: "contain",
    marginBottom: 10,
    position: "absolute",
    bottom: 0,
    right: 16,
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
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    overflow: "hidden",
    height: 200,
    marginTop:16,
    width: "100%"
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
  },
  bottomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  additionalSection: {
    marginTop: 20
  },
});

export default HomeScreen;