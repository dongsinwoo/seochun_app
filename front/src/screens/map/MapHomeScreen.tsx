import React, { useRef, useState } from 'react';
import {Alert, Platform, Pressable, StyleSheet, View} from 'react-native';
import MapView, { Callout, LatLng, LongPressEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { alerts, colors, mapNavigations } from '@/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CompositeNavigationProp,  DrawerActions,  useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MapStackParamList } from '@/navigations/stack/MapStackNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '@/navigations/drawer/MainDrawerNavigator';
import useUserLocation from '@/hooks/useUserLocation';
import usePermission from '@/hooks/usePermission';
// 아이콘을 직접 선택해서 사용해도됨
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import mapStyle from '@/styles/mapStyle';
import CustomMarker from '@/components/CustomMarker';
import useGetMarkers from '@/hooks/queries/useGetMarkers';


type Navigation = CompositeNavigationProp< 
StackNavigationProp<MapStackParamList, 'MapHome'>, 
DrawerNavigationProp<MainDrawerParamList>>

function MapHomeScreen() {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation<Navigation>();
  const {userLocation, isUserLocationError} = useUserLocation();
  const mapRef = useRef<MapView | null>(null);
  const [selectLocation, setSelectLocation] = useState<LatLng|null>();
  const {data: markers = []} = useGetMarkers();
  usePermission("LOCATION");

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

  const handlePressAddPost = () => {
    if(!selectLocation){
      return Alert.alert(
        alerts.NOT_SELECT_LOCATION.TITLE,
        alerts.NOT_SELECT_LOCATION.DESCRIPTION
      );
    }
    navigation.navigate(mapNavigations.MAP_ADD_POST,{
      location: selectLocation,
      
    });
    setSelectLocation(null);
  }

  const handlePressDirections = () => {
    navigation.navigate(mapNavigations.MAP_DIRECTIONS_STACK, {
      startLocation: selectLocation ?? userLocation,
      endLocation: userLocation,
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
        customMapStyle={mapStyle}
      
        // 지도를 클릭했을 때 마커추가
        onLongPress={handleLongPressMapView}
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
        <Pressable style={styles.mapButton} onPress={handlePressDirections}>
          <MaterialIcons name='directions' size={25} color={colors.WHITE} />
        </Pressable>
        <Pressable style={styles.mapButton} onPress={handlePressAddPost}>
          <MaterialIcons name='add' size={25} color={colors.WHITE} />
        </Pressable>
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
    position: 'relative',
  },
  drawerButton: {
    position: "absolute",
    left: 0,
    top: 40,
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