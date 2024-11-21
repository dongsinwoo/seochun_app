import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from "../stack/AuthStackNavigator";
import useAuth from "../../hooks/queries/useAuth";
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';
import BikeStatusStackNavigator from '../stack/BikeStatusStackNavigator';
import { bikeStatusNavigations, myBikeRoadNavigations } from '@/constants';
import MyBikeRoadScreen from '@/screens/myBikeRoad/MyBikeRoadScreen';
import { HomeStackParamList } from '@/types/navigator';
import BottomTabNavigator from '../tab/BottomTabNavigator';

const Stack = createStackNavigator<HomeStackParamList>();

function RootNavigator(){
    const {isLogin} = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogin ? (
            // 로그인된 경우의 스크린들
            <>
                <Stack.Screen 
                    name="BottomTab" 
                    component={BottomTabNavigator} 
                    options={{
                        headerShown: false,
                        headerTitle: '메인'
                    }}
                />
                <Stack.Screen 
                    name="MapStack" 
                    component={MainDrawerNavigator}
                    options={({ route }) => ({
                        headerShown: true,
                        headerTitle: '지도'
                    })}
                />
                <Stack.Screen 
                    name={bikeStatusNavigations.BIKE_STATUS_HOME}
                    component={BikeStatusStackNavigator}
                    options={{
                        headerShown: true,
                        headerTitle: '느린 자전거'
                    }}
                />
                <Stack.Screen 
                    name={myBikeRoadNavigations.MY_BIKE_ROAD}
                    component={MyBikeRoadScreen}
                    options={{
                        headerShown: true,
                        headerTitle: "나만의 자전거길"
                    }}
                />
            </>
        ) : (
            // 로그인되지 않은 경우 인증 스크린으로
            <Stack.Screen 
                name="Auth" 
                component={AuthStackNavigator} 
            />
        )}
    </Stack.Navigator>
    );
}

export default RootNavigator;