## Overview

With this simple hack-a-thing project, I intend to refresh my knowledge on React (I had some prior experience from taking COSC 52) and familiarize myself with developing and testing mobile apps with React Native.

The project builds into a minimalistic mobile "app" consisting of a text input box and a button - when the user inputs a ticker symbol and presses the "show quotes" button, the corresponding Yahoo Finance quotes page opens up in the default browser. The input is expected to be sane (i.e. a ticker symbol valid to Yahoo Finance).

## How I got the dependencies set up

First, I installed [Node.js](https://nodejs.org/en/download/) and `npm` (the Node.js installer took care of `npm`).

Then, I installed `expo`:

```
npm install -g expo-cli
```

I actually had to do the following in the PowerShell to allow `expo` to run on my Windows 10 machine:

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

Then, I installed Expo on my Android phone so I can view the app I developed on my mobile device.

## How I built the app

I used the React state-based approach to take and update input value; I used React Native tags to display the input and the button, and the "Linking" library from the Expo wrapper for React Native to open up the device's default browser.

## How to see the app in action

Make sure that you have installed Expo on your mobile device and that it is connected to the same Wi-Fi as the device on which you are building this project.

In the root directory of this project, do:

```
yarn start
```

You should be presented with a QR code, which you can scan with the Expo mobile app. Scan it and see the app run!

You can press `Ctrl+C` to quit the `expo` shell started with `yarn start`.
