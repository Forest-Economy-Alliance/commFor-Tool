import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {useNavigate} from 'react-router-native';
const {height, width} = Dimensions.get('window');
import userImage from '../../../assets/images/User.png';
import CustomDropdown from '../../../components/CustomDropdown';
import Forest from './Forest';
import Socio from './Socio';

function Main() {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);
  const [
    individualsCommunititesHarvestProductsValue,
    setindividualsCommunititesHarvestProductsValue,
  ] = useState(false);
  const individualsCommunititesHarvestProducts = [
    {label: 'Forest', value: 'Forest'},
    {label: 'Community', value: 'Community'},
  ];
  const setNewindividualsCommunititesHarvestProductsValue = data => {
    setindividualsCommunititesHarvestProductsValue(data);
  };
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
          <View style={styles.dropDownView}>
            <CustomDropdown
              data={individualsCommunititesHarvestProducts}
              setValue={setNewindividualsCommunititesHarvestProductsValue}
              value={individualsCommunititesHarvestProductsValue}
            />
          </View>
          {individualsCommunititesHarvestProductsValue == 'Forest' &&
          <View style={{display:'flex',justifyContent:'center',width:'100%',flexDirection:'row',marginBottom:20}}>
            <Text style={{fontSize:19,color:'#679429',fontWeight:500}}>Forest</Text>
          </View>
          }
          {individualsCommunititesHarvestProductsValue == 'Community' &&
          <View style={{display:'flex',justifyContent:'center',width:'100%',flexDirection:'row',marginBottom:20}}>
            <Text style={{fontSize:19,color:'#679429',fontWeight:500}}>Community</Text>
          </View>
          }
        <View style={{flex:0.8}}>
          {individualsCommunititesHarvestProductsValue == 'Forest' && (
              <Forest setindividualsCommunititesHarvestProductsValue={setindividualsCommunititesHarvestProductsValue}/>
            )}
          {individualsCommunititesHarvestProductsValue == 'Community' && (
              <Socio />
            )}
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
  dropDownView: {
    flex: 0.1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  userImage: {
    height: 50,
    width: 42,
    marginRight: '8%',
  },
});

export default Main;
