import { View, Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Scale from '../Scale';
import { useNavigation } from '@react-navigation/native';
const Header = (props) => {
const navigation = useNavigation();
    const {leftIcon,rightIcon,headerTxt,handlePress} = props;
  return (
    <View>
    <View style={styles.Container}>
    <TouchableOpacity 
    //    onPress={() => navigation.goBack()} 
    onPress={handlePress}
    >
      <Image source={leftIcon} style={styles.Icon} />
      </TouchableOpacity>
    <Text style={styles.headerTxt}>{headerTxt}</Text>
    <TouchableOpacity>
      <Image source={rightIcon} style={styles.icons} />
    </TouchableOpacity>
  </View>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
    Container: {
      backgroundColor: "#f9f9f9",
      justifyContent: "space-between",
      paddingHorizontal: Scale(10),
      alignItems: "center",
      flexDirection: "row",
      height: Scale(60),
      shadowColor: "#9B9B9B",
      shadowOpacity: 2,
      shadowRadius: 5,
      elevation: 15,
    },
    Icon: {
      height: Scale(26),
      width: Scale(26),
      resizeMode: "contain"
    },
    icons: {
      height: Scale(20),
      width: Scale(20),
      resizeMode: "contain"
    },
    headerTxt: {
      fontFamily: "Metropolis",
      fontSize: 18,
      lineHeight: 22,
      textAlign: "center",
      color: "#222222",
      fontWeight: "bold"
    },

})