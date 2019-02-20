/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App'
import ReduxApp from './ReduxExamples/ReduxApp';
import {name as appName} from './app.json';
import {store} from './ReduxExamples/store';
import {Provider} from 'react-redux'

import {ReduxAppContainer} from './ReduxExamples/ReduxApp';
const provider = () => <Provider store={store} >
    <ReduxAppContainer />
</Provider>
AppRegistry.registerComponent(appName, () => provider);//bai12
// AppRegistry.registerComponent(appName, () => App);//Bai 11
