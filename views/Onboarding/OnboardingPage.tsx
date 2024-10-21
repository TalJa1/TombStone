/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {OnboardingData} from '../../services/renderData';
import {OnboardingItem} from '../../services/typeProps';
import {vh, vw} from '../../services/styleSheet';

const OnboardingPage = () => {
  useStatusBar('black');
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

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.dotsContainer}>
        {OnboardingData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, {opacity: index === currentIndex ? 1 : 0.3}]}
          />
        ))}
      </View>
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
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#ECF3A3',
    textAlign: 'center',
    paddingHorizontal: vw(5),
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 3,
  },
});
