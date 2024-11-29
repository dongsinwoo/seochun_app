import { ImageUri } from '@/types/domain';
import React from 'react';
import {StyleSheet, View, ScrollView, Image, Platform, Pressable} from 'react-native';

interface PreviewImageListProps {
  imageUris: ImageUri[];
}

function PreviewImageList({imageUris}: PreviewImageListProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {imageUris.map(({uri}, index) => (
          <Pressable key={index} style={styles.imageContainer}>
            <Image 
              source={{uri: `${
                Platform.OS === 'ios' 
                ? 'http://localhost:3030' 
                : 'http://10.0.2.2:3030'
            }/${uri}`}} 
              style={styles.image}
              resizeMode='cover'
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 3,
    paddingHorizontal:3
  },
  imageContainer: {
    width: 70,
    height: 70,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default PreviewImageList;