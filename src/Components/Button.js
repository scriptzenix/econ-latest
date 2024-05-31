import { Text, StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Scale from '../Scale';
import { useNavigation } from '@react-navigation/native'
const CustomButton = (props) => {
  const navigation = useNavigation();
    const {BtnName,handlePress,btnStyle,textStyle} = props;

  return (
                <TouchableOpacity style={[styles.checkBtn,btnStyle]} onPress={() => navigation.navigate(handlePress)}>
                    <Text style={[styles.checkBtnTxt,textStyle]}>{BtnName}</Text>
                </TouchableOpacity>
  )
}
export default CustomButton;

const styles = StyleSheet.create({
    checkBtn:{
        // backgroundColor: "red",
        // height: Scale(38),
        // width: Scale(160),
        // borderRadius: Scale(25),
        // justifyContent: "center",
        // alignItems: "center",
        // marginHorizontal: Scale(10),
        // marginBottom: Scale(20)
        backgroundColor: "#DB3022",
        borderRadius: Scale(25),
        width: Scale(400),
        height: Scale(48),
        alignItems: "center",
        justifyContent: "center",
        // marginHorizontal: Scale(20),
        marginTop: Scale(30)
    },
    checkBtnTxt:{
    fontSize: Scale(14),
    color: "#fff",
    fontFamily: "Metropolis",
    }
})