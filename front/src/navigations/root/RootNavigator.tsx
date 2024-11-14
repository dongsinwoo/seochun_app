import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from "../stack/AuthStackNavigator";
import useAuth from "../../hooks/queries/useAuth";
import HomeScreen from "@/screens/home/HomeScreen";
import { RootStackParamList } from '@/screens/home/HomeScreen';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(){
    const {isLogin} = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogin ? (
            // 로그인된 경우의 스크린들
            <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen 
                    name="MapStack" 
                    component={MainDrawerNavigator}
                    options={{
                        headerShown: true,
                        headerTitle: '지도'
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