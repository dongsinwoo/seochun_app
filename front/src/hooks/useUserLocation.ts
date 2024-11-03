
import Geolocation from "@react-native-community/geolocation";
import { useEffect, useState } from "react";
import { LatLng } from "react-native-maps";
 
function useUserLocation() {
  const [userLocation, setUserLocation] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  });
  const [isUserLocationError, setIsUserLocationError] = useState(false);
  // 내 위치 버튼 만드는법
  // 1. 나의 위치를 구하기
  // 2. 지도를 그곳으로 이동
  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      const {latitude, longitude} = info.coords;
      console.log(latitude, longitude);
      setUserLocation({latitude, longitude});
      setIsUserLocationError(false);
    },(error) => {
      console.log(error);
      setIsUserLocationError(true);
    },{
      enableHighAccuracy: true,
    });
  }, []);

  return {userLocation, isUserLocationError};
}

export default useUserLocation;