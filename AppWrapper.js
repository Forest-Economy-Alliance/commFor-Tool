import React from 'react';
import {AppProvider, UserProvider} from '@realm/react';
import RealmWrapper from './RealmWrapper';
function AppWrapper() {
  console.log('test AppWrapper');
  return (
    <AppProvider id="YOUR_APP_KEY">
      <UserProvider fallback={RealmWrapper}>
        <RealmWrapper />
      </UserProvider>
    </AppProvider>
  );
}

export default AppWrapper;
