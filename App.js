import React from 'react';
import {View, StyleSheet} from 'react-native';
import GlobeRender from '@bebeau/globe';
import messages from './data/messages.json';
import dataPoints from './data/mock.json';

const defaultProps = {
  clientId: '63bda1c87a9e114ce60a713e',
  manualDataPoints: dataPoints,
  messages: messages,
  theme: 'adult',
  type: 'send',
  currentUser: 'Corey',
  currentLocation: {
    id: '0',
    title: 'Detroit',
    coordinates: {
      lng: -83,
      lat: 42,
    },
  },
  exit: () => {},
};

export default function App() {
  return (
    <View style={styles.container}>
      <GlobeRender {...defaultProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// AppRegistry.registerComponent('webglglobe', () => App);

// if (Platform.OS === 'web') {
//   AppRegistry.runApplication('webglglobe', {
//     rootTag: document.getElementById('root'),
//     initialProps: defaultProps,
//   });
// }