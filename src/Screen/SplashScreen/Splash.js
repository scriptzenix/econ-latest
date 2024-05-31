import React,{useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { splashimg,splashImg1,splashimg2} from '../../assets';
import Swiper from 'react-native-swiper'
import CustomButton from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';
import Scale from '../../Scale';
const Splash = () => {
    const navigation = useNavigation();
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       navigation.navigate("/");
//     }, 5000);
  
//     return () => clearTimeout(timeout);
//   }, [navigation]); 

    return (
      <Swiper autoplay={false} style={styles.wrapper} 
        activeDotColor='#fff' horizontal={true}
        dotStyle={{ height: 7, }}
        activeDotStyle={{ width: 18, borderRadius: 3.5 }}
      >
        <View style={styles.container}>
            <Image source={splashimg} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LandingPage')}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <ImageBackground source={splashImg1} style={styles.image1}>
       <CustomButton
        BtnName="Sign-up"
         handlePress={() => navigation.navigate('SignUp')}

         />
       <CustomButton 
       BtnName="Login" 
       handlePress={() => navigation.navigate('Login')}
       btnStyle={styles.loginBtn}
       textStyle={styles.loginBtnTxt}/>

        </ImageBackground>
    </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    image1:{
height:"100%",
width:"100%",
resizeMode:"contain",
justifyContent:"center",
alignItems:"center"
    },
    button: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    loginBtn:{
        borderColor:"#fff",
        borderWidth:1,
        backgroundColor:"transparent"
    },

});

export default Splash;
