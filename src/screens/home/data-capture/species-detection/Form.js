import React, {useEffect, useState, useRef, useMemo, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TextInput,
  BackHandler,
  PermissionsAndroid,
  Platform,
  Touchable,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {Alert, Modal} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {RNCamera} from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import userImage from '../../../../assets/images/User.png';
import CustomButton from '../../../../components/CustomButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
const {height, width} = Dimensions.get('window');
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import bird1 from '../../../../assets/images/Bird_seven.png';
import CustomDropdown from '../../../../components/CustomDropdown';
import {useLocation, useNavigate} from 'react-router-native';
import {useRealm} from '@realm/react';
import spec1 from '../../../../assets/images/spec1.png';
import spec2 from '../../../../assets/images/spec2.png'
import {addSpeciesData} from '../../../../controllers/SpeciesInfoControllers';

async function requestPermissions() {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          PermissionsAndroid.PERMISSIONS.CAMERA,
        ],
        {
          title: 'Camera and Audio Permissions',
          message:
            'This app needs access to your camera and microphone to capture photos and record audio.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (
        granted['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.CAMERA'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('You can use the camera and microphone');
      } else {
        console.log('Camera or microphone permission denied');
      }
    }
  } catch (err) {
    console.warn(err);
  }
}
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

function Main() {
  const location = useLocation();
  const imageData = location?.state;
  const [speciesName, setSpeciesName] = useState(imageData?.formValues?.speciesName ||null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isInputBoxVisible, setInputBoxVisible] = useState(false);
  const [imageUriPresent, setUriImagePresent] = useState(null);
  const [focalLength, setFocalLength] = useState('');
  const [isCameraOpen, setCameraOpen] = useState(false);
  const [newSpeciesName, setNewSpeciesName] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [capturedPhotoUri, setCapturedPhotoUri] = useState(null);
  const [userLocation, setUserLocation] = useState([]);
  const [capturedPhotoData, setCapturedPhotoData] = useState(null);
  const [isModifyingArmLength, setModifiedArmLengthTrue] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const cameraRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(state => state.userInfo);
  const [armLength, setArmLength] = useState(user?.armLength || imageData?.formValues?.armLength || null);
  console.log('does form values exists....', imageData?.formValues?.speciesName!=null);
  //   console.log(imageData?.photoUri);
  const realm = useRealm();

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  //   console.log("arm length",!user?.armLength)
  useEffect(() => {
    realm.subscriptions
      .update(mutableSubs => {
        mutableSubs.add(realm.objects('SpeciesInfos1'));
      })
      .catch(err => {
        console.error('Failed to update subscriptions:', err);
      });
  }, [realm]);
  useEffect(() => {
    requestPermissions();
  }, []);
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'local Name',
        value: 'local',
      },
      {
        id: '2',
        label: 'scientific name',
        value: 'scientific',
      },
    ],
    [],
  );
  console.log('species name', speciesName);
  const data = [
    {label: 'test-species', value: 'test-species'},
    {label: 'Add New Species', value: 'Add New Species'},
  ];

  const handleBack = () => {
    // Your custom function
    console.log('Back button pressed, running custom function');
    // Navigate back to the previous screen
    navigate(-1);
  };
  console.log(
    'type is=======================',
    selectedId ? radioButtons[selectedId - 1]?.value : 'scientific',
  );
  const takePicture = async () => {
    navigate('/camera-roll', {
      state: {speciesName: speciesName, armLength: armLength, type: type},
      replace: true,
    });
  };

  useEffect(() => {
    // console.log('gettingg location---->>>');
    Geolocation.getCurrentPosition(info => {
      // console.log('user Location--------->', info);
      let loc = [];
      loc.push(info?.coords?.latitude);
      loc.push(info?.coords?.longitude);
      setUserLocation(loc);
    });
  }, []);
  //   console.log('location', userLocation);
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

  const setNewSpecies = species => {
    if (species === 'Add New Species') {
      setSpeciesName(null);
      setInputBoxVisible(true);
    } else {
      setInputBoxVisible(false);
      setSpeciesName(species);
    }
  };

  const addNewSpeciesName = t => {
    setSpeciesName(t);
    setNewSpeciesName(t);
  };
  const userId = user?.user?.id;
  const siteName = user?.fieldSite;
  const type = selectedId ? radioButtons[selectedId - 1]?.value : 'scientific';
  const handleAddSpeciesInfo = useCallback(async () => {
    console.log('adding site....', userId);
    await addSpeciesData(
      realm,
      userId,
      siteName,
      speciesName,
      selectedId ? radioButtons[selectedId - 1]?.value : 'scientific',
      armLength,
      JSON.stringify(imageData?.photoUri?.base64),
      JSON.stringify(userLocation),
      focalLength,
    );
    if (!user?.armLength || isModifyingArmLength) {
      dispatch({type: 'SET_ARM_LENGTH', payload: armLength});
    }
    setInputBoxVisible(false);
    setModifiedArmLengthTrue(false);
    setSpeciesName(null);
    setSelectedId(null);
    navigate('/species-info');
  }, [
    realm,
    userId,
    siteName,
    speciesName,
    selectedId ? radioButtons[selectedId - 1]?.value : 'scientific',
    armLength,
    JSON.stringify(imageData?.photoUri?.base64),
    JSON.stringify(userLocation),
    focalLength,
  ]);

  const modifyArmLength = () => {
    setModifiedArmLengthTrue(true);
  };
  return (
    <KeyboardAwareScrollView>
      {isCameraOpen ? (
        <RNCamera
          ref={cameraRef}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
        />
      ) : (
        <LinearGradient
          colors={['#FFFFFF', '#DDE3FC']}
          style={styles.gradientStyle}>
          <View style={{flex: 1}}>
            <View style={{flex: 0.1}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: width,
                  padding: 10,
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#679429', fontSize: 24, fontFamily: 'bold'}}>
                  CommFor
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Menu
                    visible={visible}
                    style={{backgroundColor: '#98AA23'}}
                    anchor={<Text onPress={showMenu}></Text>}
                    onRequestClose={hideMenu}>
                    <MenuItem
                      onPress={() => navigate('/home')}
                      textStyle={{color: 'white', fontSize: 17}}>
                      Home
                    </MenuItem>
                  </Menu>
                  <TouchableOpacity onPress={() => showMenu()}>
                    <Image source={userImage} style={styles.userImage} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{flex: 0.14}}></View>
            <View style={{flex: 0.7}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: width,
                  justifyContent: 'center',
                }}>
                <CustomDropdown
                  inputWidth={1}
                  data={data}
                  setValue={setNewSpecies}
                  value={speciesName}
                  placeholder={'Select Species'}
                />
              </View>
              {isInputBoxVisible && (
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout="row"
                    color={'black'}
                    labelStyle={{color: 'black'}}
                  />
                </View>
              )}
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {isInputBoxVisible && (
                  <TextInput
                    style={styles.inputContainer}
                    placeholder="Write New Species Name"
                    placeholderTextColor="#000"
                    value={speciesName}
                    onChangeText={t => addNewSpeciesName(t)}
                  />
                )}
              </View>
              {(user?.armLength == null || isModifyingArmLength) && (
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={styles.inputContainer}
                    placeholder="Arm length"
                    placeholderTextColor="#000"
                    value={armLength}
                    onChangeText={t => setArmLength(t)}
                  />
                </View>
              )}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: width,
                  justifyContent: 'center',
                  marginTop: 10,
                  marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => modifyArmLength()}>
                  <Text style={{color: 'black'}}>
                    {user?.armLength &&
                      (user?.armLength == null || !isModifyingArmLength) &&
                      `Arm Length is ${user?.armLength} cm, Want to modify it??`}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{display: 'flex', padding: 10}}>
                <CustomButton
                  text="Click Image"
                  onPress={takePicture}
                  button={{
                    backgroundColor: imageData?.photoUri ? 'grey' : '#84972D',
                    borderRadius: 20,
                    marginBottom: 20,
                  }}
                />
                {imageData?.photoUri && (
                  <View
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: -15,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        width: 'fit-content',
                        fontSize: 12,
                      }}>
                      Image Attached
                    </Text>
                  </View>
                )}
              </View>
              {imageData?.photoUri && armLength && speciesName ? (
                <View style={{display: 'flex', marginTop: 10}}>
                  <CustomButton
                    text="Submit Species"
                    onPress={handleAddSpeciesInfo}
                    button={{
                      backgroundColor: '#84972D',
                      borderRadius: 20,
                      marginBottom: 20,
                    }}
                  />
                </View>
              ) : null}
            </View>
            {/* <View style={{flex: 0.1,width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity    onPress={() => setModalVisible(true)}>
              <Text style={{color: '#84972D',marginRight:15}}>View Demo</Text>
            </TouchableOpacity>
            </View> */}
          </View>
          <View style={{position: 'absolute', top: height / 3 - 10, right: 10}}>
            <Image source={bird1} />
          </View>
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
             <Image source={spec1}  style={{height:100}}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{color:'black'}}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        </LinearGradient>
      )}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  userImage: {
    height: 50,
    width: 42,
    marginRight: '8%',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 0,
    color: 'black',
  },
  inputContainer: {
    height: 46,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 7,
    color: 'black',
    width: '81%',
    borderColor: 'gray',
  },
});

export default Main;
