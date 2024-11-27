import { drectionsStackNavigations, mapNavigations } from "@/constants";
import DirectionsScreen from "@/screens/map/DirectionsScreen";
import DirectionsStatusScreen from "@/screens/map/DirectionsStatusScreen";

import { createStackNavigator } from '@react-navigation/stack';

type DirectionsStackParamList = {
    [drectionsStackNavigations.MAP_DIRECTIONS] : undefined;
    [drectionsStackNavigations.MAP_DIRECTIONS_STATUS] : undefined;
}

const Stack = createStackNavigator<DirectionsStackParamList>();

function DirectionsStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={drectionsStackNavigations.MAP_DIRECTIONS}
                component={DirectionsScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name={drectionsStackNavigations.MAP_DIRECTIONS_STATUS}
                component={DirectionsStatusScreen}
                options={{
                    headerShown: false
                }}
            />
            
        </Stack.Navigator>
    )
}

export default DirectionsStackNavigator;