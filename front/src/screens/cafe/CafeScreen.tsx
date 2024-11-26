import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FeatureItem = ({ icon, text }: { icon: string, text: string }) => (
  <View style={styles.featureItem}>
    <MaterialIcons name={icon} size={24} color="#333333" />
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const CafeScreen = () => {
  const features = [
    { icon: 'coffee', text: "엄선된 원두의 프리미엄 커피" },
    { icon: 'eco', text: "여유로운 시간을 즐기는 공간" },
    { icon: 'eco', text: "친환경 재료로 만든 건강한 디저트" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/400x300?text=Slow+Cafe' }}
        style={styles.image}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>느린카페</Text>
        <Text style={styles.subtitle}>여유로운 시간, 특별한 경험</Text>

        <View style={styles.divider} />

        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} text={feature.text} />
        ))}

        <View style={styles.divider} />

        <View style={styles.locationContainer}>
          <MaterialIcons name="place" size={24} color="#333333" />
          <Text style={styles.locationText}>서천군 서면 느린길 123</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>방문 예약하기</Text>
          <MaterialIcons name="arrow_forward" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureText: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  locationText: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 16,
  },
  button: {
    backgroundColor: '#4A4A4A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
});

export default CafeScreen;