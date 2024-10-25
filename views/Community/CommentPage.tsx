/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {RouteProp, useRoute} from '@react-navigation/native';
import {InforDetail} from '../../services/typeProps';

const CommentPage = () => {
  useStatusBar('#EEF2EE');
  const route = useRoute<RouteProp<InforDetail, 'Comment'>>();
  const itemData = route.params.itemData;

  console.log(itemData);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Text>CommentPage</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommentPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2EE',
  },
});
