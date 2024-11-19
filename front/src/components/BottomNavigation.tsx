import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '@/screens/home/HomeScreen';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type Props = {
  activeScreen: 'Home' | 'MyPage';
};


const BottomNavigation = ({ activeScreen }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Octicons 
          name="home" 
          color={activeScreen === 'Home' ? colors.MAIN_700 : colors.GRAY_500} 
          size={28}
        />
        <Text style={[styles.navText, { color: activeScreen === 'Home' ? colors.MAIN_700 : colors.GRAY_500 }]}>
          홈
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.qrCode}>
        <ImageBackground
          source={require('@/assets/navigation/qr_bg.png')}
          style={styles.qrBackground}
        >
          <MaterialIcons name='qr-code-scanner' color={colors.WHITE} size={32}/>
        </ImageBackground>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('MyPage')}
      >
        <Octicons 
          name="person" 
          color={activeScreen === 'MyPage' ? colors.MAIN_700 : colors.GRAY_500} 
          size={28}
        />
        <Text style={[styles.navText, { color: activeScreen === 'MyPage' ? colors.MAIN_700 : colors.GRAY_500 }]}>
          me
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... 기존 스타일을 여기로 복사 ...
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:16,
    columnGap: 16,
    width: "100%",
    elevation: 5, 
    shadowColor: '#666666',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    zIndex: 99,
  },
  navItem: {
    width: 70,  //
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 4,
  },
  qrCode: {
    position: 'absolute',
    left: SCREEN_WIDTH / 2 - 29,
    top: -30,  // 위로 올리기
    backgroundColor: colors.MAIN_700,
    width: 58,
    height: 58,
    borderRadius: 29,  // width/2 로 설정
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    zIndex: 1,
  },
  qrBackground: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomNavigation;