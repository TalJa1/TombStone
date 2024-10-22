/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import HeaderComponent from '../../components/HeaderComponent';
import {arrowBackIcon, arrowNextIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';

const AddPage = () => {
  useStatusBar('white');
  const [currentPage, setCurrentPage] = useState(0);

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <Page1 />;
      case 1:
        return <Page2 />;
      case 2:
        return <Page3 />;
      case 3:
        return <Page4 />;
      case 4:
        return <Page5 />;
      case 5:
        return <Page6 />;
      default:
        return <Page1 />;
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
          <HeaderComponent title="Thêm hồ sơ liệt sĩ" />
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
            <Text style={styles.title}>Các giấy tờ xác nhận</Text>
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

const Page1: React.FC = () => {
  return <View></View>;
};

const Page2: React.FC = () => <Text>Page 2 Content</Text>;
const Page3: React.FC = () => <Text>Page 3 Content</Text>;
const Page4: React.FC = () => <Text>Page 4 Content</Text>;
const Page5: React.FC = () => <Text>Page 5 Content</Text>;
const Page6: React.FC = () => <Text>Page 6 Content</Text>;

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
  title: {
    textAlign: 'center',
    color: '#D8672E',
    fontSize: 18,
    fontWeight: '800',
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
