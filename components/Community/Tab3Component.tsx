import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PostRenderComponent from './PostRenderComponent';
import {CommunityPost, ProfileDataProps} from '../../services/typeProps';
import {CommunityTab3Data} from '../../services/renderData';
import {vh, vw} from '../../services/styleSheet';
import {communityUpdateIcon, searchingRequestIcon} from '../../assets/svgXML';

const Tab3Component = () => {
  const data: CommunityPost[] = CommunityTab3Data;

  const profileData = {
    user: 'Duy',
    avatar: require('../../assets/Home/avatar.png'),
    post: data.length,
    follower: 122,
    following: 60,
  };

  return (
    <View style={styles.container}>
      <Header profileData={profileData} />
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

const Header: React.FC<{profileData: ProfileDataProps}> = ({profileData}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSide}>
        <Image source={profileData.avatar} style={styles.avatar} />
        <Text style={styles.userName}>{profileData.user}</Text>
      </View>
      <View style={styles.rightSide}>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>{profileData.post}</Text>
            <Text style={styles.infoKey}>Posts</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>{profileData.follower}</Text>
            <Text style={styles.infoKey}>Followers</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>{profileData.following}</Text>
            <Text style={styles.infoKey}>Following</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButton2}>
            {searchingRequestIcon(vw(5), vw(5))}
            <Text style={styles.btn2Txt}>Yêu cầu tìm kiếm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton1}>
            {communityUpdateIcon(vw(5), vw(5))}
            <Text style={styles.btn1Txt}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Tab3Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: vh(2),
  },
  leftSide: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B45A1',
  },
  rightSide: {
    flex: 2,
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1B45A1',
  },
  infoKey: {
    fontSize: 14,
    fontWeight: '500',
    color: '#868686',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    padding: 10,
  },
  iconButton1: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#1B45A1',
    borderWidth: 1,
    borderRadius: 20,
  },
  iconButton2: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B45A1',
    borderRadius: 20,
  },
  btn1Txt: {
    fontSize: 12,
    color: '#1B45A1',
    marginLeft: 5,
  },
  btn2Txt: {
    fontSize: 12,
    color: '#EEF2EE',
    marginLeft: 5,
  },
});
