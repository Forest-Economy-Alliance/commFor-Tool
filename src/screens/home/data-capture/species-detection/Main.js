import React, {useEffect, useRef, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Image,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import {useLocation, useNavigate} from 'react-router-native';
import CustomButton from '../../../../components/CustomButton';

function Main() {
  const [photoUri, setPhotoUri] = useState(null);
  const {height, width} = Dimensions.get('window');
  const cameraRef = useRef(null);
  const location = useLocation();
  const [capturedPhotoData, setCapturedPhotoData] = useState(null);
  const navigate = useNavigate();
  const checkAndroidPermissionCameraRoll = async () => {
    if (Platform.OS === 'android' && Platform.Version < 33) {
      const granted = await PermissionsAndroid.requestMultiple([
        'android.permission.WRITE_EXTERNAL_STORAGE',
        'android.permission.READ_EXTERNAL_STORAGE',
        'android.permission.CAMERA',
      ]);
      if (
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
        granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted' ||
        granted['android.permission.CAMERA'] !== 'granted'
      ) {
        throw new Error('Required permission not granted');
      }
    }
  };

  useEffect(() => {
    checkAndroidPermissionCameraRoll();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setPhotoUri(data.uri);
      setCapturedPhotoData(data);
      // savePhoto(data.uri); // Add your save photo logic here if needed
    }
  };

  const handleBack = () => {
    // Your custom function
    console.log('Back button pressed, running custom function');
    // Navigate back to the previous screen
    navigate(-1);
  };

  const formValues = location?.state;
  console.log("form values==========",formValues)
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
  const handleSubmit = () => {
    console.log('Saving image....');
    navigate('/species-info',{state: { photoUri: capturedPhotoData,formValues:formValues},replace:true});
  };
  return (
    <View style={styles.container}>
      {!photoUri ? (
        <RNCamera
          style={styles.camera}
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({status}) => {
            if (status !== 'READY') return <Text>Loading...</Text>;
            return (
              <View style={styles.control}>
                <TouchableOpacity onPress={takePicture} style={styles.capture}>
                  <Text style={styles.captureText}>Take Picture</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      ) : (
        <View>
          <Image
            source={{uri: photoUri}}
            style={{height: height, width: width}}></Image>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 15,
                paddingRight: 15,
              }}>
              <TouchableOpacity
                style={styles.captureSubmit}
                onPress={() => handleSubmit()}>
                <Text style={styles.captureText}>Submit Picture</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.captureCancel}
                onPress={() => setPhotoUri(null)}>
                <Text style={styles.captureText}>Click Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      <View style={{height: 60, backgroundColor: '#FCF1DD'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  control: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '100%',
    left: '36%',
    padding: 5,
    marginBottom: 10,
  },
  capture: {
    flex: 0,
    backgroundColor: '#98A931',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  captureSubmit: {
    flex: 0,
    backgroundColor: 'green',
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  captureCancel: {
    flex: 0,
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  captureText: {
    fontSize: 14,
  },
});

export default Main;
