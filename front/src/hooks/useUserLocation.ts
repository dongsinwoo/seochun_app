
import Geolocation from "@react-native-community/geolocation";
import { useEffect, useState } from "react";
import { LatLng } from "react-native-maps";
import useAppState from "./useAppState";
 
function useUserLocation() {
  const [userLocation, setUserLocation] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  });
  const [isUserLocationError, setIsUserLocationError] = useState(false);
  const {isComback} = useAppState();
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

    // 사용자가 화면 밖을 나갔다가 들어왔을 때 다시한번 권한체크해서 위치를 받아오게하는 커스텀 훅
  }, [isComback]);

  return {userLocation, isUserLocationError};
}

export default useUserLocation;