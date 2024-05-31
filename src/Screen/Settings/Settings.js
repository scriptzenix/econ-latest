import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, Modal} from 'react-native';
import { backIcon, searchIcon } from '../../assets';
import Scale from '../../Scale';
import SwitchToggle from 'react-native-switch-toggle';
import { useNavigation } from "@react-navigation/native";
const Setting = () => {
    const [search, setSearch] = useState("");
    const [txtInput, setTxtInput] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = useState(true);
    const [SwitchOn, setSwitchOn] = useState(false);
    const [isSwitch, setIsSwitch] = useState(false);
    const [name, setname] = useState('');
    const [DOB, setDOB] = useState('');
    const [Password, setPassword] = useState('');
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [oldPassword, setoldPassword] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    const [repeatePassword, setrepeatePassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [dobError, setDobError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');
    const validateName = (text) => {
        const regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(text)) {
            setNameError('Name should contain only alphabets and spaces');
        } else {
            setNameError('');
        }
        setname(text);
    };

    const validateDOB = (text) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(text)) {
            setDobError('Date of Birth should be in YYYY-MM-DD format');
        } else {
            setDobError('');
        }
        setDOB(text);
    };

    const validatePassword = (text, type) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let error = '';
        if (!regex.test(text)) {
            error = 'Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character';
        }
        if (type === 'current') {
            setPasswordError(error);
            setPassword(text);
        } else if (type === 'new') {
            setNewPasswordError(error);
            setNewPassword(text);
        } else {
            setRepeatPasswordError(error);
            setrepeatePassword(text);
        }
    };
    const renderHeader = () => {
        return (
            <View>
                <View style={styles.backsearchImageView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={backIcon} style={styles.backImage} />
                    </TouchableOpacity>
                    {txtInput && (
                        <View style={styles.txtInputfield}>
                            <TextInput
                                placeholder='Search'
                                style={styles.txtInputt}
                                autoCapitalize='none'
                                keyboardType="default"
                                value={search}
                                onChangeText={text => setSearch(text)}
                            />
                        </View>
                    )}
                    <TouchableOpacity onPress={() => setTxtInput(!txtInput)}>
                        <Image source={searchIcon} style={styles.backImage} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.settings}>Settings</Text>
                <Text style={styles.informationTxt}>Personal Information</Text>
            </View>
        );
    };

    const renderForm = () => {
        return (
            <View style={styles.formView}>
                <View style={styles.inputView}>
                    <Text style={[styles.placeholder, name !== '' && styles.placeholderShifted]}>Full Name</Text>
                    <TextInput
                        keyboardType="default"
                        autoCapitalize='none'
                        style={styles.textInput}
                        onChangeText={text => setname(text)}

                    />
                </View>
                {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                <View style={styles.inputView1}>
                    <Text style={[styles.placeholder, DOB !== '' && styles.placeholderShifted]}>Date of Birth</Text>

                    <TextInput
                        autoCapitalize='none'
                        style={styles.textInput}
                        onChangeText={text => setDOB(text)}
                        keyboardType="default"
                    />
                </View>
                {dobError ? <Text style={styles.errorText}>{dobError}</Text> : null}
                <View style={styles.txtView}>
                    <Text style={styles.txtPass}>Password</Text>
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Text style={styles.txtChange}>Change</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.inputView1}>
                    <Text style={[styles.placeholder, Password !== '' && styles.placeholderShifted]}>Password</Text>

                    <TextInput
                        keyboardType="default"
                        autoCapitalize='none'
                        style={styles.textInput}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}

                    />
                </View>
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>
        );
    };

    const renderNotification = () => {
        return (
            <View style={styles.Container}>
                <View>
                    <Text style={styles.Txt}>Notifications</Text>
                </View>
                <View style={styles.togglebView}>
                    <Text style={styles.Txtsale}>Sales</Text>
                    <SwitchToggle
                        switchOn={isSwitchOn}
                        onPress={() => setIsSwitchOn(!isSwitchOn)}
                        circleColorOff="white"
                        circleColorOn="green"
                        backgroundColorOff="#F0F0F0"
                        backgroundColorOn="#F0F0F0"
                        containerStyle={styles.toggleContainer}
                        circleStyle={styles.toggleCircle}
                    />
                </View>
                <View style={styles.togglebView}>
                    <Text style={styles.Txtsale}>New arrivals</Text>
                    <SwitchToggle
                        switchOn={SwitchOn}
                        onPress={() => setSwitchOn(!SwitchOn)}
                        circleColorOff="white"
                        circleColorOn="green"
                        backgroundColorOff="#F0F0F0"
                        backgroundColorOn="#F0F0F0"
                        containerStyle={styles.toggleContainer}
                        circleStyle={styles.toggleCircle}
                    />
                </View>
                <View style={styles.togglebView}>
                    <Text style={styles.Txtsale}>Delivery status changes</Text>
                    <SwitchToggle
                        switchOn={isSwitch}
                        onPress={() => setIsSwitch(!isSwitch)}
                        circleColorOff="white"
                        circleColorOn="green"
                        backgroundColorOff="#F0F0F0"
                        backgroundColorOn="#F0F0F0"
                        containerStyle={styles.toggleContainer}
                        circleStyle={styles.toggleCircle}
                    />
                </View>
            </View>
        );
    };
    const renderModal = () => {
        return (
            <Modal animationType="slide"
                visible={open}
                transparent={true}
                onRequestClose={() => {setOpen(false); } }

            >
                <TouchableOpacity
                    style={styles.centeredView}
                    activeOpacity={1}
                    onPressOut={() => setOpen(false)}
                >
                    <View style={styles.modalView}>
                        <View style={styles.blankView} />
                        <View>
                            <Text style={styles.headerTxt}>Password Change</Text>
                        </View>
                        <View style={styles.modalInput}>
                            <Text style={[styles.placeholder, oldPassword !== '' && styles.placeholderShifted]}>Old Password</Text>

                            <TextInput
                                keyboardType="default"
                                autoCapitalize='none'
                                style={styles.textInput}
                                onChangeText={text => setoldPassword(text)}
                                secureTextEntry={true}
                            />
                            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                        </View>
                        <TouchableOpacity style={styles.linkView} onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={styles.acTxt}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <View style={styles.modalInput}>
                            <Text style={[styles.placeholder, NewPassword !== '' && styles.placeholderShifted]}>New Password</Text>

                            <TextInput
                                keyboardType="default"
                                autoCapitalize='none'
                                style={styles.textInput}
                                onChangeText={text => setNewPassword(text)}
                                secureTextEntry={true}
                            />
                            {newPasswordError ? <Text style={styles.errorText}>{newPasswordError}</Text> : null}
                        </View>
                        <View style={styles.modalInput}>
                            <Text style={[styles.placeholder, repeatePassword !== '' && styles.placeholderShifted]}>Repeat New Password</Text>

                            <TextInput
                                keyboardType="default"
                                autoCapitalize='none'
                                style={styles.textInput}
                                onChangeText={text => setrepeatePassword(text)}
                                secureTextEntry={true}
                            />
                            {repeatPasswordError ? <Text style={styles.errorText}>{repeatPasswordError}</Text> : null}
                        </View>
                        <TouchableOpacity style={styles.saveBtn}>
                            <Text style={styles.saveBtnTxt}>SAVE PASSWORD</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

            </Modal>
        )
    }
    return (
        <View style={styles.mainContainer}>
            {renderHeader()}
            {renderForm()}
            {renderNotification()}
            {renderModal()}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9",
    },
    backsearchImageView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: Scale(16),
    },
    backImage: {
        height: Scale(30),
        width: Scale(20),
        resizeMode: "contain"
    },
    settings: {
        fontSize: Scale(34),
        color: "#222222",
        fontWeight: "bold",
        marginLeft: Scale(20),
        marginTop: Scale(20)
    },
    informationTxt: {
        marginTop: Scale(20),
        marginHorizontal: 23,
        fontSize: Scale(16),
        color: "#222222",
        fontWeight: "bold",
        marginVertical: 15
    },
    inputView: {
        height: Scale(64),
        width: Scale(390),
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    formView: {
        marginHorizontal: 23,
    },
    txtInput: {
        marginLeft: 25,
        fontSize: Scale(14)
    },
    txtView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: Scale(20),
        marginHorizontal: 3
    },
    inputView1: {
        height: Scale(64),
        width: Scale(390),
        backgroundColor: "#fff",
        justifyContent: "center",
        marginTop: Scale(25)
    },
    txtPass: {
        fontSize: Scale(16),
        color: "#222222"
    },
    txtChange: {
        fontSize: Scale(14),
        color: "#9b9b9b"
    },
    txtInputt: {
        height: 100,
        width: 250
    },
    txtInputfield: {
        borderWidth: 1.5,
        height: Scale(30),
        width: Scale(300),
        borderColor: "#ffff",
        borderRadius: 5,
        backgroundColor: "#fff",
        justifyContent: "center",
        shadowColor: "blue",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {
            height: 5,
            width: 5,
        },
        elevation: 3,
    },
    togglebView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    Txt: {
        fontFamily: "Metropolis",
        fontSize: 20,
        color: "#222222",
        fontWeight: "bold",
        marginVertical: 30,
    },
    toggleContainer: {
        width: Scale(50),
        height: Scale(30),
        borderRadius: Scale(25),
        padding: Scale(5),
    },
    toggleCircle: {
        width: Scale(20),
        height: Scale(20),
        borderRadius: Scale(10),
    },
    Txtsale: {
        fontFamily: "Metropolis",
        fontSize: 17,
        color: "#222222",
    },
    placeholder: {
        position: 'absolute',
        margintTop: Scale(12),
        left: Scale(12),
        zIndex: -1,
        fontSize: Scale(16),
        fontFamily: "Metropolis",
    },
    placeholderShifted: {
        top: Scale(2),
        fontSize: Scale(16),
        justifyContent: "center"
    },
    textInput: {
        height: Scale(50),
        width: Scale(300),
        marginHorizontal: Scale(5),
        fontSize: Scale(16),
        marginTop: Scale(2),
        fontFamily: "Metropolis",
    },
    Container: {
        marginHorizontal: 23
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#F9F9F9',
        padding: 35,
        shadowColor: '#000',
        height: "60%",
        width: "99%",

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34
    },
    headerTxt: {
        fontFamily: "Metropolis",
        fontSize: 18,
        color: "#222222",
        fontWeight: "bold",
        textAlign: "center",
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
    linkView: {
        marginTop: Scale(10),
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    acTxt: {
        color: "#9B9B9B",
        fontFamily: "Metropolis",
        fontSize: 16,
        lineHeight: 20,
    },
    modalInput: {
        height: Scale(64),
        backgroundColor: "#fff",
        justifyContent: "center",
        marginTop: Scale(25)
    },
    saveBtn: {
        backgroundColor: "#DB2023",
        height: 48,
        width: 380,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    saveBtnTxt: {
        color: "#ffff",
        fontFamily: "Metropolis",
        fontSize: 15,
    },
    blankView: {
        height: 7,
        width: 80,
        backgroundColor: "#9B9B9B",
        alignSelf: "center",
        borderRadius: 10,
        marginBottom:10
    },
    errorText: {
        color: 'red',
        marginLeft: 15,
        marginTop: 5,
    }
});

export default Setting;
