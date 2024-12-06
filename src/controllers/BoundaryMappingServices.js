import {BSON} from 'realm';
import moment from 'moment';
import React, {useCallback, useEffect} from 'react';
import {useRealm} from '@realm/react';
import {resetTrip} from '../store/actions/TripAction';

export const addBoundary = (
  realm,
  userId,
  startingLocation,
  cordsArray,
  endingLocation,
  boundaryType,
  dispatch,
  totalDistance,
  fieldSite,
) => {
  console.log(
    realm,
    userId,
    startingLocation,
    cordsArray,
    endingLocation,
    boundaryType,
    totalDistance,
    fieldSite,
  );
  realm.write(() => {
    realm.create(`BoundaryMappings`, {
      _id: new BSON.ObjectId(),
      userId: JSON.stringify(userId),
      startingLocation: startingLocation,
      cordsArray: cordsArray,
      endingLocation: endingLocation,
      totalDistance: totalDistance,
      type: boundaryType,
      date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a').toString(),
      fieldSite: fieldSite,
    });
    console.log('Trip Saved Successfully!');
  });
};

export const addDevBoundary = (
  realm,
  userId,
  startingLocation,
  cordsArray,
  endingLocation,
  boundaryType,
  dispatch,
  totalDistance,
  fieldSite,
  isCompleted,
) => {
  console.log(
    realm,
    userId,
    startingLocation,
    cordsArray,
    endingLocation,
    boundaryType,
    totalDistance,
    fieldSite,
    isCompleted,
  );
  realm.write(() => {
    realm.create(`BoundaryMappingUpdated`, {
      _id: new BSON.ObjectId(),
      userId: JSON.stringify(userId),
      startingLocation: startingLocation,
      cordsArray: cordsArray,
      endingLocation: endingLocation,
      totalDistance: totalDistance,
      type: boundaryType,
      date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a').toString(),
      fieldSite: fieldSite,
      isCompleted: isCompleted,

    });
    console.log('Trip Saved Successfully!');
  });
};
