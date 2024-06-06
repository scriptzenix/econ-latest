import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import BagCart from "../../Components/BagCart";
import Scale from '../../Scale';
import { searchIcon, inactiveIcon } from '../../assets';
export default function MyBag() {
    return (
        <View style={styles.mainConatiner}>
            {renderHeader()}
            <View>
                <BagCart />
                {renderCode()}
            </View>
        </View>
    );
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
            <Text style={styles.headetTxt}>My Bag</Text>


        </View>
    )
}
const renderCode = () => {
    return (
        <View style={styles.inputTxt}>
            <TextInput placeholder='Enter your promo code' />
            <Image source={inactiveIcon} style={styles.searchIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainView: {
        marginHorizontal: Scale(15),
    },
    backsearchImageView: {
        flexDirection: "row",
    },
    searchIcon: {
        height: Scale(40),
        width: Scale(18),
        resizeMode: "contain"
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
    headetTxt: {
        fontSize: 34,
        color: "#222222",
        fontWeight: "bold",
        marginTop: Scale(20),
        fontFamily: "Metropolis"

    },
    inputTxt:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20,
        backgroundColor:"white",
        width:Scale(350),

    }

});
