## Overview

With this simple hack-a-thing project, I intend to refresh my knowledge on React (I had some prior experience from taking COSC 52) and familiarize myself with developing and testing mobile apps with React Native.

The project builds into a minimalistic mobile "app" consisting of a text input box and a button - when the user inputs a ticker symbol and presses the "show quotes" button, the corresponding Yahoo Finance quotes page opens up in the default browser. The input is expected to be sane (i.e. a ticker symbol valid to Yahoo Finance).

## How to set up the dependencies

First, install [Node.js](https://nodejs.org/en/download/), along with `npm` and `choco` (let `Node.js` installer take care of them both).

Then, install `yarn` and `expo`:

```
choco install yarn
npm install -g expo-cli
```

Some Windows machines (like mine) may need to do the following to allow `expo` to run:

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

## App architecture

I used the React state-based approach to take and update input value; I used React Native tags to display the input and the button, and the "Linking" library from the Expo wrapper for React Native to open up the device's default browser.

## How to see the app in action

Find the deployed app [here](http://react-native-hack-a-thing.surge.sh/). If you want to build the app yourself, keep reading.

In the root directory of this project, do:

```
yarn start
```

This starts up an `expo` shell in the terminal, inside which you can press `w` to build a web version of the app and have it open up in your default browser.

If you want to see it in action on your mobile device, make sure that it has Expo's mobile app installed and that the mobile device is connected to the same Wi-Fi as the device on which you are building this project.

The `expo` shell should have presented you with a QR code, which you can scan with the Expo mobile app to build a mobile version of the app and have it open up on your mobile device.

You can press `Ctrl+C` to quit the `expo` shell.
