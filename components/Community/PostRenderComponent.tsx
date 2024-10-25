import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CommunityPost} from '../../services/typeProps';
import {
  postStatusIcon,
  worldIcon,
  loveIcon,
  likeIcon,
  commentIcon,
  shareIcon,
} from '../../assets/svgXML';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const PostRenderComponent: React.FC<{
  item: CommunityPost;
  isNotBorder?: boolean;
}> = ({item, isNotBorder}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
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

  const handleComment = () => {
    navigation.navigate('CommentPage', {itemData: item});
  };

  return (
    <View style={[styles.postContainer, isNotBorder && styles.noBorder]}>
      <View style={styles.header}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.userInfo}>
          <View style={styles.nameStatusContainer}>
            <Text style={styles.userName}>{item.user}</Text>
            {item.postStatus !== '' && (
              <View style={styles.statusContainer}>
                {postStatusIcon(16, 16)}
                <Text style={styles.postStatusText}>{item.postStatus}</Text>
              </View>
            )}
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{item.time}</Text>
            {worldIcon(20, 20, '#868686')}
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <View style={styles.dotsContainer}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.feedText}>{item.feed}</Text>
      <View style={styles.imagesContainer}>
        {item.postImg.length === 1 ? (
          <Image source={item.postImg[0]} style={styles.singlePostImage} />
        ) : (
          item.postImg.map((img, index) => (
            <Image key={index} source={img} style={styles.postImage} />
          ))
        )}
      </View>
      <View style={styles.footer}>
        <View style={styles.likeContainer}>
          {loveIcon(16, 16, isLiked ? '#129BF7' : 'black')}
          <Text style={styles.likeText}>
            {' '}
            {likeCount} {isLiked ? 'bạn & người khác' : 'người thích'}
          </Text>
        </View>
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
        <TouchableOpacity style={styles.actionButton} onPress={handleComment}>
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

export default PostRenderComponent;

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 2,
    borderTopColor: '#343434',
    borderBottomColor: '#343434',
    borderBottomWidth: 2,
  },
  noBorder: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    resizeMode: 'cover',
  },
  userInfo: {
    flex: 1,
  },
  nameStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  postStatusText: {
    fontSize: 12,
    color: '#868686',
    marginLeft: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#868686',
    marginRight: 5,
  },
  menuButton: {
    padding: 5,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 20,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#A7A8A8',
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
  singlePostImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
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
