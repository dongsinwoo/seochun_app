import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '@/screens/home/HomeScreen';
import MyPageScreen from '@/screens/user/MyPageScreen';
import type { BottomTabParamList } from '@/types/navigator';
import QRScreen from '@/screens/qr/QRScreen';
import CustomTabBar from '@/components/CustomTabBar';
import { colors } from '@/constants';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: colors.MAIN_700,
        tabBarInactiveTintColor: colors.GRAY_500,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="QR" 
        component={QRScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="My" 
        component={MyPageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;