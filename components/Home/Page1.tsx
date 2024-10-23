/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {cameraIcon, cancelIcon, checkIcon} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {Page1BottomData, Page1TopData} from '../../services/renderData';
import {launchImageLibrary} from 'react-native-image-picker';
import {ImageFilter} from 'react-native-image-filter-kit';
import { Page1Props } from '../../services/typeProps';

const Page1: React.FC<Page1Props> = ({
  isCameraVisible,
  imageUri,
  selectedIndex,
  images,
  setIsCameraVisible,
  setImageUri,
  setSelectedIndex,
  setImages,
}) => {
  const handleCameraOpen = (index: number) => {
    setSelectedIndex(index);
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

  const handleConfirmImage = () => {
    if (selectedIndex !== null && imageUri) {
      const newImages = [...images];
      newImages[selectedIndex] = imageUri;
      setImages(newImages);
      setImageUri(null);
      setSelectedIndex(null);
    }
  };

  const handleCancelImage = () => {
    setImageUri(null);
    setIsCameraVisible(true);
  };

  const handleFacesDetected = ({faces}: {faces: any[]}) => {
    console.log('Faces detected:', faces);
    // Your face detection logic

    if (faces.length > 0) {
      // Apply a filter to the image to make it prettier
      applyImageFilter();
    }
  };

  const applyImageFilter = () => {
    // Example of applying a filter using react-native-image-filter-kit
    return (
      <ImageFilter
        config={{
          name: 'Sepia',
          image: require('../../assets/Home/imgPicker.png'),
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={require('../../assets/Home/imgPicker.png')}
        />
      </ImageFilter>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Các giấy tờ xác nhận</Text>
        <View style={styles.row}>
          {Page1TopData.map((item, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <ImagePickerView
                  label={item}
                  onPress={() => handleCameraOpen(index)}
                  imageUri={images[index]}
                />
              </View>
            );
          })}
        </View>
      </View>
      <View>
        <Text style={styles.title}>Các vật phẩm liên quan của liệt sĩ</Text>
        <View style={styles.row}>
          {Page1BottomData.map((item, index) => {
            const adjustedIndex = index + Page1TopData.length;
            return (
              <View key={index} style={styles.itemContainer}>
                <ImagePickerView
                  label={item}
                  onPress={() => handleCameraOpen(adjustedIndex)}
                  imageUri={images[adjustedIndex]}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.imagePickerContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() =>
              handleCameraOpen(Page1TopData.length + Page1BottomData.length)
            }>
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
            faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
            flashMode={RNCamera.Constants.FlashMode.off}
            onFacesDetected={handleFacesDetected}
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

      <Modal visible={!!imageUri} animationType="slide">
        <View style={styles.fullScreenImageContainer}>
          <View style={styles.checkImg}>
            <Text style={styles.checkImgTxt}>Xác nhận ảnh</Text>
          </View>
          {imageUri && (
            <Image source={{uri: imageUri}} style={styles.fullScreenImage} />
          )}
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleCancelImage}>
            {cancelIcon(vw(9), vw(9))}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleConfirmImage}
            style={styles.confirmButton}>
            {checkIcon(vw(9), vw(9))}
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const ImagePickerView: React.FC<{
  label: string;
  onPress: () => void;
  imageUri: string | null;
}> = ({label, onPress, imageUri}) => {
  return (
    <View style={styles.imagePickerContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.imagePreview} />
        ) : (
          <>
            {cameraIcon(vw(8), vw(8))}
            <Text style={styles.upTxt}>Tải lên</Text>
          </>
        )}
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
    alignItems: 'center',
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
  libraryButton: {
    alignSelf: 'center',
    position: 'absolute',
    left: vw(5),
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
  fullScreenImageContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#899398',
  },
  fullScreenImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  confirmButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#ECF3A3',
    width: vw(50),
    paddingVertical: vh(2),
    alignItems: 'center',
  },
  cancelButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#343434',
    width: vw(50),
    paddingVertical: vh(2),
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  checkImg: {
    backgroundColor: '#1212128C',
    width: vw(80),
    paddingVertical: vh(1.5),
    alignItems: 'center',
    borderRadius: vw(50),
    position: 'relative',
    top: vh(2),
  },
  checkImgTxt: {
    color: '#fff',
    fontSize: 24,
  },
});
