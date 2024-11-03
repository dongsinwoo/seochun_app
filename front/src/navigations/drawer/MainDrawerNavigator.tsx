import { createDrawerNavigator } from "@react-navigation/drawer"
import FeedHomeScreen from "../../screens/feed/FeedHomeScreen"
import CalenderHomeScreen from "../../screens/calendar/CalenderHomeScreen";
import MapStackNavigator, { MapStackParamList } from "../stack/MapStackNavigator";
import { mainNavigations } from "@/constants";
import { NavigatorScreenParams } from "@react-navigation/native";

export type MainDrawerParamList = {
    [mainNavigations.HOME] : NavigatorScreenParams<MapStackParamList>;
    [mainNavigations.FEED] : undefined;
    [mainNavigations.CALENDAR] : undefined;
}

const Drawer = createDrawerNavigator<MainDrawerParamList>();
 function MainDrawerNavigator (){
   

    return(
        // drawer_navigator 부분 
        // 스크린별 화면 이동
        <Drawer.Navigator  
            screenOptions={{
            drawerType: "front",
            headerShown: false,
        }}>
            <Drawer.Screen 
            name={mainNavigations.HOME} 
            component={MapStackNavigator} 
            options={{
                title: "홈"
            }} />
            <Drawer.Screen name={mainNavigations.FEED} component={FeedHomeScreen} options={{
                title: "피드"
            }}/>
            <Drawer.Screen name={mainNavigations.CALENDAR} component={CalenderHomeScreen} options={{
                title: "캘린더"
            }}/>
        </Drawer.Navigator>
    )
 }

 export default MainDrawerNavigator