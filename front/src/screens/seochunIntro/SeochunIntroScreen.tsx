import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const AttractionCard = ({ name, description, icon, image }: { name: string, description: string, icon: string, image: string }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <MaterialIcons name={icon} size={24} color="#1E88E5" style={styles.cardIcon} />
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  </View>
);

const InfoItem = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <View style={styles.infoItem}>
    <MaterialIcons name={icon} size={24} color="#1E88E5" style={styles.infoIcon} />
    <View>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoDescription}>{description}</Text>
    </View>
  </View>
);

const SeocheonIntroScreen = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section:any) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const attractions = [
    {
      name: "국립생태원",
      description: "다양한 생태계를 체험할 수 있는 생태 테마파크",
      icon: "nature_people",
      image: "https://via.placeholder.com/300x200?text=National+Institute+of+Ecology"
    },
    {
      name: "한산모시관",
      description: "한산모시의 역사와 문화를 배울 수 있는 박물관",
      icon: "museum",
      image: "https://via.placeholder.com/300x200?text=Hansan+Mosi+Museum"
    },
    {
      name: "신성리 갈대밭",
      description: "아름다운 갈대 군락지와 산책로",
      icon: "grass",
      image: "https://via.placeholder.com/300x200?text=Sinseongri+Reed+Field"
    },
    {
      name: "서천해양생물자원관",
      description: "다양한 해양생물을 관찰할 수 있는 전시관",
      icon: "water",
      image: "https://via.placeholder.com/300x200?text=Marine+Bio+Resources+Museum"
    },
    {
      name: "금강하구둑",
      description: "철새 도래지로 유명한 생태 관광지",
      icon: "flight_takeoff",
      image: "https://via.placeholder.com/300x200?text=Geumgang+River+Estuary+Bank"
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/400x200?text=Welcome+to+Seocheon' }}
        style={styles.headerImage}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>서천에 오신 것을 환영합니다</Text>
        <Text style={styles.description}>
          충청남도 서해안에 위치한 서천은 아름다운 자연과 풍부한 문화유산을 자랑하는 도시입니다. 
          갈대밭, 해변, 그리고 생태공원이 어우러진 서천에서 여유로운 시간을 보내세요.
        </Text>

        <Section title="서천의 역사">
          <Text style={styles.text}>
            서천은 삼국시대부터 중요한 지역으로, 백제의 군사 요충지였습니다. 조선시대에는 한산모시의 주산지로 유명했으며, 
            현재까지도 그 전통을 이어오고 있습니다. 근대에는 금강을 중심으로 한 수운과 농업의 발달로 번영을 누렸습니다.
          </Text>
        </Section>

        <Section title="주요 관광지">
          {attractions.map((attraction, index) => (
            <AttractionCard
              key={index}
              name={attraction.name}
              description={attraction.description}
              icon={attraction.icon}
              image={attraction.image}
            />
          ))}
        </Section>

        <Section title="지역 특산물">
          <InfoItem 
            icon="restaurant"
            title="서천 김"
            description="청정 갯벌에서 생산되는 고품질 김"
          />
          <InfoItem 
            icon="local_florist"
            title="한산모시"
            description="천연 섬유로 만든 전통 직물"
          />
          <InfoItem 
            icon="set_meal"
            title="서천 굴"
            description="풍부한 영양과 깊은 맛의 서해안 굴"
          />
        </Section>

        <Section title="축제 및 행사">
          <InfoItem 
            icon="event"
            title="한산모시문화제"
            description="매년 6월 개최되는 전통 문화 축제"
          />
          <InfoItem 
            icon="nature"
            title="철새여행 페스티벌"
            description="가을에 열리는 생태 관광 축제"
          />
        </Section>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>서천 여행 계획하기</Text>
          <MaterialIcons name="arrow_forward" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    lineHeight: 24,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 15,
  },
  cardIcon: {
    position: 'absolute',
    top: -20,
    right: 15,
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 20,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  infoDescription: {
    fontSize: 14,
    color: '#666666',
  },
  button: {
    backgroundColor: '#1E88E5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default SeocheonIntroScreen;