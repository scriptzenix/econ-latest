import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, Modal } from 'react-native';
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
    const [open,setOpen] = useState(false);
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
                <View style={styles.inputView1}>
                    <Text style={[styles.placeholder, DOB !== '' && styles.placeholderShifted]}>Date of Birth</Text>

                    <TextInput
                        autoCapitalize='none'
                        style={styles.textInput}
                        onChangeText={text => setDOB(text)}
                        keyboardType="default"

                    />
                </View>
                <View style={styles.txtView}>
                    <Text style={styles.txtPass}>Password</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
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
const renderModal = ()=>{
    return(
        <Modal  animationType="slide"
        transparent={true}
        visible={open}>
        
        <View>
        <Text>helloo</Text>
        </View>
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
        backgroundColor: "#f9f9f9",
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
        resizeMode:"contain"
    },
    settings: {
        fontSize: Scale(34),
        color: "#22222",
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
    Container:{
     marginHorizontal:23
    }
});

export default Setting;
