import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {cameraIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {Page1BottomData, Page1TopData} from '../../services/renderData';
import {launchImageLibrary} from 'react-native-image-picker';

const Page1: React.FC = () => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);

  console.log('Image URI: ', imageUri);

  const handleCameraOpen = () => {
    setIsCameraVisible(true);
  };

  const handleCameraClose = () => {
    setIsCameraVisible(false);
  };

  const handleCapture = async (camera: RNCamera | null) => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
      setImageUri(data.uri);
      handleCameraClose();
    }
  };

  const handleImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        if (response.assets && response.assets.length > 0) {
          console.log('Image URI: ', response.assets[0].uri);
          if (response.assets[0].uri) {
            setImageUri(response.assets[0].uri);
          }
        }
        handleCameraClose();
      }
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Các giấy tờ xác nhận</Text>
        <View style={styles.row}>
          {Page1TopData.map((item, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <ImagePickerView label={item} onPress={handleCameraOpen} />
              </View>
            );
          })}
        </View>
      </View>
      <View>
        <Text style={styles.title}>Các vật phẩm liên quan của liệt sĩ</Text>
        <View style={styles.row}>
          {Page1BottomData.map((item, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <ImagePickerView label={item} onPress={handleCameraOpen} />
              </View>
            );
          })}
        </View>
        <View style={styles.imagePickerContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleCameraOpen}>
            {cameraIcon(vw(8), vw(8))}
            <Text style={styles.upTxt}>Tải lên</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Tiêu đề</Text>
        </View>
      </View>

      <Modal visible={isCameraVisible} animationType="slide">
        <View style={styles.cameraContainer}>
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            captureAudio={false}>
            {({camera}) => (
              <View style={styles.captureContainer}>
                <TouchableOpacity
                  onPress={handleImagePicker}
                  style={styles.libraryButton}>
                  <Image source={require('../../assets/Home/imgPicker.png')} />
                </TouchableOpacity>
                <View style={styles.borderCapture}>
                  <TouchableOpacity
                    onPress={() => handleCapture(camera)}
                    style={styles.capture}
                  />
                </View>
              </View>
            )}
          </RNCamera>
        </View>
      </Modal>
    </View>
  );
};

const ImagePickerView: React.FC<{label: string; onPress: () => void}> = ({
  label,
  onPress,
}) => {
  return (
    <View style={styles.imagePickerContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        {cameraIcon(vw(8), vw(8))}
        <Text style={styles.upTxt}>Tải lên</Text>
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: vw(5),
  },
  title: {
    textAlign: 'center',
    color: '#D8672E',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: vh(2),
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%', // Adjust the width to fit two items per row with some spacing
    marginBottom: vh(2),
  },
  imagePickerContainer: {
    padding: vw(4),
    borderRadius: vw(2),
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh(1),
    height: vh(20),
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#969696',
  },
  upTxt: {
    color: '#969696',
    fontSize: 16,
  },
  label: {
    color: '#484848',
    fontSize: 16,
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    width: vw(100),
  },
  borderCapture: {
    borderRadius: vw(200),
    padding: 2,
    borderWidth: 2,
    borderColor: '#fff',
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: vw(200),
    height: vw(15),
    width: vw(15),
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  captureText: {
    fontSize: 14,
  },
  close: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  closeText: {
    fontSize: 14,
  },
  libraryButton: {
    alignSelf: 'center',
    position: 'absolute',
    left: vw(5),
  },
});
