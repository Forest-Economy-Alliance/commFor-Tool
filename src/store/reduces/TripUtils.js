import {combineReducers} from 'redux';
const intialState = {
  tripId: '-1',
  startingLocation: {
    lat: null,
    long: null,
  },
  cordsArray: [],
  endingLocation: {
    lat: null,
    long: null,
  },
  status: null,
};

const TripUtils = (state = intialState, action) => {
  switch (action.type) {
    case 'START_TRIP':
      console.log(
        'TALK IS CHEAP SHOW ME THE START TRIP PAYLOAD',
        action.payload,
      );
      return {
        ...state,
        startingLocation: {
          lat: action.payload[0].latitude,
          long: action.payload[0].longitude,
        },
        status: 'Trip Started',
      };

    case 'UPDATE_TRIP':
      return {
        ...state,
        cordsArray: action.payload,
        status: 'Trip is Ongoing',
      };
    case 'END_TRIP':
      console.log('TALK IS CHEAP SHOW ME THE END TRIP PAYLOAD', action.payload);
      return {
        ...state,
        endingLocation: {
          lat: action.payload.latitude,
          long: action.payload.longitude,
        },
        status: 'Trip Ended',
      };
    case 'RESET_TRIP':
      console.log('Resetting Trip');
      return {
        ...state,
        tripId: '-1',
        startingLocation: {
          lat: null,
          long: null,
        },
        cordsArray: [],
        endingLocation: {
          lat: null,
          long: null,
        },
        status: null,
      };
    default:
      return state;
  }
};

export default TripUtils;
