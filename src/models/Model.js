import React from 'react';
import {Realm} from '@realm/react';

export class Profile extends Realm.Object {
  static schema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      username: 'string',
      date: 'string',
      password: 'string',
      phoneNumber: 'string',
    },
    primaryKey: '_id',
  };
}

export class BoundaryMappings extends Realm.Object {
  static schema = {
    name: 'BoundaryMappings',
    properties: {
      _id: 'objectId',
      userId: 'string',
      startingLocation: 'string',
      cordsArray: 'string',
      endingLocation: 'string',
      totalDistance: 'string',
      type: 'string?',
      date: 'string',
      fieldSite: 'string',
    },
    primaryKey: '_id',
  };
}

export class FieldSites extends Realm.Object {
  static schema = {
    name: 'FieldSites',
    properties: {
      _id: 'objectId',
      userId: 'string',
      siteName: 'string',
      date: 'string',
    },
    primaryKey: '_id',
  };
}

export class SpeciesInfo extends Realm.Object {
  static schema = {
    name: 'SpeciesInfo',
    properties: {
      _id: 'objectId',
      userId: 'string',
      speciesName: 'string',
      type: 'string',
      armLength: 'string',
      imageData: 'string',
      date: 'string',
      siteName: 'string',
    },
    primaryKey: '_id',
  };
}

export class SpeciesInfos extends Realm.Object {
  static schema = {
    name: 'SpeciesInfos',
    properties: {
      _id: 'objectId',
      userId: 'string',
      speciesName: 'string',
      type: 'string',
      armLength: 'string',
      imageData: 'string',
      date: 'string',
      siteName: 'string',
      location: 'string',
      focalLength: 'string',
    },
    primaryKey: '_id',
  };
}

export class forestDataCollections extends Realm.Object {
  static schema = {
    name: 'forestDataCollections',
    properties: {
      _id: 'objectId',
      userId: 'string',
      siteName: 'string',
      location: 'string',
      legalOwner: 'string',
      question1: 'string',
      question2: 'string',
      question3: 'string',
      question4: 'string',
      question5: 'string',
      question6: 'string',
      question7: 'string',
      question8: 'string',
      question9: 'string',
      question10: 'string',
      question11: 'string',
      question12: 'string',
      question13: 'string',
      question14: 'string',
      question15: 'string',
      question16: 'string',
    },
    primaryKey: '_id',
  };
}

export class communityDataCollections extends Realm.Object {
  static schema = {
    name: 'communityDataCollections',
    properties: {
      _id: 'objectId',
      userId: 'string',
      siteName: 'string',
      location: 'string',
      question1: 'string',
      question2: 'string',
      question3: 'string',
      question4: 'string',
      question5: 'string',
      question6: 'string',
      question7: 'string',
      question8: 'string',
      question9: 'string',
      question10: 'string',
      question11: 'string',
      question12: 'string',
      question13: 'string',
      question14: 'string',
      question15: 'string',
      question16: 'string',
      question17: 'string',
      question18: 'string',
      question19: 'string',
      question20: 'string',
      question21: 'string',
      question22: 'string',
      question23: 'string',
      question24: 'string',
      question25: 'string',
      question26: 'string',
      question27: 'string',
    },
    primaryKey: '_id',
  };
}

export class SpeciesInfos1 extends Realm.Object {
  static schema = {
    name: 'SpeciesInfos1',
    properties: {
      _id: 'objectId',
      userId: 'string',
      speciesName: 'string',
      type: 'string',
      armLength: 'string',
      imageData: 'string',
      date: 'string',
      siteName: 'string',
      location: 'string',
      focalLength: 'string',
    },
    primaryKey: '_id',
  };
}

export class BoundaryMappingUpdated extends Realm.Object {
  static schema = {
    name: 'BoundaryMappingUpdated',
    properties: {
      _id: 'objectId',
      userId: 'string',
      startingLocation: 'string',
      cordsArray: 'string',
      endingLocation: 'string',
      totalDistance: 'string',
      type: 'string?',
      date: 'string',
      fieldSite: 'string',
      isCompleted:'string',
      
    },
    primaryKey: '_id',
  };
}
