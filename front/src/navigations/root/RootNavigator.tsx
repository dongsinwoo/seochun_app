import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from "../stack/AuthStackNavigator";
import useAuth from "../../hooks/queries/useAuth";
import HomeScreen from "@/screens/home/HomeScreen";
import MapScreen from "@/screens/map/MapHomeScreen";
import { RootStackParamList } from '@/screens/home/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(){
    const {isLogin} = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen 
                name="MapStack" 
                component={MapScreen}
                options={{
                    headerShown: true,
                    headerTitle: '지도'
                }}
            />
        </Stack.Navigator>
    );
}

export default RootNavigator;