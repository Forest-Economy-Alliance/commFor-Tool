import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Login from './auth/Login';
import Home from './home/Home';
import Register from './auth/Register';
import BoundaryMapping from './home/data-capture/boundary-mapping/Main';
import { useRealm } from '@realm/react';
import Realm from 'realm';
import Site from './field-site/Site';
import DataCapture from '../screens/home/data-capture/Main'
import SplashScreen from './splash screen/SplashScreen';
import SpeciesScreen from './home/data-capture/species-detection/Form';
import CameraScreen from './home/data-capture/species-detection/Main';
import ProfileSummary from '../screens/profile/Main';
import DataCollectionForm from './home/data-collection/Main';
import Language from './splash screen/Language';
import DevMarkBoundary from './home/data-capture/boundary-mapping/Dev';

function Main() {
  return (
    <NativeRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<SplashScreen/>}/>
        <Route path="/site" element={<Site/>}/>
        <Route path="/boundary-mapping" element={<BoundaryMapping />} />
        <Route path = "/data-capture" element={<DataCapture/>}/>
        <Route path='/species-info' element={<SpeciesScreen/>}/>
        <Route path='/camera-roll' element={<CameraScreen/>}/>
        <Route path='/profile-summary' element={<ProfileSummary/>}/>
        <Route path='/data-collection' element={<DataCollectionForm/>}/>
        <Route path='/change-language' element={<Language/>}/>
        <Route path = '/dev-boundary-mapping' element ={<DevMarkBoundary/>}/>
      </Routes>
    </NativeRouter>
  );
}

export default Main;
