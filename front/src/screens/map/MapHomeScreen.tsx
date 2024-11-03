import React, { useRef } from 'react';
import {Platform, Pressable, StyleSheet, Text,View} from 'react-native';
import MapView, { LatLng, PROVIDER_GOOGLE } from 'react-native-maps';
import { colors } from '@/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MapStackParamList } from '@/navigations/stack/MapStackNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '@/navigations/drawer/MainDrawerNavigator';
import useAuth from '@/hooks/queries/useAuth';
import useUserLocation from '@/hooks/useUserLocation';
import usePermission from '@/hooks/usePermission';



type Navigation = CompositeNavigationProp< 
StackNavigationProp<MapStackParamList>, 
DrawerNavigationProp<MainDrawerParamList>>

function MapHomeScreen() {
  const inset = useSafeAreaInsets();
  const {logoutMutation} = useAuth();
  const navigation = useNavigation<Navigation>();
  const {userLocation, isUserLocationError} = useUserLocation();
  const mapRef = useRef<MapView | null>(null);
  usePermission("LOCATION");
  const handleLogout = () => {
    logoutMutation.mutate(null);
  }
  const handlePressUserLocation = () => {
    if(isUserLocationError) return;
    mapRef.current?.animateToRegion({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }


 
  return (
    <>
      <MapView 
        ref={mapRef}
        style={styles.container} 
        provider={Platform.select({
          ios: PROVIDER_GOOGLE,
          android: undefined,
        })}

        showsUserLocation
        followsUserLocation
        // 내 위치 버튼
        showsMyLocationButton ={false}
      />
      <Pressable 
      style={[styles.drawerButton, {top: inset.top || 20}]} 
      onPress={() => navigation.openDrawer()}
      >
        <Text>서랍</Text>
      </Pressable>
      <View style={styles.buttonList}>
        <Pressable style={styles.mapButton} onPress={handlePressUserLocation}>
          <Text>내 위치</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerButton: {
    position: "absolute",
    left: 0,
    top: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.MAIN_700,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: colors.BLACK,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    elevation: 4,
  },
  buttonList: {
    position: "absolute",
    right: 15,
    bottom: 30,
  },
  mapButton: {
    backgroundColor: colors.MAIN_700,
    marginVertical: 5,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    shadowColor: colors.BLACK,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
  }
});

export default MapHomeScreen;