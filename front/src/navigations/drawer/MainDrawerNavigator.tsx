import { createDrawerNavigator } from "@react-navigation/drawer"
import MapHomeScreen from "../../screens/map/MapHomeScreen";
import FeedHomeScreen from "../../screens/feed/FeedHomeScreen"
import CalenderHomeScreen from "../../screens/calendar/CalenderHomeScreen";

const Drawer = createDrawerNavigator();
 function MainDrawerNavigator (){
   

    return(
        // drawer_navigator 부분 
        // 스크린별 화면 이동
        <Drawer.Navigator>
            <Drawer.Screen name="MapHome" component={MapHomeScreen} />
            <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
            <Drawer.Screen name="CalendarHome" component={CalenderHomeScreen} />
        </Drawer.Navigator>
    )
 }

 export default MainDrawerNavigator