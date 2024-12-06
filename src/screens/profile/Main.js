import React, {useCallback, useEffect, useState} from 'react';
import {
  BackHandler,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import userImage from '../../assets/images/User.png';
import {useNavigate} from 'react-router-native';
import CustomDropdown from '../../components/CustomDropdown';
import {useDispatch, useSelector} from 'react-redux';
import {getSites} from '../../controllers/FieldSitesServices';
import {useRealm} from '@realm/react';
import {profileSummary} from '../../controllers/ProfileServices';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
const {height, width} = Dimensions.get('window');
function Main() {
  const [value, setValue] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isInputBoxVisible, setInputBoxVisible] = useState(false);
  const [newSiteName, setNewSiteName] = useState(null);
  const [userSites, setUserSites] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.userInfo);
  const realm = useRealm();
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

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  useEffect(() => {
    realm.subscriptions
      .update(mutableSubs => {
        mutableSubs.add(realm.objects('FieldSites'));
      })
      .catch(err => {
        console.error('Failed to update subscriptions:', err);
      });
  }, [realm]);

  console.log('getting field sites....');
  const setNewSite = site => {
    if (site == 'Add New Site') {
      setValue(null);
      setInputBoxVisible(true);
    } else {
      setInputBoxVisible(false);
      setValue(site);
      handleGetSubmissions();
      setTimeout(() => {
        handleGetSubmissions();
      }, 1000);
    }
  };

  const addNewSite = site => {
    setNewSiteName(site);
    setValue(site);
  };
  const handleGetSites = useCallback(async () => {
    console.log('getting field sites....');
    const sites = await getSites(realm, user?.user?.id);
    var siteValues = [];
    sites.map(site => {
      siteValues.push({label: site?.siteName, value: site?.siteName});
    });
    setUserSites(siteValues);
  });
  console.log('sites from sites', userSites);

  useEffect(() => {
    // Fetch data immediately
    handleGetSites();

    // Fetch data again after 1 second
    const timer = setTimeout(() => {
      handleGetSites();
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);

  const handleGetSubmissions = useCallback(async () => {
    const submissions = await profileSummary(realm, user?.user?.id, value);
    console.log(submissions);
  });

  return (
    <KeyboardAwareScrollView>
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
          <View style={{flex: 0.8}}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CustomDropdown
                setValue={setNewSite}
                value={value}
                data={userSites}
                placeholder={'Select Field Site'}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
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
  userImage: {
    height: 50,
    width: 42,
    marginRight: '8%',
  },
});

export default Main;
