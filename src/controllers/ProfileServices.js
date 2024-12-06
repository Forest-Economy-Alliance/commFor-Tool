import {BSON} from 'realm';
import moment from 'moment';
import React, {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useRealm} from '@realm/react';
import {setLoggedInUser} from '../store/actions/AuthActions';
import {ToastAndroid} from 'react-native';
export const addProfile = (
  username,
  phoneNumber,
  password,
  realm,
  navigate,
) => {
  console.log(phoneNumber);
  const existingProfile = realm
    .objects('Profile')
    .filtered('phoneNumber == $0', phoneNumber);
  if (existingProfile.length > 0) {
    console.log(
      'Profile with this phone number already exists. Please log in.',
    );
    return 'Profile with this phone number already exists. Please log in.';
  }
  realm.write(() => {
    realm.create('Profile', {
      _id: new BSON.ObjectId(),
      username: username,
      phoneNumber: phoneNumber,
      password: password,
      date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a').toString(),
    });
  });
  navigate('/login');
};

export const loginProfile = async (phoneNumber, password, realm, dispatch) => {
  console.log('creds', phoneNumber, password);
  const existingProfile = await realm
    .objects('Profile')
    .filtered('phoneNumber == $0', phoneNumber);
  if (existingProfile.length > 0) {
    if (existingProfile[0].password == password) {
      ToastAndroid.show('success', ToastAndroid.SHORT);
      console.log(JSON.stringify(existingProfile[0]._id));
      if (existingProfile[0]._id) {
        dispatch({type: 'SET_USER_INFO', payload: existingProfile[0]});
      }
    } else {
      console.log('wrong password');
      ToastAndroid.show('wrong password', ToastAndroid.SHORT);
      return null;
    }
  } else {
    console.log(
      "Profile with this phone number doesn't exists. Please register first.",
    );
    ToastAndroid.show('user does not exist', ToastAndroid.SHORT);
    return null;
  }
};

export const profileSummary = async (realm, userId, siteName) => {
  try {
    console.log('User ID:', userId);

    // Fetch all species information to check data presence
    const allSpeciesInfos = await realm.objects('SpeciesInfos');
    console.log('All SpeciesInfos:', allSpeciesInfos);

    // Check if there is any data
    if (allSpeciesInfos.length === 0) {
      console.log('No data found in SpeciesInfos.');
      return [];
    }

    // Convert userId to a string if it is not already
    const userIdStr = userId.toString();

    // Fetch the species information using the userId
    const existingSites = await realm.objects('SpeciesInfos').filtered('userId == $0', userIdStr);
    
    console.log('Existing Sites:', existingSites);

    // Optionally, convert existingSites to array to make debugging easier
    const sitesArray = existingSites.length > 0 ? existingSites.map(site => site.toJSON()) : [];
    console.log('Sites Array:', sitesArray);

    return sitesArray;
  } catch (error) {
    console.error('Error getting sites:', error);
    return [];
  }
};



