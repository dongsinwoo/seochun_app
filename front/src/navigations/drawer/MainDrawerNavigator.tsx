import { createDrawerNavigator } from "@react-navigation/drawer"
import FeedHomeScreen from "../../screens/feed/FeedHomeScreen"
import CalenderHomeScreen from "../../screens/calendar/CalenderHomeScreen";
import MapStackNavigator, { MapStackParamList } from "../stack/MapStackNavigator";
import { colors, mainNavigations } from "@/constants";
import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Dimensions } from "react-native";
import CustomDrawerContent from "./CustomDrawerContent";


export type MainDrawerParamList = {
    [mainNavigations.HOME] : NavigatorScreenParams<MapStackParamList>;
    [mainNavigations.FEED] : undefined;
    [mainNavigations.CALENDAR] : undefined;
}

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const DrawerActions = (route: RouteProp<MainDrawerParamList>, focused: boolean) => {
    let iconName = '';

    switch(route.name){
        case mainNavigations.HOME:{
            iconName = "location-on"
            break;
        }
        case mainNavigations.FEED:{
            iconName = "book"
            break;
        }
        case mainNavigations.CALENDAR:{
            iconName = "event-note"
            break;
        }
    }
    return <MaterialIcons name={iconName} color={focused ? colors.MAIN_700 : colors.GRAY_500} size={18} />
}   

function MainDrawerNavigator (){
   
    return(
        // drawer_navigator 부분 
        // 스크린별 화면 이동
        <Drawer.Navigator  
            drawerContent={CustomDrawerContent}
            screenOptions={({route}) => ({
            drawerType: "front",
            headerShown: false,
            drawerStyle: {
                width: Dimensions.get("screen").width * 0.6,
            },
            drawerLabelStyle: {
                fontWeight: "600",
            },
            drawerIcon: ({focused}) => DrawerActions(route, focused)
        })}>
            <Drawer.Screen 
            name={mainNavigations.HOME} 
            component={MapStackNavigator} 
            options={{
                title: "홈",
                swipeEnabled: false,
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

 export default MainDrawerNavigator;