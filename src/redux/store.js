import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit'; // This means Redux Toolkit is used

const store = configureStore({
    reducer,
});

export default store;