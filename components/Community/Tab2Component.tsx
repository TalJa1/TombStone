import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CommunityTab2Data} from '../../services/renderData';
import {CommunityPost} from '../../services/typeProps';
import PostRenderComponent from './PostRenderComponent';
import { vh } from '../../services/styleSheet';

const Tab2Component = () => {
  const data: CommunityPost[] = CommunityTab2Data;

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

export default Tab2Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
