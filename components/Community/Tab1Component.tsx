import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CommunityPost} from '../../services/typeProps';
import {CommunityTab1Data} from '../../services/renderData';
import {vh} from '../../services/styleSheet';
import {likeIcon, commentIcon, shareIcon} from '../../assets/svgXML'; // Import the icons

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
  const [likeCount, setLikeCount] = useState(item.like);
  const [isLiked, setIsLiked] = useState(item.yourLike);

  const handleLikePress = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

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
        <Text style={styles.likeText}>
          {likeCount} {isLiked ? 'bạn & người khác' : 'người thích'}
        </Text>
        <Text style={styles.commentText}>{item.comment} bình luận</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.actionButton]}
          onPress={handleLikePress}>
          {likeIcon(20, 20, isLiked ? '#129BF7' : 'black')}
          <Text
            style={[
              styles.actionButtonText,
              isLiked && styles.likedButtonText,
            ]}>
            Thích
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          {commentIcon(20, 20, 'black')}
          <Text style={styles.actionButtonText}>Bình luận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          {shareIcon(20, 20, 'black')}
          <Text style={styles.actionButtonText}>Chia sẻ</Text>
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
    borderTopWidth: 2,
    borderTopColor: '#343434',
    borderBottomColor: '#343434',
    borderBottomWidth: 2,
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
    resizeMode: 'cover',
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
  },
  feedText: {
    fontSize: 14,
    marginBottom: 10,
    color: 'black',
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
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  likeText: {
    fontSize: 14,
    color: 'black',
  },
  commentText: {
    fontSize: 14,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  actionButtonText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
  likedButton: {
    backgroundColor: '#129BF7',
  },
  likedButtonText: {
    color: '#129BF7',
  },
});
