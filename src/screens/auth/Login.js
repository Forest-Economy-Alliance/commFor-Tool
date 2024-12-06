import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-native';
import {useDispatch, useSelector} from 'react-redux';
import {useRealm, useQuery} from '@realm/react';
import {Link} from 'react-router-native';
import {loginProfile} from '../../controllers/ProfileServices';
import {handleLogin} from '../../store/actions/AuthActions';

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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import image1 from '../../assets/images/Component_two.png';
import bird1 from '../../assets/images/Bird_three.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import bird2 from '../../assets/images/Bird_four.png';
import CustomButton from '../../components/CustomButton';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pass, setPassword] = useState('');
  const [isLoading,setLoadingTrue] = useState(false);
  const user = useSelector(state => state.userInfo);
  console.log('user', user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const realm = useRealm();
  const handleUserLogin = async () => {
    setLoadingTrue(true)
    console.log(phoneNumber, pass);
    if (phoneNumber != '' && pass != '') {
     await handleLogin(phoneNumber, pass,dispatch);
      if (user?.user) {
        setLoadingTrue(false)
        navigate('/change-language');
      }
    }
    setLoadingTrue(false);
  };
  useEffect(()=>{
    if (user?.user) {
      navigate('/change-language');
    }
  },[user])
  console.log(isLoading)
  return (
    <KeyboardAwareScrollView>
      <LinearGradient
        colors={['#FFFFFF', '#DDF2FC']}
        style={styles.gradientStyle}>
        <View>
          <View style={{flex: 0.8, width: screenWidth}}>
            <View style={{flex: 0.3}}>
              <View style={styles.logoContainer}>
                <View>
                  <Text style={{color: '#679429', fontSize: 25}}>CommFor</Text>
                   
                </View>
                <View></View>
              </View>
              <View style={styles.bird1Container}>
                <View></View>
                <Image source={bird2} style={{marginRight: '10%'}} />
              </View>
            </View>
            <View style={styles.formContainer}>
              <View>
                <Text style={styles.labelText}>Mobile Number</Text>
                <TextInput style={styles.inputContainer} value={phoneNumber} onChangeText={(text)=>setPhoneNumber(text)}/>
              </View>
              <View style={{marginTop: '5%'}}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput style={styles.inputContainer} secureTextEntry={true} value={pass} onChangeText={(text)=>setPassword(text)} />
              </View>
            </View>
    
            <CustomButton
            text={isLoading?"Loading..":"Login"}
            button={{backgroundColor: '#98A931'}}
            onPress={handleUserLogin}
            // onPress={!appUtils.loading?handleLogin:null}
            />
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
              <View style={styles.registerContainer}>
                <TouchableOpacity
                  onPress={()=>navigate('/register')}>
                  <Text style={styles.labelText}>New User? Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex:0.15}}>

            </View>
          </View>
          <View style={styles.container}>
            <Image source={image1} style={styles.image} resizeMode="cover" />
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
  inputContainer: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginRight: 30,
    marginLeft: 0,
    color:'black'
  },
  labelText: {
    color: '#2D7C03',
    fontSize: 19,
  },
  registerContainer: {
    flex: 0.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // The image takes up the full width of the container
    height: '100%', // The image takes up the full height of the container
  },
});
export default Login;
