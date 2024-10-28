/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations/root/RootNavigator';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './src/api/queryClient';

function App (){
  // 클래스형 컴포넌트

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
   
    
  );
}

export default App;
