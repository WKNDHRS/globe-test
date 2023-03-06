import React from 'react';
import './App.css';
import GlobeRender from '@bebeau/globe';

const userLocation = {
  title: 'Detroit',
  coordinates: {
    lng: -70.641997,
    lat: -33.46912,
  },
};

const messages = [
  {
    "location": {
      "state": "North Carolina",
      "countryCode": "USA"
    },
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "sender": "Susan"
  },
  {
    "location": {
      "state": "South Carolina",
      "countryCode": "USA"
    },
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "sender": "Walter"
  },
  {
    "location": {
      "state": "Pittsburgh",
      "countryCode": "USA"
    },
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "sender": "Henry"
  }
];

function App() {
  return (
    <GlobeRender
      clientId="63bda1c87a9e114ce60a713e"
      theme="child"
      messages={messages}
      currentUser="Corey"
      currentLocation={userLocation}
      exit={() => {}}
    />
  );
}

export default App;
