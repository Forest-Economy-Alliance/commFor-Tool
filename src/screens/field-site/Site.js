import React,{useRef, useState,useEffect, useCallback} from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import {useRealm, useQuery} from '@realm/react';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import image1 from '../../assets/images/Component_five.png';
import bird1 from '../../assets/images/Bird_eight.png';
import bird2 from '../../assets/images/Bird_nine.png';
import userImage from '../../assets/images/User.png';
import CustomButton from '../../components/CustomButton';
import CustomDropdown from '../../components/CustomDropdown';
import { useNavigate } from 'react-router-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import { addSite, getSites } from '../../controllers/FieldSitesServices';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Site() {
  const [value, setValue] = useState(null);
  const [visible, setVisible] = useState(false);
const [isFocus, setIsFocus] = useState(false);
const [isInputBoxVisible,setInputBoxVisible] = useState(false);
const [newSiteName,setNewSiteName] = useState(null);
const [userSites,setUserSites] = useState([]);
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector(state => state.userInfo);
const realm = useRealm();
// console.log(user?.user?.id)
useEffect(() => {
  realm.subscriptions
    .update(mutableSubs => {
      mutableSubs.add(realm.objects('FieldSites'));
    })
    .catch(err => {
      console.error('Failed to update subscriptions:', err);
    });
}, [realm]);
const hideMenu = () => setVisible(false);

const showMenu = () => setVisible(true);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  const data = [
    { label: 'Hyderabad', value: 'Hyderabad' },
    {label:'Add New Site',value:'Add New Site'}
  ];
  const setNewSite = (site)=>{
    if(site=='Add New Site'){
        setValue(null)
        setInputBoxVisible(true);
    }
    else{
      setInputBoxVisible(false);
      setValue(site);      
    }
  }
   
  const addNewSite=(site) =>{
    setNewSiteName(site)
    setValue(site);
  }
  const userId =user?.user?.id;
  const goNext = () =>{
    dispatch({type: 'SET_FIELD_SITE', payload: value});
    navigate('/home');
  }
  const handleUpdateSite= useCallback(async () => {
    console.log("adding site....",userId)
    const user = await addSite(realm,userId,value, dispatch,navigate);
    }
  , [realm,userId,value, dispatch,navigate]);
const handleGetSites= useCallback(async()=>{
  console.log("getting field sites....")
  const sites =  await getSites(realm,user?.user?.id)
  var siteValues = [];
  sites.map((site)=>{
    siteValues.push( { label: site?.siteName, value: site?.siteName },)
  })
  siteValues.push({label:'Add New Site',value:'Add New Site'});
  setUserSites(siteValues);
})
console.log("sites from sites",userSites)

useEffect(() => {
  // Fetch data immediately
  handleGetSites();

  // Fetch data again after 1 second
  const timer = setTimeout(() => {
    handleGetSites();
  }, 1000);

  return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
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

  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  return () => backHandler.remove();
}, []);
  return (
    <KeyboardAwareScrollView>
    <LinearGradient
      colors={['#FFFFFF', '#DDF2FC']}
      style={styles.gradientStyle}>
      <View>
        <View style={{flex: 1, width: screenWidth}}>
          <View style={{flex: 1}}>
          <View style={styles.logoView}>
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
                      onPress={() => navigate('/home')}
                      textStyle={{color: 'white', fontSize: 17}}>
                      Home
                    </MenuItem>
                  </Menu>
                  <TouchableOpacity onPress={() => {user?.fieldSite?showMenu():null}}>
                    <Image source={userImage} style={styles.userImage} />
                  </TouchableOpacity>
                </View>
          </View>
            <View style={styles.bird1Container}>
              <View></View>
              <Image source={bird2} style={{marginRight: '10%',marginTop:'10%'}} />
            </View>
          </View>
            <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <CustomDropdown inputWidth={1} setValue={setNewSite} value={value} data={userSites} placeholder={'Select Field Site'}/>
            </View>

           <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            {isInputBoxVisible &&
            <>
             {/* <Text style={styles.labelText}>New Site Name</Text> */}
             <TextInput style={styles.inputContainer} placeholder='Write New Site Name'
        placeholderTextColor="#000" value={newSiteName} onChangeText={(t)=>addNewSite(t)}/>
            </>
            }
           </View>
           <View style={!value && {marginTop:50}}>
            {value &&
          <CustomButton
          text={"Submit"}
          button={{backgroundColor: '#98A931'}}
          onPress={()=>newSiteName?handleUpdateSite():goNext()}
          // onPress={!appUtils.loading?handleLogin:null}
          />
            }
          </View>
             {/* {(error!='')?
          <View style={{position:'absolute',bottom:5,display:'flex',flexDirection:'row',justifyContent:'center',width:screenWidth,}}>
            <View style={{backgroundColor:'#98AA23',padding:10,borderRadius:15,paddingRight:35,paddingLeft:35,marginLeft:'5%'}}>

                <Text  style={{fontSize:16,color:'white'}}>{error}</Text>
            </View>
              </View>
              :null
} */}
          <View style={{flex: 0.2}}>
            <View style={{flex: 0.5}}>
              <Image
                style={{marginLeft: 20}}
                source={bird1}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={{flex:0.15}}>

          </View>
        </View>
        <View style={styles.container}>
          <Image source={image1} style={styles.image} resizeMode="contain" />
        </View>
      </View>
    </LinearGradient>
  </KeyboardAwareScrollView>
);

}

export default Site
const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight,
  },
  logoContainer: {
    flex: 0.7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '10%',
  },
  bird1Container: {
    flex: 0.3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: '0%',
  },
  formContainer: {
    flex: 0.45,
    marginLeft: '10%',
    display: 'flex',
    justifyContent: 'center',
  },
  labelText: {
    color: 'black',
    fontSize: 19,
  },
  inputContainer: {
    height: 46,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 7,
    color:'black',
    width:'81%',
    borderColor: 'gray',
  },
  registerContainer: {
    flex: 0.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    marginTop:10,
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
  userImage: {
    height: 50,
    width: 42,
    marginRight: '8%',
  },
  birdContainer: {
    flex: 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '8%',
  },
  mainContainer: {
    flex: 0.6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bird2Container: {
    flex: 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: '8%',
  },
  container: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    objectFit:'cover',
  },
  image: {
    width: '100%', // The image takes up the full width of the container
    height: '100%', // The image takes up the full height of the container
  },
});