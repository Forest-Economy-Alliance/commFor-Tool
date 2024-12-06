import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  Alert,
  ToastAndroid,
  PermissionsAndroid,
  BackHandler,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useSelector, useDispatch} from 'react-redux';
import {json, useNavigate} from 'react-router-native';
import MapView, {
  Circle,
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
  UrlTile,
} from 'react-native-maps';
import {useRealm, useQuery} from '@realm/react';
import {
  endTheTrip,
  resetTrip,
  startTNewrip,
  updateTrip,
} from '../../../../store/actions/TripAction';
import {addBoundary} from '../../../../controllers/BoundaryMappingServices';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Location Permission',
        message:
          'Cool Photo App needs access to your location ' +
          'so you can tag your photos with your location.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

function MarkBoundary() {
  const user = useSelector(state => state.userInfo);
  const realm = useRealm();
  const dispatch = useDispatch();
  const trip = useSelector(state => state.tripInfo);
  const [isTripJustStarted, setTripJustStarted] = useState(false);
  const [bit, setBit] = useState(false);
  const [endLocation, setEndLocation] = useState([]);
  const [boundaryArray, setBoundaryArray] = useState([]);
  const [userStartLocation, setuserStartLocation] = useState([]);
  const [userLocationFromMaps, setUserLocationFromMaps] = useState([]);
  const [pauseLocation, setPauseLocation] = useState([]);
  const [isTripPaused, setTripPaused] = useState(false);
  const [distance, setDistance] = useState(0);
  const [isExitTripTrue, setExitTripTrue] = useState(false);
  const [isExitButtonVisible, setExitButtonVisible] = useState(false);
  const [isStartingCircleTrue, setStartingCircleTrue] = useState(false);
  const [isTripUpdating, setTripUpdating] = useState(false);
  const startingLocation = useRef(null);
  const cordsArray = useRef(null);
  const endingLocation = useRef(null);
  const navigate = useNavigate();
  // console.log('starting location of user', userStartLocation);
  useEffect(() => {
    if (!user?.user) {
      navigate('/Login');
    }
  }, [user]);
  useEffect(() => {
    requestLocationPermission();
  }, []);
  
  const handleBack = () => {
    // Your custom function
    console.log('Back button pressed, running custom function');
    // Navigate back to the previous screen
    navigate(-1);
  };

  useEffect(() => {
    const backAction = () => {
      handleBack();
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  console.log('user --', user?.fieldSite);
  useEffect(() => {
    realm.subscriptions
      .update(mutableSubs => {
        mutableSubs.add(realm.objects('BoundaryMappings'));
      })
      .catch(err => {
        console.error('Failed to update subscriptions:', err);
      });
  }, [realm]);
  useEffect(() => {
    let timer;
    if (isTripUpdating) {
      timer = setInterval(() => {
        updateBoundary();
      }, 2000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isTripUpdating, bit]);

  const cancelTripInBetween = () => {
    Alert.alert('Hold on!', 'Are you sure you want to exit?', [
      {text: 'YES', onPress: () => middleExitTrip()},
      {text: 'CANCEL', onPress: () => console.log('dismissed!!')},
    ]);
  };

  const middleExitTrip = () => {
    setTripUpdating(false);
    setTripJustStarted(false);
    dispatch(resetTrip());
    setEndLocation([]);
    setStartingCircleTrue(false);
    setBoundaryArray([]);
    setuserStartLocation([]);
    setExitTripTrue(false);
    setTripPaused(false);
  };

  const startTrip = () => {
    cordsArray.current = null;
    startingLocation.current = null;
    endingLocation.current = null;
    setEndLocation([]);
    setBoundaryArray([]);
    setuserStartLocation([]);
    setTripJustStarted(true);
    let loc = [];
    loc.push({
      latitude: userLocationFromMaps.latitude,
      longitude: userLocationFromMaps.longitude,
    });
    setuserStartLocation(loc);
    dispatch(startTNewrip(loc));
    let tempArray = [...trip.cordsArray];
    tempArray.push({
      latitude: userLocationFromMaps.latitude,
      longitude: userLocationFromMaps.longitude,
    });
    setBoundaryArray(tempArray);
    setTripUpdating(true);
  };
  const updateBoundary = () => {
    let tempArray = [...trip.cordsArray];
    let n = tempArray.length;
    let dist;
    const distanceFromStartingLocation = calculateDistance(
      userStartLocation[0].latitude,
      userStartLocation[0].longitude,
      userLocationFromMaps.latitude,
      userLocationFromMaps.longitude,
    );
    console.log(
      'distance========================================',
      Number(distanceFromStartingLocation * 1000).toFixed(0),
    );
    if (
      isStartingCircleTrue &&
      Number(distanceFromStartingLocation * 1000).toFixed(0) < 50
    ) {
      setExitButtonVisible(true);
      console.log('exit button is now visible.............');
    }
    if (
      isStartingCircleTrue &&
      Number(distanceFromStartingLocation * 1000).toFixed(0) >= 50
    ) {
      setExitButtonVisible(false);
      console.log('exit button is now visible.............');
    }

    if (n == 0) {
      dist = calculateDistance(
        userStartLocation[0].latitude,
        userStartLocation[0].longitude,
        userLocationFromMaps.latitude,
        userLocationFromMaps.longitude,
      );
    }
    if (n > 0) {
      dist = calculateDistance(
        tempArray[n - 1].latitude,
        tempArray[n - 1].longitude,
        userLocationFromMaps.latitude,
        userLocationFromMaps.longitude,
      );
    }
    if (isNaN(dist)) {
      setDistance(0);
    } else {
      if (Number((dist + distance) * 1000).toFixed(0) > 20) {
        setStartingCircleTrue(true);
      }
      setDistance(dist + distance);
    }
    tempArray.push({
      latitude: userLocationFromMaps.latitude,
      longitude: userLocationFromMaps.longitude,
    });
    setBoundaryArray(tempArray);
    dispatch(updateTrip(tempArray));
    let loc = [];
    loc.push(userLocationFromMaps.latitude);
    loc.push(userLocationFromMaps.longitude);
    setEndLocation(loc);
    setBit(e => !e);
  };
  const endTrip = async () => {
    setTripUpdating(false);
    let tempArray = [...trip.cordsArray];
    // console.log('user location in end', userStartLocation);
    tempArray.push({
      latitude: userStartLocation[0].latitude,
      longitude: userStartLocation[0].longitude,
    });
    dispatch(updateTrip(tempArray));
    setBoundaryArray(tempArray);
    dispatch(endTheTrip({latitude: endLocation[0], longitude: endLocation[1]}));
    setExitTripTrue(true);
  };

  const saveTrip = () => {
    cordsArray.current = [...trip.cordsArray];
    startingLocation.current = trip?.startingLocation;
    endingLocation.current = trip?.endingLocation;
    handleAddBoundary();
    setTripJustStarted(false);
    dispatch(resetTrip());
    setEndLocation([]);
    setStartingCircleTrue(false);
    setBoundaryArray([]);
    setuserStartLocation([]);
    setExitTripTrue(false);
    setDistance(0);
  };

  const handleAddBoundary = useCallback(() => {
    addBoundary(
      realm,
      user?.user?.id,
      JSON.stringify(startingLocation.current),
      JSON.stringify(cordsArray.current),
      JSON.stringify(endingLocation.current),
      'Forest',
      dispatch,
      Number(distance * 1000).toFixed(0),
      user?.fieldSite,
    );
  }, [
    realm,
    user?.user?.id,
    JSON.stringify(cordsArray.current),
    JSON.stringify(startingLocation.current),
    JSON.stringify(endingLocation.current),
    'Forest',
    dispatch,
    Number(distance * 1000).toFixed(0),
    user?.fieldSite,
  ]);

  const cancelTrip = () => {
    dispatch(resetTrip());
    setEndLocation([]);
    setBoundaryArray([]);
    setuserStartLocation([]);
    setExitTripTrue(false);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const dist = R * c; // Distance in kilometers
    return dist;
  };

  const pauseBoundaryMapping = () => {
    let loc = [];
    loc.push({
      latitude: userLocationFromMaps.latitude,
      longitude: userLocationFromMaps.longitude,
    });
    setPauseLocation(loc);
    setTripPaused(true);
    setTripUpdating(false);
  };

  const resumeBoundaryMapping = () => {
    setTripPaused(false);
    setTripUpdating(true);
  };

  return (
    <>
      <MapView
        onUserLocationChange={locationChangedResult =>
          setUserLocationFromMaps(locationChangedResult.nativeEvent.coordinate)
        }
        provider={PROVIDER_GOOGLE}
        style={{
          flex: 1,
          margin: 10,
        }}
        maxZoomLevel={20}
        initialRegion={{
          latitude: 17.4347,
          longitude: 78.3459,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        followsUserLocation>
        {boundaryArray.length > 1 ? (
          <Polyline
            coordinates={boundaryArray}
            strokeColor={'#98AA23'}
            lineJoin={'round'}
            strokeWidth={2}
            // lineDashPattern={[1]}
          />
        ) : null}
        {isTripJustStarted && (
          <Marker
            coordinate={{
              latitude: userStartLocation[0]?.latitude,
              longitude: userStartLocation[0]?.longitude,
            }}
            title={'Starting Point'}
            pinColor="red"
          />
        )}
        {isStartingCircleTrue && (
          <Circle
            strokeColor={'red'}
            radius={5}
            center={{
              latitude: userStartLocation[0]?.latitude,
              longitude: userStartLocation[0]?.longitude,
            }}
          />
        )}
        {isTripPaused && (
          <Marker
            coordinate={{
              latitude: pauseLocation[0]?.latitude,
              longitude: pauseLocation[0]?.longitude,
            }}
            pinColor="green"
            title={'Pause Point'}
          />
        )}
      </MapView>
      {isTripPaused && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <TouchableOpacity
            style={{backgroundColor: 'green', padding: 10}}
            onPress={resumeBoundaryMapping}>
            <Text>{'Resume Boundary Mapping'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'red', padding: 10}}
            onPress={cancelTripInBetween}>
            <Text>{'Exit Boundary Mapping'}</Text>
          </TouchableOpacity>
        </View>
      )}
      {isTripJustStarted && !isTripPaused && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <TouchableOpacity
            style={{backgroundColor: 'green', padding: 10}}
            onPress={pauseBoundaryMapping}>
            <Text>{'Pause Boundary Mapping'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'red', padding: 10}}
            onPress={cancelTripInBetween}>
            <Text>{'Exit Boundary Mapping'}</Text>
          </TouchableOpacity>
        </View>
      )}
      {!isTripJustStarted && (
        <TouchableOpacity
          style={{backgroundColor: 'green', padding: 10}}
          onPress={startTrip}>
          <Text>{'Start Trip'}</Text>
        </TouchableOpacity>
      )}
      {isExitButtonVisible && (
        <TouchableOpacity
          style={{backgroundColor: 'green', padding: 10}}
          onPress={endTrip}>
          <Text>{'End Trip'}</Text>
        </TouchableOpacity>
      )}
      {isExitTripTrue && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <TouchableOpacity
            style={{backgroundColor: 'green', padding: 10}}
            onPress={saveTrip}>
            <Text>{'Save Trip'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'green', padding: 10}}
            onPress={cancelTrip}>
            <Text>{'Cancel Trip'}</Text>
          </TouchableOpacity>
        </View>
      )}
      {isTripJustStarted && (
        <View
          style={{
            position: 'absolute',
            top: '0%',
            left: '1%',
            backgroundColor: 'grey',
            padding: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Distance : {`${Number(distance * 1000).toFixed(0)} m`}
          </Text>
        </View>
      )}
    </>
  );
}

export default MarkBoundary;
