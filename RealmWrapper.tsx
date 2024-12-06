import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView,ToastAndroid} from 'react-native';
import {useApp, createRealmContext, UserProvider} from '@realm/react';
import {OpenRealmBehaviorType} from 'realm';
import {Realm} from '@realm/react';
import {RealmProvider,useRealm,useUser} from '@realm/react';
import {Profile, BoundaryMappings, FieldSites, SpeciesInfos1,forestDataCollections,communityDataCollections, BoundaryMappingUpdated } from './src/models/Model';
import { useSelector, useDispatch } from 'react-redux';

import Main from './src/screens/Main';

function RealmWrapper() {
  const app = useApp();
  const appInfo = useSelector(state=>state.appInfo);
  console.log("sync flow",appInfo)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  console.log('test RealmWrapper');
  useEffect(() => {
    const login = async () => {
      const credentials = Realm.Credentials.anonymous();
      await app.logIn(credentials);
      setIsLoggedIn(true);
    };
    login();
  }, [app]);

  if (!isLoggedIn) {
    return <ActivityIndicator size="large" />;
  }
  console.log('is logged in', isLoggedIn);
  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoggedIn ? (
        <RealmProvider
        schema={[BoundaryMappings,FieldSites,SpeciesInfos1,forestDataCollections,communityDataCollections,BoundaryMappingUpdated]}
          sync={{
            flexible: true,
            newRealmFileBehavior: {
              type: OpenRealmBehaviorType.DownloadBeforeOpen,
            },
            existingRealmFileBehavior: {
              type: OpenRealmBehaviorType.OpenImmediately,
            },
          }}>
           <Main/>
        </RealmProvider>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </SafeAreaView>
  );
}

function SyncListener() {
  const realm = useRealm();
  const user = useUser();
  const appInfo = useSelector(state=>state.appInfo);
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(
    realm.syncSession?.isConnected(),
  );
  const [uploadProgressPercent, setUploadProgressPercent] = useState(0);
  useEffect(() => {
    const connectionNotificationCallback = (newState, oldState) => {
      console.log('Current connection state: ' + newState);
      console.log('Previous connection state: ' + oldState);
      setIsConnected(realm.syncSession?.isConnected());
      console.log("ss",realm.syncSession?.isConnected())
      dispatch({type:'SET_SYNC_CONNECTION',payload:realm.syncSession?.isConnected()})
    };
    realm.syncSession?.addConnectionNotification(
      connectionNotificationCallback,
    );
    return () =>
      realm.syncSession?.removeConnectionNotification(
        connectionNotificationCallback,
      );
  }, []);

  useEffect(() => {
    const progressNotificationCallback = (transferred, transferable) => {
      // Convert decimal to percent with no decimals
      // (e.g. 0.6666... -> 67)
      const percentTransferred =
        parseFloat((transferred / transferable).toFixed(2)) * 100;
      setUploadProgressPercent(percentTransferred);
  
      dispatch({type:'SET_SYNC_PERCENTAGE',payload:percentTransferred})
    };
    // Listen for changes to connection state
    realm.syncSession?.addProgressNotification(
      Realm.ProgressDirection.Upload,
      Realm.ProgressMode.ReportIndefinitely,
      progressNotificationCallback,
    );
    // Remove the connection listener when component unmounts
    return () =>
      realm.syncSession?.removeProgressNotification(
        progressNotificationCallback,
      );
    // Run useEffect only when component mounts
  }, []);
  const [isPaused, setIsPaused] = useState(false);

  async function toggleSyncSession() {
    if (isPaused) {
      await realm.syncSession?.resume();
    } else {
      await realm.syncSession?.pause();
    }
    setIsPaused(!isPaused);
  }
  

  useEffect(() => {
    if (!user || !realm) return;
  
    const session = realm.syncSession;
    console.log("session",realm.syncSession.isConnected())
    if (session) {
      const uploadListener = session.addProgressNotification('upload', 'reportIndefinitely', (transferred, transferable) => {
        dispatch({type:'SET_UPLOAD_SYNC_START'})
        if (transferred === transferable) {
          console.log("All local changes have been uploaded.");
          dispatch({type:'SET_UPLOAD_SYNC_STOP'})
          ToastAndroid.show('success 1', ToastAndroid.SHORT);
        }
      });

      const downloadListener = session.addProgressNotification('download', 'reportIndefinitely', (transferred, transferable) => {
        dispatch({type:'SET_DOWNLOAD_SYNC_START'})
        if (transferred === transferable) {
          dispatch({type:'SET_DOWNLOAD_SYNC_STOP'})
          console.log("All changes from the server have been downloaded.");
          ToastAndroid.show('success 2', ToastAndroid.SHORT);
        }
      });

      return () => {
        session.removeProgressNotification(uploadListener);
        session.removeProgressNotification(downloadListener);
      };
    }
  }, [user, realm]);

  return null;
}
export default RealmWrapper;
