# WKNDHRS Globe Package #

## Overview ##
This project is a package that can be added to any react web/mobile application. The package renders a 3D globe with animation arcs representing the sending to/from lat/lng data points. Data points are managed per client install.

## Install ##
1. Add package to working project
```
yarn add @bebeau/globe
```
2. Import into project
```
import GlobeRender from '@bebeau/globe';
```
3. Use component
```
<GlobeRender
  cleintID=""
  theme=""
  messages=""
  currentUser=""
  currentLocation=""
  exit=""
>
```
4. The globe package is using flexbox to fit the height of the parent element. Be sure to set the height of the parent element the globe package is used within.

## Props ##

Prop | Type | Description
|---|---|---|
clientID | string | The clientID is the ID used to pull data points from admin.
theme | string | Defines theme styling, either `child` or `adult`.
messages | object[] | Messages are passed in as an array of JSON objects. See below for data structure.
currentUser | string | Current user's name.
currentLocation | object | Current user's location. See below for data structure
exit | function | Exit is the function fired upon exiting the globe view to handle navigation back to the previous app screen.

### Messages Object ###
```
{
 location: {
    state: string,
    countryCode: string
  },
  "message": string,
  "sender": string
}
```

### Current Location Object ###
```
{
  id: string,
  title: string,
  coordinates: {
    lng: number,
    lat: number,
  },
}
```
