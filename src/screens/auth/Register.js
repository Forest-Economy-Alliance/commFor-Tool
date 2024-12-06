import {Link} from 'react-router-native';
import {useRealm, useQuery} from '@realm/react';
import {useNavigate} from 'react-router-native';
import {handleRegister} from '../../store/actions/AuthActions';
import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import image1 from '../../assets/images/Component_three.png';
import bird1 from '../../assets/images/Bird_five.png';
import bird2 from '../../assets/images/Bird_six.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/CustomButton';
import CountryCodeFile from '../../components/CountryCode';
import CustomDropdown from '../../components/CustomDropdown';
import CustomDropdown1 from '../../components/CustomDropdown1';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Register() {
  // console.log(CountryCodeFile)
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode,setCountryCode] = useState(null);
  const [password, setPassword] = useState('');
  const [coutryDetails,setCountryDetails] = useState(null);
  const [phoneNumberLength,setPhoneNumberLength] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading,setLoadingTrue] = useState(false);
  const [countryName,setCountryName]  = useState(null);
  const [bit,setBit] = useState(false);
  const realm = useRealm();
  const navigate = useNavigate();
  const getCountryDetails = (data) =>{
 setPhoneNumberLength(CountryCodeFile[data]?.phoneNumberLength)
  setCountryDetails(CountryCodeFile[data])
  }
  // console.log(realm); 
  const handleAddProfile = async () => {
    if(phoneNumber?.length > phoneNumberLength){
      ToastAndroid.show('Please fill all the fields correctly', ToastAndroid.SHORT);
    }
    else if (phoneNumber != '' && password != '' && username !='' && countryName !='') {
      setLoadingTrue(true)
    await handleRegister(phoneNumber, password, username,countryName, navigate);
    setLoadingTrue(false);
    }
    else{
      ToastAndroid.show('Please fill all the fields', ToastAndroid.SHORT);
    }
  };

  const updatePhoneNumber = (t) =>{
    setBit(!bit);
    setPhoneNumber(t);
  }
  return (
    <KeyboardAwareScrollView>
      <LinearGradient
        colors={['#FFFFFF', '#DDE3FC']}
        style={styles.gradientStyle}>
        <View style={{flex: 1, width: screenWidth}}>
          <View style={{flex: 0.86}}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>CommFor</Text>
            </View>
            <View style={styles.bird1Container}>
              <View></View>
              <Image source={bird1} />
            </View>
            <View style={{flex: 0.65, marginLeft: '10%'}}>
              <View>
                <Text style={styles.labelText}>Name</Text>
                <TextInput
                  style={styles.inputStyle}
                  value={username}
                  onChangeText={text => setUsername(text)}
                />
              </View>
              <View  style={{marginTop: '3%'}}>
              <Text style={styles.labelText}>Select Country</Text>
                <CustomDropdown1
                data={CountryCodeFile}
                setValue={getCountryDetails}
                placeholder={'Select Country'}
                value={countryCode}
                setLabel={setCountryName}
                />
              </View>
              <View style={{marginTop: '3%'}}>
                <Text style={styles.labelText}>Mobile Number</Text>
                <View style={{display:'flex',flexDirection:'row',width:'100%'}}>
                <TextInput
                  style={{ height: 40,
                    margin: 12,
                    borderWidth: 0,
                    backgroundColor: '#fff',
                    padding: 10,
                    borderRadius: 20,
                    marginRight: '10%',
                    width:'20%',
                    marginLeft: 0,
                    color: 'black',}}
                  value={coutryDetails?.dialCode} 
                  />
                <TextInput
                  style={{height: 40,
                    marginTop: 12,
                    borderWidth: 0,
                    backgroundColor: '#fff',
                    padding: 10,
                    borderRadius: 20,
                    marginRight: '10%',
                    width:'70%',
                    marginLeft: -25,
                    color: 'black',}}
                  value={phoneNumber}
                  onChangeText={text => updatePhoneNumber(text)}
                  />
                  </View>
                  {phoneNumber?.length > phoneNumberLength && <Text style={{color:'red',marginTop:-7}}>Phone number length exceed!! </Text>}
              </View>
              <View style={{marginTop: '3%'}}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput
                  style={styles.inputStyle}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
              {/* <View style={{marginTop: '3%'}}>
                <Text style={styles.labelText}>Country Name</Text>
                <TextInput
                  style={styles.inputStyle}
                  value={countryName}
                  onChangeText={text => setCountryName(text)}
                />
              </View> */}
              <View style={{marginRight: '10%'}}>
                <CustomButton
                  text={isLoading?'Loading...':'Register'}
                  onPress={handleAddProfile}
                  button={{backgroundColor: '#98A931'}}
                />
              </View>
              <View style={styles.registerContainer}>
                <TouchableOpacity
                  onPress={()=>navigate('/login')}>
                  <Text style={styles.labelText}>Already Registered? Login</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 0.1}}>
              <Image source={bird2} style={{marginLeft: '10%'}} />
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
    flex: 0.2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoText: {
    color: '#679429',
    fontSize: 25,
    marginLeft: '10%',
  },
  bird1Container: {
    flex: 0.05,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: '10%',
  },
  labelText: {
    color: '#2D7C03',
    fontSize: 19,
  },
  registerContainer: {
    marginTop:20,
    marginRight:'10%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginRight: '10%',
    marginLeft: 0,
    color: 'black',
  },
  container: {
    flex: 0.14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // The image takes up the full width of the container
    height: '100%', // The image takes up the full height of the container
  },
});

export default Register;
