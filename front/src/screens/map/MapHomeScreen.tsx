import React, { useRef, useState } from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import MapView, { Callout, LatLng, LongPressEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { colors } from '@/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CompositeNavigationProp,  DrawerActions,  useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MapStackParamList } from '@/navigations/stack/MapStackNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '@/navigations/drawer/MainDrawerNavigator';
import useAuth from '@/hooks/queries/useAuth';
import useUserLocation from '@/hooks/useUserLocation';
import usePermission from '@/hooks/usePermission';
// 아이콘을 직접 선택해서 사용해도됨
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import mapStyle from '@/styles/mapStyle';
import CustomMarker from '@/components/CustomMarker';

type Navigation = CompositeNavigationProp< 
StackNavigationProp<MapStackParamList, 'MapHome'>, 
DrawerNavigationProp<MainDrawerParamList>>

function MapHomeScreen() {
  const inset = useSafeAreaInsets();
  const {logoutMutation} = useAuth();
  const navigation = useNavigation<Navigation>();
  const {userLocation, isUserLocationError} = useUserLocation();
  const mapRef = useRef<MapView | null>(null);
  const [selectLocation, setSelectLocation] = useState<LatLng>();

  usePermission("LOCATION");
  const handleLogout = () => {
    logoutMutation.mutate(null);
  }
  const handlePressUserLocation = () => {
    if(isUserLocationError) return;
    mapRef.current?.animateToRegion({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    });
  }

  const handleLongPressMapView = (nativeEvent: LongPressEvent) => {
    setSelectLocation(nativeEvent.nativeEvent.coordinate);
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
        customMapStyle={mapStyle}

        // 지도를 클릭했을 때 마커추가
        onLongPress={handleLongPressMapView}
        >
          <CustomMarker
            coordinate={{
              latitude: 36.077406, 
              longitude: 126.693889}}
              color="RED"
          />
          <CustomMarker
            coordinate={{
              latitude: 36.078406, 
              longitude: 126.693889}}
              color="BLUE"
              score={3}
          />
          <CustomMarker
            coordinate={{
              latitude: 36.076406, 
              longitude: 126.693889}}
              color="YELLOW"
              score={1}
          />
          {selectLocation && (
            <Callout>
              <Marker
                coordinate={selectLocation}
              />
            </Callout>
          )}
        </MapView>
      
      <Pressable 
      style={[styles.drawerButton, {top: inset.top || 20}]} 
      onPress={() =>navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Ionicons name='menu' size={25} color={colors.WHITE} />
      </Pressable>
      <View style={styles.buttonList}>
        <Pressable style={styles.mapButton} onPress={handlePressUserLocation}>
          <MaterialIcons name='my-location' size={25} color={colors.WHITE} />
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