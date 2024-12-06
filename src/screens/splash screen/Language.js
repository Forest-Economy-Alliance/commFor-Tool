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
import LinearGradient from 'react-native-linear-gradient';
import image1 from '../../assets/images/Component_five.png';
import bird1 from '../../assets/images/Bird_eight.png';
import bird2 from '../../assets/images/Bird_nine.png';
import userImage from '../../assets/images/User.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomDropdown from '../../components/CustomDropdown';
import CustomButton from '../../components/CustomButton';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Language() {
    const [value, setValue] = useState(null);
    const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector(state => state.userInfo);
    const data = [
        { label: 'English', value: 'English' }
      ];
      const goNext = () =>{
        // dispatch({type: 'SET_LANGUAGE', payload: value});
        dispatch({type: 'SET_USER_LANGUAGE', payload: value});
        navigate('/site');
      }
      console.log(value)
    //   useEffect(()=>{
    //     if (user?.language) {
    //       navigate('/site');
    //     }
    //   },[user])
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
            <Image source={userImage} style={styles.userImage} />
          </View>
            <View style={styles.bird1Container}>
              <View></View>
              <Image source={bird2} style={{marginRight: '10%',marginTop:'10%'}} />
            </View>
          </View>
            <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <CustomDropdown inputWidth={1} setValue={setValue} value={value} data={data} placeholder={'Select Language'}/>
            </View>
           <View style={!value && {marginTop:50}}>
            {value &&
          <CustomButton
          text={"Submit"}
          button={{backgroundColor: '#98A931'}}
          onPress={()=>goNext()}
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
  )
}

export default Language

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