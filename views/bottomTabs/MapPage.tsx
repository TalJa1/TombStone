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

import {FeatureCollection, Geometry, GeoJsonProperties} from 'geojson';

const geoJsonData: FeatureCollection<Geometry, GeoJsonProperties> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Hà Nội',
        density: 2390,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [105.7974, 21.0285],
            [105.7974, 20.9275],
            [105.9157, 20.9275],
            [105.9157, 21.0285],
            [105.7974, 21.0285],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hồ Chí Minh',
        density: 4200,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [106.6297, 10.8231],
            [106.6297, 10.7231],
            [106.7497, 10.7231],
            [106.7497, 10.8231],
            [106.6297, 10.8231],
          ],
        ],
      },
    },
    // Add more provinces here
  ],
};

const MapPage = () => {
  useStatusBar('#91A895');
  const mapRef = useRef<Mapbox.MapView>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.page}>
          <View style={styles.containerMap}>
            <Mapbox.MapView
              styleURL="mapbox://styles/mapbox/standard-satellite"
              ref={mapRef}
              style={styles.map}>
              <Mapbox.Camera
                centerCoordinate={[105.8342, 21.0278]} // Hanoi, Vietnam
                zoomLevel={5.5}
                animationDuration={2000}
              />

              {/* GeoJSON Source for provinces */}
              <Mapbox.ShapeSource id="provinces" shape={geoJsonData}>
                <Mapbox.FillLayer
                  id="province-layer"
                  style={{
                    fillColor: [
                      'interpolate',
                      ['linear'],
                      ['get', 'density'],
                      0,
                      'white',
                      1000,
                      '#ffbaba',
                      3000,
                      'red',
                      5000,
                      'black',
                    ],
                    fillOpacity: 0.7,
                  }}
                />
              </Mapbox.ShapeSource>
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
