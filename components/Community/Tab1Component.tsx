import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CommunityPost} from '../../services/typeProps';
import {CommunityTab1Data} from '../../services/renderData';
import {vh} from '../../services/styleSheet';

const Tab1Component = () => {
  const data: CommunityPost[] = CommunityTab1Data;

  return (
    <View style={styles.container}>
      <View style={{marginVertical: vh(2)}}>
        {data.map((item, index) => (
          <View key={index}>
            <PostRender item={item} />
          </View>
        ))}
      </View>
    </View>
  );
};

const PostRender: React.FC<{item: CommunityPost}> = ({item}) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={item.avatar} style={styles.avatar} />
        <Text style={styles.userName}>{item.user}</Text>
      </View>
      <Text style={styles.feedText}>{item.feed}</Text>
      <View style={styles.imagesContainer}>
        {item.postImg.map((img, index) => (
          <Image key={index} source={img} style={styles.postImage} />
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.likeText}>{item.like} likes</Text>
        <Text style={styles.commentText}>{item.comment} comments</Text>
        <TouchableOpacity style={styles.likeButton}>
          <Text style={styles.likeButtonText}>
            {item.yourLike ? 'Unlike' : 'Like'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab1Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedText: {
    fontSize: 14,
    marginBottom: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  postImage: {
    width: 100,
    height: 100,
    marginRight: 5,
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  likeButton: {
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  likeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
