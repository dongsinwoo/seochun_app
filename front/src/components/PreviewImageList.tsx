import { colors } from '@/constants';
import { ImageUri } from '@/types/domain';
import React from 'react';
import {StyleSheet, View, ScrollView, Image, Platform, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface PreviewImageListProps {
  imageUris: ImageUri[];
  onDelete?: (uri: string) => void;
  onChangeOrder?: (fromIndex: number, toIndex: number) => void;
}

function PreviewImageList({imageUris, onDelete, onChangeOrder}: PreviewImageListProps) {
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
            <Pressable onPress={() => onDelete && onDelete(uri)} style={[styles.deleteButton, styles.imageButton]}>
              <Ionicons name='close' size={16} color={colors.WHITE}/>
            </Pressable>
            {index !== 0 && (
              <Pressable onPress={() => onChangeOrder && onChangeOrder(index, index - 1)} style={[styles.moveLeftButton, styles.imageButton]}>
                <Ionicons name='arrow-back-outline' size={16} color={colors.WHITE}/>
              </Pressable>
            )}
            {index !== imageUris.length - 1 && (
              <Pressable onPress={() => onChangeOrder && onChangeOrder(index, index + 1)} style={[styles.moveRightButton, styles.imageButton]}>
                <Ionicons name='arrow-forward-outline' size={16} color={colors.WHITE}/>
              </Pressable>
            )}
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
  imageButton: {
    position: 'absolute',
    
    backgroundColor: colors.BLACK,
    zIndex: 1,
  },
  deleteButton: {
    top: 0,
    right: 0,
  },
  moveLeftButton: {
    bottom: 0,
    left: 0,
  },
  moveRightButton: {
    bottom: 0,
    right: 0,
  },
});

export default PreviewImageList;