import {createStore, applyMiddleware,compose} from 'redux';
import {thunk} from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from './reduces';
import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  };
  const persistedReducer = persistReducer(persistConfig, reducers);

  export const store = createStore(persistedReducer,{},applyMiddleware(thunk));
export const persistor = persistStore(store);