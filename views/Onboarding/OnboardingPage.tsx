/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {OnboardingData} from '../../services/renderData';
import {OnboardingItem} from '../../services/typeProps';
import {vh, vw} from '../../services/styleSheet';
import {nextIcon} from '../../assets/svgXML';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const OnboardingPage = () => {
  useStatusBar('black');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewRef = useRef(
    ({viewableItems}: {viewableItems: Array<{index: number | null}>}) => {
      if (viewableItems.length > 0) {
        if (viewableItems[0].index !== null) {
          setCurrentIndex(viewableItems[0].index);
        }
      }
    },
  );

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const renderItem = ({item}: {item: OnboardingItem}) => (
    <View style={styles.itemContainer}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const handleNextPress = () => {
    if (currentIndex < OnboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({index: nextIndex});
    } else {
      navigation.navigate('OffBoarding');
    }
  };

  const handleSkip = () => {
    navigation.navigate('OffBoarding');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.btnSkip} onPress={handleSkip}>
          <Text style={styles.btnSkipText}>Bỏ qua</Text>
        </TouchableOpacity>
        <FlatList
          data={OnboardingData}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          ref={flatListRef}
        />
      </View>
      <View style={styles.bottomGrp}>
        <View style={styles.dotsContainer}>
          {OnboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === currentIndex ? '#fff' : '#E6E6E640',
                  width: index === currentIndex ? 18 : 6,
                },
              ]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.btnNext} onPress={handleNextPress}>
          {nextIcon(vw(8), vw(8), '#547958')}
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/Onboarding/bottomBack.png')}
        style={styles.bottomBack}
      />
    </SafeAreaView>
  );
};

export default OnboardingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#547958',
  },
  itemContainer: {
    width: vw(100),
  },
  image: {
    width: vw(100),
    height: vh(60),
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginVertical: vh(2),
  },
  description: {
    fontSize: 14,
    color: '#ECF3A3',
    textAlign: 'center',
    paddingHorizontal: vw(5),
  },
  bottomGrp: {
    width: vw(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(10),
    zIndex: 2,
    marginTop: vh(2),
  },
  dotsContainer: {
    flexDirection: 'row',
  },
  dot: {
    height: 6,
    borderRadius: 5,
    backgroundColor: '#EEF2EE',
    marginHorizontal: 3,
  },
  btnNext: {
    padding: vw(4),
    backgroundColor: 'white',
    borderRadius: vw(50),
  },
  btnNextText: {
    fontSize: 16,
    color: '#547958',
    fontWeight: '700',
  },
  bottomBack: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  btnSkip: {
    position: 'absolute',
    top: vh(5),
    right: vw(5),
    zIndex: 2,
    paddingHorizontal: vw(3),
    paddingVertical: vh(1),
    backgroundColor: '#fff1',
    borderRadius: 8,
  },
  btnSkipText: {
    fontSize: 16,
    color: '#fff',
  },
});
