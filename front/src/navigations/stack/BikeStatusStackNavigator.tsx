import BikeStatusScreen from '@/screens/bikeStatus/BikeStatusScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { bikeStatusNavigations, colors } from '@/constants';
// ... existing imports ...

type BikeStatusStackParamList = {
    [bikeStatusNavigations.BIKE_STATUS] : undefined;
}

const Stack = createStackNavigator<BikeStatusStackParamList>();

function BikeStatusStackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
            backgroundColor: colors.MAIN_700,  // 헤더 배경색
            },
            headerTintColor: colors.WHITE,  // 헤더 텍스트와 아이콘 색상
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            headerBackTitleVisible: false,  // iOS에서 뒤로가기 텍스트 숨기기
            headerLeftContainerStyle: {
            paddingLeft: 10,  // 뒤로가기 버튼 여백 조정
            },
        }}>
      {/* ... other screens ... */}
      <Stack.Screen 
        name={bikeStatusNavigations.BIKE_STATUS} 
        component={BikeStatusScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default BikeStatusStackNavigator;