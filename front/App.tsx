/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations/root/RootNavigator';

function App (){
  // 클래스형 컴포넌트

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    
  );
}

export default App;
