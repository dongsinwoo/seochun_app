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
import { StatusBar, SafeAreaView, Platform, View } from 'react-native';
import { colors } from '@/constants';

function App() {
  if (Platform.OS === 'ios') {
    return (
      <QueryClientProvider client={queryClient}>
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: colors.MAIN_700 }}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ backgroundColor: colors.MAIN_700 }} />
          </View>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </View>
        </View>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar 
        backgroundColor={colors.MAIN_700} 
        barStyle="light-content" 
        translucent={false} 
      />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
