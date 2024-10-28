import AuthStackNavigator from "../stack/AuthStackNavigator";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator";
import useAuth from "../../hooks/queries/useAuth";

function RootNavigator(){
    // 인증 관련 컴포넌트
    // 인증이 되면 홈화면 안되면 login 스크린
    const {isLogin} = useAuth();

    return<>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}


export default RootNavigator;