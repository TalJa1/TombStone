import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {RouteProp, useRoute} from '@react-navigation/native';
import {InforDetail} from '../../services/typeProps';

const InforChecking = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<InforDetail, 'Martyr'>>();

  const {...data} = route.params;

  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>InforChecking</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InforChecking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
