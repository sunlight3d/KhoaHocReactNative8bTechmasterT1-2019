
//global constant store object
import React,{Component} from 'react';
import {createStore} from 'redux'
import {allReducers} from './reducers'

export const store = createStore(allReducers)
// alert(JSON.stringify(store.getState()))