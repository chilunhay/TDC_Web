import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composerWithDevTools } from 'redux-dev-tools-extensions';
