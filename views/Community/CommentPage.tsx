/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {InforDetail} from '../../services/typeProps';
import {backIcon, bellIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PostRenderComponent from '../../components/Community/PostRenderComponent';

const CommentPage = () => {
  useStatusBar('#FFFFFF');
  const route = useRoute<RouteProp<InforDetail, 'Comment'>>();
  const itemData = route.params.itemData;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <PostRenderComponent item={itemData} isNotBorder={true}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          {backIcon(24, 24, '#547958')}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bài đăng</Text>
      </View>
      <TouchableOpacity style={styles.bellButton}>
        {bellIcon(24, 24, '#547958')}
      </TouchableOpacity>
    </View>
  );
};

export default CommentPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    backgroundColor: '#EEF2EE',
    borderRadius: vw(50),
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#547958',
    marginLeft: vw(5),
  },
  bellButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#EEF2EE',
    borderRadius: vw(50),
    padding: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
