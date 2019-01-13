# VK Mobile App  
  
Written with React Native and uses real VK API for fetching stories and newsfeed.  

### Preview
Android App | iOS App
:-------------------------:|:-------------------------:
<img src="./android-preview.gif" width="300" /> | <img src="./ios-preview.gif" width="300" />

### Getting Started
These instructions will get you a copy of the project up and running on your local machine.
1. To setup environment please follow this link:
```
https://facebook.github.io/react-native/docs/getting-started
```
2. Clone the project
```
git clone https://github.com/androsovatati/vk-mobile.git
```
3.  Install packages using npm or yarn
```
npm i
yarn install
```
4. Create a new file .env in the root of this React Native app and define 2 constants: `CLIENT_ID` and `CLIENT_SECRET` with your own values:
```
CLIENT_ID=1234567
CLIENT_SECRET=aBCdEfgHIGkL
```
5. Finally, connect your device or run simulator and run one of these commands for Android or iOS accordingly:
```
react-native run-android
react-native run-ios
```
