import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity,TextInput, FlatList } from 'react-native';
import Scale from '../../Scale';
import { searchIcon, backIcon } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../Components/Button';
const MyOrder = () => {
    const [delivered, setDelivered] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [cancelled, setCancelled] = useState(false);
    const navigation = useNavigation();
    
    const orderDetails = [
        { 
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Delivered"

        },
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Delivered"

        },
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Delivered"

        },
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Delivered"

        },
    ];

    const orderDetailsProcessing = [
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Processing"
        },
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Processing"

        },
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Processing"

        },
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Processing"

        },
    ];

    const orderDetailsCancel = [
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Cancelled"
        },
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Cancelled"
        },
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Cancelled"
        },
        {
            orderNumber: "Order №1947034",
            date: "05-12-2019",
            trackingNumber: "IW763473247839",
            quantity: "3",
            totalAmount: "112$",
            details: "Details",
            delivered: "Cancelled"
        },
    ];
    const renderHeader = () => {
        const [Input, setInput] = useState(false);
        const [search, setSearch] = useState("");
        return (
            <View style={styles.mainView}>
            <View style={styles.backsearchImageView}
                >
            <TouchableOpacity style={styles.touchableOpacityView}  onPress={() => {
                navigation.goBack()
              }}>
            <Image source={backIcon} style={styles.backImage} />
          </TouchableOpacity>
            {Input &&(
                <View style={styles.txtInput}>
                    <TextInput
                        placeholder='Search'
                        style={styles.txtInputt}
                        autoCapitalize='none'
                        keyboardType="default"
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                    />
                </View>)}
            <TouchableOpacity onPress={() => setInput(!Input)} style={{alignSelf:Input?"center":"flex-end"}}>
                <Image source={searchIcon} style={styles.searchIcon}/>
            </TouchableOpacity>
        </View>

                <Text style={styles.myOrderText}>My Orders</Text>
            </View>
        );
    };

    const renderCategories = () => {
        return (
            <View style={styles.categoriesView} >
                <TouchableOpacity
                    style={[styles.touchablecategories, { backgroundColor: delivered ? "black" : "#f9f9f9" }]}
                    onPress={() => {
                        setDelivered(true);
                        setProcessing(false);
                        setCancelled(false);
                    }}
                >
                    <Text style={{ color: delivered ? "#ffff" : "black" }}>Delivered</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchablecategories, { backgroundColor: processing ? "black" : "#f9f9f9" }]}
                    onPress={() => {
                        setProcessing(true);
                        setDelivered(false);
                        setCancelled(false);
                    }}
                >
                    <Text style={{ color: processing ? "#fff" : "black" }}>Processing</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchablecategories, { backgroundColor: cancelled ? "black" : "#f9f9f9" }]}
                    onPress={() => {
                        setCancelled(true);
                        setDelivered(false);
                        setProcessing(false);
                    }}
                >
                    <Text style={{ color: cancelled ? "#fff" : "black" }}>Cancelled</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderOrderDetail = () => {
        const data = delivered ? orderDetails : (processing ? orderDetailsProcessing : orderDetailsCancel);
        return (
            <View style={{ flex: 1, marginTop: Scale(20) }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => orderDetailsList(item)}
                />
            </View>
        );
    };

    const orderDetailsList = (item) => {
        return (
            <View style={styles.orderDetailsListView}>
                <View style={styles.detailView}>
                    <View style={styles.textView}>
                        <Text style={styles.ordernoText}>{item.orderNumber}</Text>
                        <Text style={styles.orderDate}>{item.date}</Text></View>
                    <Text style={styles.trackingnoText}>Tracking number:<Text style={styles.trackingnoTextno}>  {item.trackingNumber}</Text></Text>
                    <View style={styles.textView}>
                        <Text style={styles.trackingnoText}>Quantity:<Text style={styles.trackingnoTextno}>  {item.quantity}</Text></Text>
                        <Text style={styles.trackingnoText}>Total Amount:<Text style={styles.trackingnoTextno}>  {item.totalAmount}</Text></Text>
                    </View>
                    <View style={styles.buttonView}>
                        <CustomButton 
                        BtnName={item.details} 
                        handlePress={() => navigation.navigate('OrderDetails')} 
                        btnStyle={styles.detailBtn}
                        textStyle={styles.details}
                        />
                        <Text style={styles.delivertTxt}>{item.delivered}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            {renderHeader()}
            {renderCategories()}
            {renderOrderDetail()}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    mainView: {
        marginHorizontal: Scale(15),
    },
    backsearchImageView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backImage: {
        height: Scale(30),
        width: Scale(25)
    },
    myOrderText: {
        fontSize: 34,
        color: "#222222",
        fontWeight: "700",
        // marginLeft: Scale(20),
        marginTop: Scale(20),
        fontFamily: "Metropolis",

    },
    categoriesView: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: Scale(25)
    },
    touchablecategories: {
        height: Scale(30),
        width: Scale(110),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Scale(50)
    },
    orderDetailsListView: {
        width: Scale(400),
        alignSelf: "center",
        height: Scale(170),
        borderRadius: Scale(8),
        backgroundColor: "#ffff",
        marginTop: Scale(15),
        shadowColor: "blue",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {
            height: 10,
            width: 10,
        },
        elevation: 3,
        marginBottom: 20
    },
    detailView: {
        marginHorizontal: 30,
        marginVertical: 20
    },
    textView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    ordernoText: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Metropolis",
        color: "#222222"
    },
    orderDate: {
        fontSize: Scale(14),
        color: "#9B9B9B",
        fontFamily: "Metropolis",

    },
    trackingnoText: {
        marginTop: Scale(10),
        fontSize: Scale(14),
        color: "#9B9B9B",
        fontFamily: "Metropolis",

    },
    trackingnoTextno: {
        fontWeight: "bold",
        fontSize: Scale(14),
        color: "#222222",
        fontFamily: "Metropolis",

    },
    buttonView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    detailBtn: {
        borderWidth: 1,
        borderRadius: 24,
        height: Scale(36),
        width: Scale(98),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"transparent"
    },
    delivertTxt: {
        color: "#2AA952",
        marginTop:20
    },
    txtInput: {
        borderWidth: 1.5,
        height: Scale(50),
        width: Scale(350),
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
    txtInputt: {
        marginLeft: 10
    },
    backImage: {
        height: Scale(30),
        width: Scale(20)
    },
    details:
    {
        fontSize: 14,
        fontFamily: "Metropolis",
        color: "#222222",
        fontWeight: "bold"
    },
    searchIcon: {
        height: Scale(40),
        width: Scale(18),
        resizeMode:"contain"
    },
    touchableOpacityView:{
        justifyContent:"flex-start",

    }

});

export default MyOrder;
