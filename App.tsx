import React from 'react'
import {Provider} from 'react-redux';
import {store} from './src/store/index';
import AppWrapper from './AppWrapper';

function App() {
  return (
    <>
    <Provider store={store}>
    <AppWrapper/>
    </Provider>
    </>
  )
}

export default App