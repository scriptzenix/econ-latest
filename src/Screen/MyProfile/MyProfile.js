import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { searchIcon, Myprofile, forwardImg, backIcon } from '../../assets';
import Scale from '../../Scale';
import { useNavigation } from '@react-navigation/native'
const MyProfile = () => {
    return (
        <ScrollView style={styles.mainConatiner}>
            {renderHeader()}
            {rederDetail()}
        </ScrollView>
    )
}
renderHeader = () => {
    const [Input, setInput] = useState(false);
    const [search, setSearch] = useState("");
    return (
        <View style={styles.mainView}>
            <View style={[styles.backsearchImageView, { justifyContent: "flex-end", marginTop: Scale(5) }]}>

                {Input && (
                    <View style={styles.txtInput}>
                        <TextInput
                            placeholder='Search'
                            style={styles.txtInputt}
                            autoCapitalize='none'
                            keyboardType="default"
                            value={search}
                            onChangeText={(text) => setSearch(text)}
                        />
                    </View>
                )}
                <TouchableOpacity onPress={() => setInput(!Input)} style={{ alignSelf: Input ? "center" : "flex-end" }}>
                    <Image source={searchIcon} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.myProfileText}>My profile</Text>
            <View style={styles.profileView}>
                <Image source={Myprofile} style={styles.profileImg} />
                <View style={styles.nameView}>
                    <Text style={styles.nameText}>Matilda Brown</Text>
                    <Text style={styles.emailTxt}>matildabrown@mail.com</Text>
                </View>
            </View>
        </View>
    )
}
rederDetail = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.mainView}>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MyOrders')}>
                <View>
                    <Text style={styles.myorderTxt}>My Orders</Text>
                    <Text style={styles.subTxt}>Already have 12 orders</Text>
                </View>
                <TouchableOpacity>
                    <Image source={forwardImg} style={styles.forwardImg} /></TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.dividerView} />
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MyOrders')}>
                <View>
                    <Text style={styles.myorderTxt}>Shipping addresses</Text>
                    <Text style={styles.subTxt}>3 ddresses</Text>
                </View>
                <TouchableOpacity>
                    <Image source={forwardImg} style={styles.forwardImg} /></TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.dividerView} />

            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MyOrders')}>
                <View>
                    <Text style={styles.myorderTxt}>Payment methods</Text>
                    <Text style={styles.subTxt}>Visa  **34</Text>
                </View>
                <TouchableOpacity>
                    <Image source={forwardImg} style={styles.forwardImg} /></TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.dividerView} />

            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MyOrders')}>
                <View>
                    <Text style={styles.myorderTxt}>Promocodes</Text>
                    <Text style={styles.subTxt}>You have special promocodes</Text>
                </View>
                <TouchableOpacity>
                    <Image source={forwardImg} style={styles.forwardImg} /></TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.dividerView} />

            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MyOrders')}>
                <View>
                    <Text style={styles.myorderTxt}>My reviews</Text>
                    <Text style={styles.subTxt}>Reviews for 4 items</Text>
                </View>
                <TouchableOpacity>
                    <Image source={forwardImg} style={styles.forwardImg} /></TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.dividerView} />

            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Setting')}>
                <View>
                    <Text style={styles.myorderTxt}>Settings</Text>
                    <Text style={styles.subTxt}>Notifications, password</Text>
                </View>
                <TouchableOpacity>
                    <Image source={forwardImg} style={styles.forwardImg} /></TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.dividerView} />

        </View>
    )
}
export default MyProfile
const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    mainView: {
        marginHorizontal: Scale(15),
    },
    backsearchImageView: {
        flexDirection: "row",
        flex: 1
    },
    searchIcon: {
        height: Scale(40),
        width: Scale(18),
        resizeMode: "contain"
    },
    height: Scale(40),
    width: Scale(350),
    myProfileText: {
        fontSize: 34,
        color: "#222222",
        fontWeight: "bold",
        marginTop: Scale(20),
        fontFamily: "Metropolis"

    },
    profileView: {
        flexDirection: "row",
        marginTop: Scale(10)
    },
    profileImg: {
        height: Scale(74),
        width: Scale(74),
        borderRadius: Scale(100)
    },
    nameView: {
        marginLeft: Scale(10)
    },
    nameText: {
        fontSize: 20,
        color: "#222222",
        fontFamily: "Metropolis",
        fontWeight: "700"
    },
    emailTxt: {
        fontSize: 16,
        color: "#9B9B9B",
        fontFamily: "Metropolis"

    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Scale(20),

    },
    dividerView: {
        borderBottomWidth: 0.2,
        borderBottomColor: "#9B9B9B"
    },
    forwardImg: {
        height: Scale(12),
        width: Scale(7.4),
        justifyContent: "center",
        alignItems: "center"
    },
    myorderTxt: {
        fontFamily: "Metropolis",
        fontSize: 20,
        color: "#222222",
        fontWeight: "bold"
    },
    subTxt: {
        fontFamily: "Metropolis",
        fontSize: 14,
        lineHeight: 16,
        color: "#9B9B9B",
        marginTop: Scale(8)
    },
    txtInputt: {
        marginLeft: 10,
    },
    txtInput: {
        borderWidth: 1.5,
        height: Scale(40),
        width: Scale(350),
        borderColor: "#ededed",
        borderRadius: 5,
        marginRight: Scale(10),
        backgroundColor: "#fff",
        justifyContent: "center",
        shadowColor: "blue",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {
            height: 5,
            width: 5,
        },
    },

})