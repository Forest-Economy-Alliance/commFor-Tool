import {Link, useLocation, useNavigate} from 'react-router-native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  Dimensions,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import image1 from '../../assets/images/Component_four.png';
import bird1 from '../../assets/images/Bird_seven.png';
import bird2 from '../../assets/images/Bird_two.png';
import downArrow from '../../assets/images/down_arrow.png';
import userImage from '../../assets/images/User.png';
import {useDispatch, useSelector} from 'react-redux';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import CustomButton from '../../components/CustomButton';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
function Home() {
  const [visible, setVisible] = useState(false);
  const user = useSelector(state => state.userInfo);
  const dispatch = useDispatch()
  console.log(user);
  const navigate = useNavigate();
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

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    if (!user?.user) {
      navigate('/login');
    }
  }, [user]);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const handleLogout = () =>{
     dispatch({type:'LOG_OUT'})
  }
  return (
    <LinearGradient
    colors={['#FFFFFF', '#FCE2DD']}
    style={styles.gradientStyle}>
    <View style={{flex: 1, width: screenWidth}}>
      <View style={{flex: 0.6}}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>CommFor</Text>
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
                onPress={() => navigate('/site')}
                textStyle={{color: 'white', fontSize: 17}}>
                Change Field Site
              </MenuItem>
              <MenuItem
                onPress={()=>navigate('/profile-summary')}
                textStyle={{color: 'white', fontSize: 17}}>
                Profile Summary
              </MenuItem>
              <MenuItem
                onPress={handleLogout}
                textStyle={{color: 'white', fontSize: 17}}>
                Logout
              </MenuItem>
            </Menu>
            <TouchableOpacity onPress={() => showMenu()}>
              <Image source={userImage} style={styles.userImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 0.05}}>
          <View style={styles.birdContainer}>
            <Image source={bird1} style={{marginLeft: '8%'}} />
            <View></View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            text=" &nbsp;Data Capture &nbsp;"
            onPress={() => navigate('/data-capture')}
            button={[styles.buttonn, {backgroundColor: '#98A931'}]}
          />
          <CustomButton
            text="Data Collection"
            onPress={() =>navigate('/data-collection')}
            button={[styles.buttonn, {backgroundColor: '#84972D'}]}
          />
            <CustomButton
            text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Insights&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            onPress = {() => {Linking.openURL('https://ncount.in/dashboard')}}
            button={[styles.buttonn, {backgroundColor: '#84972D'}]}
          />
            <CustomButton
            text="&nbsp;&nbsp;&nbsp;Community&nbsp;&nbsp;&nbsp;"
            onPress = {() => {Linking.openURL('https://forum.ncount.in/chat/c/commfor/3')}}
            button={[styles.buttonn, {backgroundColor: '#84972D'}]}
          />
        </View>
        <View style={{flex: 0.001}}>
          <View style={styles.birdContainer}>
            <View></View>
            <Image source={bird2} style={{marginRight: '8%'}} />
          </View>
        </View>
        {/* <View style={{flex:0.15,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}> */}

        {/* </View> */}

        <View style={{flex: 0.1}}></View>
      </View>
      <View style={styles.container}>
        <Image source={image1} style={styles.image} resizeMode="cover" />
      </View>
    </View>
  </LinearGradient>
);
}
const styles = StyleSheet.create({
gradientStyle: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
logoContainer: {
  flex: 0.2,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
logoText: {
  color: '#679429',
  fontSize: 25,
  marginLeft: '8%',
},
buttonn: {
  backgroundColor: '#84972D',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // marginLeft: '10%',
  marginTop: '15%',
},
userImage: {
  height: 50,
  width: 42,
  marginRight: '8%',
},
birdContainer: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
buttonContainer: {
  flex: 0.6,
  marginTop: '10%',
  width:'100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
},
container: {
  flex: 0.4,
  justifyContent: 'center',
  alignItems: 'center',
},
image: {
  width: '100%', // The image takes up the full width of the container
  height: '100%', // The image takes up the full height of the container
},
});

export default Home;
