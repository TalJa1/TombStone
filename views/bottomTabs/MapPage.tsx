/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import Mapbox from '@rnmapbox/maps';
import {vh, vw} from '../../services/styleSheet';

Mapbox.setAccessToken(
  'pk.eyJ1IjoidGFsamExIiwiYSI6ImNtMm82enp6ODBlNHAyanNndnNmMHowYWYifQ.-6cYPNPzMoKrlIp428Yxdw',
);

const MapPage = () => {
  useStatusBar('#91A895');
  const mapRef = useRef<Mapbox.MapView>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.page}>
          <View style={styles.containerMap}>
            <Mapbox.MapView ref={mapRef} style={styles.map}>
              <Mapbox.Camera
                centerCoordinate={[105.8342, 21.0278]} // Hanoi, Vietnam
                zoomLevel={5.5}
                animationDuration={2000}
              />
            </Mapbox.MapView>
          </View>
        </View>
      </View>
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
});
