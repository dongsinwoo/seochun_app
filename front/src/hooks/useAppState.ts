import { useEffect, useRef, useState } from "react";
import { AppState } from "react-native";


// 사용자가 화면 밖을 나갔다가 들어왔을 때 다시한번 권한체크해서 위치를 받아오게하는 커스텀 훅
const useAppState= () => {
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
    const [isComback, setIsComback] = useState(false);
  
    useEffect(() => {
      const subscription = AppState.addEventListener('change', nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          setIsComback(true);
        }

        if (appState.current.match(/active/) && nextAppState === 'background') {
          setIsComback(false);
        }
  
        appState.current = nextAppState;
        setAppStateVisible(appState.current);
        console.log('AppState', appState.current);
      });
  
      return () => {
        subscription.remove();
      };
    }, []);

    return {isComback};
  };

export default useAppState;