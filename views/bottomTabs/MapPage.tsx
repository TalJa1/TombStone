/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import Mapbox from '@rnmapbox/maps';
import {vh, vw} from '../../services/styleSheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {FeatureCollection, Geometry, GeoJsonProperties} from 'geojson';
import {MapLocation} from '../../services/renderData';

Mapbox.setAccessToken(
  'pk.eyJ1IjoidGFsamExIiwiYSI6ImNtMm82enp6ODBlNHAyanNndnNmMHowYWYifQ.-6cYPNPzMoKrlIp428Yxdw',
);

const geoJsonData: FeatureCollection<Geometry, GeoJsonProperties> = {
  type: 'FeatureCollection',
  features: MapLocation,
};

const MapPage = () => {
  useStatusBar('#91A895');
  const mapRef = useRef<Mapbox.MapView>(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleNavigateToList = () => {
    navigation.navigate('TombMapList');
  };

  const handleShowPallete = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.page}>
          <View style={styles.containerMap}>
            <TouchableOpacity
              style={styles.topButton}
              onPress={handleNavigateToList}>
              <Text style={styles.topButtonTxt}>Danh sách nghĩa trang</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={handleShowPallete}>
              <Text style={styles.bottomButtonTxt}>Quy ước màu</Text>
            </TouchableOpacity>
            <Mapbox.MapView ref={mapRef} style={styles.map}>
              <Mapbox.Camera
                centerCoordinate={[105.8342, 21.0278]} // Hanoi, Vietnam
                zoomLevel={5.5}
                animationDuration={2000}
              />
              <Mapbox.ShapeSource id="provinces" shape={geoJsonData}>
                <Mapbox.CircleLayer
                  id="province-layer"
                  style={{
                    circleColor: ['get', 'color'],
                    circleRadius: 10,
                    circleOpacity: 0.7,
                  }}
                />
              </Mapbox.ShapeSource>
            </Mapbox.MapView>
          </View>
        </View>
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}>
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={handleCloseModal}>
          <View style={styles.modalContent}>
            <Image
              source={require('../../assets/Map/pallete.png')}
              style={styles.modalImage}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default MapPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91A895',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMap: {
    height: vh(100),
    width: vw(100),
  },
  map: {
    flex: 1,
  },
  topButton: {
    position: 'absolute',
    top: vh(4),
    backgroundColor: '#547958',
    padding: 10,
    borderRadius: vw(50),
    zIndex: 2,
    alignSelf: 'center',
  },
  topButtonTxt: {
    color: 'white',
    fontSize: 16,
  },
  bottomButton: {
    position: 'absolute',
    bottom: vh(15),
    left: vw(5),
    borderWidth: 1,
    borderColor: '#547958',
    backgroundColor: '#ECF3A3',
    padding: 10,
    borderRadius: vw(50),
    zIndex: 2,
  },
  bottomButtonTxt: {
    color: '#000000',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  modalImage: {
    resizeMode: 'contain',
  },
});
