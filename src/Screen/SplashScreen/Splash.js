import React,{useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { splashimg,splashimg1,splashimg2} from '../../assets';
import Swiper from 'react-native-swiper'

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Main");
    }, 3000);
  
    return () => clearTimeout(timeout);
  }, [navigation]); 

    return (
      <Swiper autoplay={true} style={styles.wrapper} 
        activeDotColor='#fff' horizontal={true}
        dotStyle={{ height: 7, }}
        activeDotStyle={{ width: 18, borderRadius: 3.5 }}
      >
        <View style={styles.container}>
            <Image source={splashimg} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <Image source={splashimg1} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.container}>
    <Image source={splashimg2} style={styles.image} />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
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
});

export default Splash;
