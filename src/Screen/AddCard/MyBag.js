import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import BagCart from "../../Components/BagCart";
import Scale from '../../Scale';
import { searchIcon, inactiveIcon } from '../../assets';
import CustomButton from '../../Components/Button';
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
        <View>
            <View style={styles.inputTxtView}>
                <TextInput placeholder='Enter your promo code' style={styles.inputTxt} />
                <Image source={inactiveIcon} style={styles.inactiveIcon} />
            </View>
            <View style={styles.amountTxtView}>
                <Text style={styles.totalamountTxt}>Total amount:</Text>
                <Text style={styles.amountTxt}>124$</Text>
            </View>
            <CustomButton BtnName="CHECK OUT" btnStyle={styles.checkBtn}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
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
    inputTxtView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        backgroundColor: "#ffff",
        width: "95%",
        height: Scale(45),
        gap: 5,
        alignItems: "center",
        borderRadius: 10
    },
    inactiveIcon: {
        height: Scale(45),
        width: Scale(45)
    },
    inputTxt: {
        fontSize: 14,
        color: "#222222",
        fontFamily: "Metropolis",
        marginLeft: 10
    },
    amountTxtView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 20
    },
    totalamountTxt: {
        fontFamily: "Metropolis",
        fontSize: 16,
        color: "9B9B9B"
    },
    amountTxt: {
        fontFamily: "Metropolis",
        fontSize: 18,
        color: "#222222",
        fontWeight: "bold"
    },
    checkBtn:{
       marginHorizontal:15
    }

});
