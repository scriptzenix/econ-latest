import { Text, View,SafeAreaView,TextInput,Image,StyleSheet,TouchableOpacity, ImageComponent} from 'react-native'
import React,{useState}from 'react'
import{backIcon,rightIcon,forwardIcon,google,facebook} from "../../assets"
import Scale from '../../Scale'
import { useNavigation } from '@react-navigation/native'
export default function Login (){
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError,setemailError] =useState('');
  const [passwordError, setpasswordError] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateInputs = () => {
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

    if (!password.trim()) {
      setpasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setpasswordError('Password must be at least 6 characters long');
      isValid = false;
    } else {
      setpasswordError('');
    }

    return isValid;
  };
  const loginHandler = () => {
    if (validateInputs()) {
      navigation.navigate('/sign')
    }
  };
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity  onPress={() => {
          navigation.goBack();
        }}>
          <Image source={backIcon} style={styles.Icon} />
        </TouchableOpacity>
          <Text style={styles.headingTxt}>Login</Text>
        <View style={styles.container}>
          <View 
        style={[styles.textInputView, emailError && styles.textInputError]}

          >
        <Text style={[styles.placeholder, email !== '' && styles.placeholderShifted]}>Email</Text>
            <TextInput 
             autoCapitalize='none' keyboardType="email-address" style={styles.textInput}
            value={email}
            onChangeText={text => setEmail(text)}
            />
            { email !=='' &&<Image source={rightIcon} style={styles.rightIcon} />}
          </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <View 
        style={[styles.textInputView, passwordError && styles.textInputError]}

          >
        <Text style={[styles.placeholder, password !== '' && styles.placeholderShifted]}>Password</Text>

            <TextInput
             autoCapitalize='none' keyboardType="visible-password" style={styles.textInput}
            value={password}
            onChangeText={text=>setPassword(text)}
            />
            {password !== '' &&<Image source={rightIcon} style={styles.rightIcon} />}
          </View>
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        </View>
        <TouchableOpacity style={styles.linkView} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.acTxt}>Forgot your password?</Text>
          <TouchableOpacity>
            <Image source={forwardIcon} style={styles.forwardIcon} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnView} onPress={loginHandler}>
          <Text style={styles.btnTxt}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.socialacView}>
          <Text style={styles.socialacTxt}>Or login with social account</Text>
        </View>
        <View style={styles.bottombtnView}>
          <TouchableOpacity>
            <Image source={google} style={styles.Btn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={facebook} style={styles.Btn} />
          </TouchableOpacity>
        </View>
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
    alignItems:"center"

  },
  rightIcon: {
    width: Scale(19),
    height: Scale(16),
    resizeMode:"contain",
    marginRight:Scale(10)
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
  textInput:{
    height:Scale(50),
    width:Scale(300),
    marginHorizontal:Scale(5),
    fontSize:Scale(16),
    marginTop:Scale(2)
  },
  placeholder: {
    position: 'absolute',
    top: Scale(12),
    left: Scale(12),
    zIndex: -1,
    fontSize: Scale(16),
  },
  placeholderShifted: {
    top: Scale(2),
    fontSize: Scale(16),
    justifyContent:"center"
    // color: '#222222',
  },
  textInputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText:{
    color:"red",
    marginHorizontal:Scale(5)
  }
})