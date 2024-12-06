import React, {useEffect,useState} from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import image1 from '../../assets/images/Component_one.png';
import bird1 from '../../assets/images/first_bird.png';
import bird2 from '../../assets/images/Bird_two.png';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function SplashScreen({navigation}) {
  const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const app = useSelector(state=>state.appInfo);
    useEffect(() => {
      const nav = () => {
        navigate('/login', { replace: true });
      };
      const timer = setTimeout(nav, 1500);
      return () => {
        clearTimeout(timer);
      };
    }, []);
  return (
    <LinearGradient
      colors={['#FFFFFF', '#DDF2FC']}
      style={styles.gradientStyle}>
      <SafeAreaView>
        <View style={{flex: 0.45, width: screenWidth}}>
          <View style={{flex: 0.8}}>
            <View style={{flex: 0.2}}></View>
            <View style={styles.ContainerBird}>
              <View></View>
              <Image source={bird1}  />
            </View>
            <View style={{flex: 0.5}}>
              <Text style={styles.logoText}>Comm</Text>
              <Text style={styles.logoText}>For</Text>
            </View>
            <View style={{flex: 0.25}}></View>
          </View>
          <View style={{flex: 0.2, marginLeft: '10%'}}>
            <Image source={bird2} />
          </View>
        </View>
        <View style={styles.container}>
          <Image source={image1} style={styles.image} resizeMode="cover" />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerBird: {
    flex: 0.05,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: '10%'
  },
  
  logoText: {
    color: '#679429',
    fontSize: 25,
    marginLeft: '10%',
    width: 110,
    fontFamily: 'Quicksand',
  },
  container: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // The image takes up the full width of the container
    height: '100%', // The image takes up the full height of the container
  },
});

export default SplashScreen;
