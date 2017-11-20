import React from 'react';
import { MapView } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        toolbarEnabled
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 40.650002,
          longitude: -73.949997,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}
