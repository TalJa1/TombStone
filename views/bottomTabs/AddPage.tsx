/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import HeaderComponent from '../../components/HeaderComponent';
import {arrowBackIcon, arrowNextIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import Page1 from '../../components/Home/Page1';
import Page2 from '../../components/Home/Page2';
import Page3 from '../../components/Home/Page3';
import Page4 from '../../components/Home/Page4';
import Page5 from '../../components/Home/Page5';
import Page6 from '../../components/Home/Page6';
import {Page1BottomData, Page1TopData} from '../../services/renderData';
import HeaderCheckInfor from '../../components/HeaderCheckInfor';
import {MartyrProfileItem} from '../../services/typeProps';

const AddPage = () => {
  useStatusBar('white');
  const [currentPage, setCurrentPage] = useState(0);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [images, setImages] = useState<(string | null)[]>([
    ...Page1TopData.map(() => null),
    ...Page1BottomData.map(() => null),
  ]);
  const [inforData, setInforData] = useState<MartyrProfileItem>({
    giayBaoTu: null,
    banTrichLuc: null,
    giayNoiHisinh: null,
    giayKhac: null,
    img: null,
    letterImg: null,
    titleImg: null,
    name: '',
    birthYear: '',
    sex: '',
    hometown: '',
    armyJoinDate: '',
    level: '',
    unit: '',
    deathDate: '',
    deathUnit: '',
    deathReason: '',
    firstTomb: '',
    fatherName: '',
    motherName: '',
    yourRelationshipWithMartyr: '',
    description: '',
    status: 0,
  });

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <Page1
            isCameraVisible={isCameraVisible}
            imageUri={imageUri}
            selectedIndex={selectedIndex}
            images={images}
            setIsCameraVisible={setIsCameraVisible}
            setImageUri={setImageUri}
            setSelectedIndex={setSelectedIndex}
            setImages={setImages}
          />
        );
      case 1:
        return <Page2 data={inforData} setData={setInforData} />;
      case 2:
        return <Page3 />;
      case 3:
        return <Page4 />;
      case 4:
        return <Page5 />;
      case 5:
        return <Page6 />;
    }
  };

  const handleNext = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.whole}>
          {currentPage === 0 ? (
            <HeaderComponent title="Thêm hồ sơ liệt sĩ" />
          ) : (
            <HeaderCheckInfor />
          )}
          <View style={styles.body}>
            <View style={styles.dotsContainer}>
              {[...Array(5)].map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentPage > 0 && index < currentPage && styles.activeDot,
                  ]}
                />
              ))}
            </View>
            {renderPage()}
            <View style={styles.btnGrp}>
              <TouchableOpacity
                style={[
                  styles.btnBack,
                  currentPage === 0 && styles.disabledBtn,
                ]}
                onPress={handleBack}
                disabled={currentPage === 0}>
                {arrowBackIcon(vw(8), vw(8))}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnNext,
                  currentPage === 5 && styles.disabledBtn,
                ]}
                onPress={handleNext}
                disabled={currentPage === 5}>
                {arrowNextIcon(vw(8), vw(8))}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  whole: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#EEF2EE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  dot: {
    width: vw(12),
    height: vh(0.7),
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#547958',
  },
  btnGrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vw(5),
    marginBottom: vh(2),
  },
  btnBack: {
    backgroundColor: '#ECF3A3',
    padding: vw(4),
    borderRadius: vw(50),
  },
  btnNext: {
    backgroundColor: '#ECF3A3',
    padding: vw(4),
    borderRadius: vw(50),
  },
  disabledBtn: {
    backgroundColor: '#D4D4D4',
  },
});
