/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import AppWrapper from './App';
import {name as appName} from './app.json';
import SplashScreen from './src/components/splashScreen';
import Signup from './src/components/signup';

AppRegistry.registerComponent(appName, () => Signup);
