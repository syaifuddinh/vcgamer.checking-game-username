"use client";

// redux/store.js
import { createStore } from 'redux';
import counterReducer from '@/store/reducer';

const store = createStore(counterReducer);

export default store;