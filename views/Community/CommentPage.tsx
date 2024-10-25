/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {InforDetail, CommentProps} from '../../services/typeProps';
import {backIcon, bellIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PostRenderComponent from '../../components/Community/PostRenderComponent';
import {avatarList, userAvatar} from '../../services/renderData';

const generateRandomComments = (count: number): CommentProps[] => {
  const randomNames = [
    'Nguyễn Văn A',
    'Trần Thị B',
    'Lê Văn C',
    'Phạm Thị D',
    'Hoàng Văn E',
    'Đặng Thị F',
    'Bùi Văn G',
    'Đỗ Thị H',
    'Ngô Văn I',
    'Vũ Thị K',
  ];
  const randomComments = [
    'Bài viết rất hay!',
    'Cảm ơn bạn đã chia sẻ.',
    'Tôi rất đồng cảm với bạn.',
    'Bài viết này thật ý nghĩa.',
    'Cảm ơn bạn đã đăng bài.',
    'Tôi rất thích bài viết này.',
    'Bài viết rất hữu ích.',
    'Cảm ơn bạn đã chia sẻ thông tin.',
    'Bài viết rất cảm động.',
    'Tôi rất ủng hộ bạn.',
  ];

  const comments: CommentProps[] = [];
  for (let i = 0; i < count; i++) {
    const randomAvatar =
      avatarList[Math.floor(Math.random() * avatarList.length)];
    const randomName =
      randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomComment =
      randomComments[Math.floor(Math.random() * randomComments.length)];
    const randomLike = Math.floor(Math.random() * 100);
    const randomTime = `${Math.floor(Math.random() * 24)} giờ trước`;
    const randomAnswer = Math.floor(Math.random() * 10);

    comments.push({
      avatar: randomAvatar,
      name: randomName,
      comment: randomComment,
      like: randomLike,
      time: randomTime,
      answer: randomAnswer,
    });
  }
  return comments;
};

const CommentPage = () => {
  useStatusBar('#FFFFFF');
  const route = useRoute<RouteProp<InforDetail, 'Comment'>>();
  const itemData = route.params.itemData;
  const numberOfComments = itemData.comment;

  const [comments, setComments] = useState<CommentProps[]>(
    generateRandomComments(numberOfComments),
  );
  const [newCommentText, setNewCommentText] = useState('');

  const handleAddComment = () => {
    if (newCommentText.trim() === '') {
      return;
    }

    const newComment: CommentProps = {
      avatar: userAvatar,
      name: 'You',
      comment: newCommentText,
      like: 0,
      time: 'Vừa xong',
      answer: 0,
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <PostRenderComponent item={itemData} isNotBorder={true} />
          <View style={styles.commentsContainer}>
            {comments.map((comment, index) => (
              <View key={index} style={styles.comment}>
                <Image source={comment.avatar} style={styles.commentAvatar} />
                <View style={styles.commentContent}>
                  <View style={styles.commentTop}>
                    <Text style={styles.commentName}>{comment.name}</Text>
                    <Text style={styles.commentText}>{comment.comment}</Text>
                  </View>
                  <View style={styles.commentFooter}>
                    <Text style={styles.commentLike}>{comment.like} Thích</Text>
                    <Text style={styles.commentAnswer}>
                      {comment.answer} Trả lời
                    </Text>
                    <Text style={styles.commentTime}>{comment.time}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <Image source={userAvatar} style={styles.userAvatar} />
        <TextInput
          style={styles.input}
          placeholder="Viết bình luận..."
          placeholderTextColor={'#1E1E1E99'}
          value={newCommentText}
          onChangeText={setNewCommentText}
          onSubmitEditing={handleAddComment}
          returnKeyType="done"
        />
      </View>
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
    alignSelf: 'center',
    backgroundColor: '#EEF2EE',
    borderRadius: vw(50),
    padding: 10,
    position: 'absolute',
    right: vw(5),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsContainer: {
    padding: 10,
  },
  comment: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
  },
  commentText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#1E1E1E',
  },
  commentFooter: {
    flexDirection: 'row',
    columnGap: vw(5),
  },
  commentTime: {
    fontSize: 12,
    color: '#888',
  },
  commentLike: {
    fontSize: 12,
    color: '#888',
  },
  commentAnswer: {
    fontSize: 12,
    color: '#888',
  },
  commentTop: {
    backgroundColor: '#F0F2F5',
    paddingVertical: vh(1),
    paddingHorizontal: vw(3),
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    backgroundColor: '#F0F2F5',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    color: '#1E1E1E',
  },
});
