import { Text, View,StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Scale from '../../Scale'
import { backIcon, rightIcon, closeIcon } from '../../assets'
import { useNavigation } from '@react-navigation/native'
export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setemailError] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = () => {
    let isValid = true;

    if (!email.trim()) {
      setemailError('Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setemailError('Invalid email format');
      isValid = false;
    } else {
      setemailError('');
    }

    return isValid;
  };

  const handleSendPress = () => {
    if (validateEmail()) {
      // Proceed with sending email logic
    }
  };
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => {
        navigation.goBack();
      }}>
        <Image source={backIcon} style={styles.Icon} />
      </TouchableOpacity>
      <Text style={styles.headingTxt}>Forgot password</Text>
      <View style={styles.container}>
        <Text style={styles.subHeadingTxt}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
        <View
          style={[styles.textInputView, emailError && styles.textInputError]} >
          <Text style={[styles.placeholder, email !== '' && styles.placeholderShifted]}>Email</Text>

          <TextInput autoCapitalize='none' keyboardType="email-address" style={styles.textInput}
            value={email}
            onChangeText={text => setEmail(text)} />
           {emailError ? (
            <Image source={closeIcon} style={styles.rightIcon} /> 
          ) : (
            email !== '' && <Image source={rightIcon} style={styles.rightIcon} />
          )}
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      </View>

      <TouchableOpacity style={styles.btnView} onPress={handleSendPress}>
        <Text style={styles.btnTxt}>SEND</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: "#f9f9f9",
    marginHorizontal: Scale(15)
  },
  Icon: {
    height: Scale(24),
    width: Scale(24),
  },
  headingTxt: {
    fontSize: Scale(34),
    fontWeight: "700",
    color: "#000",
    marginTop: Scale(20)
  },
  textInputView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ededed",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    marginTop: Scale(8),
    alignItems: "center"

  },
  rightIcon: {
    width: Scale(19),
    height: Scale(16),
    resizeMode: "contain",
    marginRight: Scale(10)
  },
  container: {
    marginTop: Scale(50)
  },
  linkView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: Scale(10),
    marginLeft: Scale(5)

  },
  acTxt: {
    fontSize: Scale(18),
    color: "#222222",
  },
  forwardIcon: {
    height: Scale(7),
    width: Scale(15),
    marginLeft: Scale(5),
    alignItems: "center",
    justifyContent: "center",
    marginTop: Scale(8)
  },
  btnTxt: {
    color: "#FFFFFF",
    textAlign: "center",
    justifyContent: "center",
    fontSize: Scale(15)
  },
  btnView: {
    backgroundColor: "#DB3022",
    borderRadius: Scale(25),
    width: Scale(370),
    height: Scale(48),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: Scale(20),
    marginTop: Scale(30)
  },
  socialacTxt: {
    fontSize: Scale(20),
    color: "#222222",
  },
  socialacView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.5
  },
  bottombtnView: {
    flexDirection: "row",
    marginTop: Scale(20),
    alignItems: "center",
    justifyContent: "center"
  },
  Btn: {
    width: Scale(92),
    height: Scale(64)
  },
  textInput: {
    height: Scale(50),
    width: Scale(300),
    marginHorizontal: Scale(8)
  },
  subHeadingTxt: {
    fontSize: 18,
    color: "#222222",
    lineHeight: Scale(20),
  },
  placeholder: {
    position: 'absolute',
    top: Scale(13),
    left: Scale(12),
    zIndex: -1,
    fontSize: Scale(16),
  },
  placeholderShifted: {
    top: Scale(-1),
    fontSize: Scale(16),
    justifyContent: "center"
    // color: '#222222',
  },
  textInputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
})