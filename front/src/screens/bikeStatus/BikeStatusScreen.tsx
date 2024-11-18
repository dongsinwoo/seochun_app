import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../home/HomeScreen';


type BikeStatusScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "BikeStatusHome">;
};

function BikeStatusScreen({ navigation }: BikeStatusScreenProps) {
  return (
    <View style={styles.container}>
      <Text>자전거 상태 화면</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default BikeStatusScreen;