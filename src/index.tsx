import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GlobeRender
    clientId="63bda1c87a9e114ce60a713e"
    theme="child"
    messages={messages}
    currentUser="Corey"
    currentLocation={userLocation}
    exit={() => {}}
  />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
