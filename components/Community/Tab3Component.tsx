import {StyleSheet, View} from 'react-native';
import React from 'react';
import PostRenderComponent from './PostRenderComponent';
import { CommunityPost } from '../../services/typeProps';
import { CommunityTab3Data } from '../../services/renderData';
import { vh } from '../../services/styleSheet';

const Tab3Component = () => {
  const data: CommunityPost[] = CommunityTab3Data;
  return (
    <View style={styles.container}>
      <View style={{marginVertical: vh(2)}}>
        {data.map((item, index) => (
          <View key={index}>
            <PostRenderComponent item={item} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Tab3Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
