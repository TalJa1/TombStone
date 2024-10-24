import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CommunityPost} from '../../services/typeProps';
import {CommunityTab1Data} from '../../services/renderData';
import {vh} from '../../services/styleSheet';

import PostRenderComponent from './PostRenderComponent';

const Tab1Component = () => {
  const data: CommunityPost[] = CommunityTab1Data;

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

export default Tab1Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
