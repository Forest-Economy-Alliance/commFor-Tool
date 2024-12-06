import {BSON} from 'realm';
import moment from 'moment';
import axios from 'axios';
import React, {useCallback, useEffect} from 'react';
import {Profile} from '../models/Model';
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

export const handleLogin = async (phoneNumber, password, dispatch) => {
  console.log(phoneNumber, password);
  axios
    .post('https://htj5xy3nrv.us-east-1.awsapprunner.com/api/nCount/user/login-user', {
      phoneNumber:phoneNumber,
      password:password,
    })
    .then(resp => {
      console.log(resp?.data?.user);
      dispatch({type: 'SET_USER_INFO', payload: resp?.data?.user});
      dispatch({type: 'SET_ARM_LENGTH', payload: resp?.data?.user?.armLength})
      ToastAndroid.show('success', ToastAndroid.SHORT);
    })
    .catch(err => {
      console.log('NETWORK ERROR', err);
      ToastAndroid.show('something went wrong', ToastAndroid.SHORT);
    });
};

export const handleRegister = async (
  phoneNumber,
  password,
  username,
  countryName,
  navigate,
) => {
  axios
    .post('https://htj5xy3nrv.us-east-1.awsapprunner.com/api/nCount/user/commfor-user-registeration', {
      phoneNumber:phoneNumber,
      password:password,
      firstName:username,
      countryName:countryName
    })
    .then(resp => {
      console.log(resp?.data?.body);
      // navigate('/login');
        ToastAndroid.show('Registered Successfully', ToastAndroid.SHORT);
        navigate('/login');
    })
    .catch(err => {
      console.log('NETWORK ERROR', err);
      ToastAndroid.show('Already registered', ToastAndroid.SHORT);
    });
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
