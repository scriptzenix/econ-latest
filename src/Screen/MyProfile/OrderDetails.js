import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { backIcon, searchIcon } from '../../assets';
import Scale from '../../Scale';
import { orderImg,orderImg1,orderImg2} from '../../assets';
import { useNavigation } from "@react-navigation/native"
export default function OrderDetails() {

 
  return (
    <View style={styles.mainContainer}>
      {renderHeader()}
      {renderOrderDetail()}
      {renderListData()}
      {orderInformation()}
    </View>
  )
}
const renderHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => {
        navigation.goBack();
      }}>
      <Image source={backIcon} style={styles.Icon} /></TouchableOpacity>
      <View>
        <Text style={styles.headerTxt}>Order Details</Text>
      </View>
      <TouchableOpacity><Image source={searchIcon} style={styles.Icon} /></TouchableOpacity>
    </View>
  );
};
const renderOrderDetail = () => {
  return (
    <View style={styles.orderDetailsView}>
      <View style={styles.orderView}>
        <Text style={styles.orderNoTxt}>Order №1947034</Text>
        <Text style={styles.dateTxt}>05-12-2019</Text>
      </View>
      <View style={styles.orderView}>
        <Text style={styles.trackingnoText}>Tracking number:<Text style={styles.trackingnoTextno}>  IW3475453455</Text></Text>
        <Text style={styles.delivertTxt}>Delivered</Text>
      </View>
      <Text style={styles.itemTxt}>3 items</Text>
    </View>
  )
}
const cardSecttion = (item) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image source={item.image} style={styles.cardImg}/>
      </View>
      <View style={styles.cardContain}>
        <View style={styles.txtView}>
          <Text style={styles.productName}>{item.Name}</Text>
          <Text style={styles.subTxt}>{item.subName}</Text>
          <View style={styles.sizeView}>
            <Text style={styles.subTxt}>Color: <Text style={{ color: "#222222" }}>{item.color}</Text></Text>
            <Text style={styles.subTxt}>Size: <Text style={{ color: "#222222" }}>{item.size}</Text></Text>
          </View>
          <View style={styles.unitTxtView}>
            <Text style={styles.subTxt}>Units: <Text style={{ color: "#222222" }}>{item.quantity}</Text></Text>
            <Text style={styles.price}>{item.totalAmount}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
const renderListData = () => {
  const data = [
    {
      image: orderImg,
      Name: "Pullover",
      subName: "Mango",
      color: "Gray",
      size: "L",
      quantity: "3",
      totalAmount: "112$",


    },
    {
      image: orderImg1,
      date: "05-12-2019",
      Name: "Pullover",
      subName: "Mango",
      color: "Gray",
      size: "L",
      quantity: "3",
      totalAmount: "112$",


    },
    {
      image: orderImg2,
      Name: "Pullover",
      subName: "Mango",
      color: "Gray",
      size: "L",
      quantity: "3",
      totalAmount: "112$",
    },
  ];
  return (
    <View style={{marginTop: Scale(20) }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => cardSecttion(item)}
      />
    </View>
  );
};
const orderInformation=()=>{
  return(
    <View>
    <Text style={styles.Txt}>Order information</Text>
    <View style={styles.informationView}>
    <Text>Shipping Address:</Text>
    <Text>3 Newbridge Court ,Chino Hills, 
    CA 91709, United States</Text>
    </View>
    <View style={styles.informationView}>
    <Text>Payment method:</Text>
    <Text>**** **** **** 3947</Text>
    </View>
    <View style={styles.informationView}>
    <Text>Delivery method:</Text>
    <Text>FedEx, 3 days, 15$</Text>
    </View>
    <View style={styles.informationView}>
    <Text>Discount:</Text>
    <Text>FedEx, 3 days, 15$</Text>
    </View>
    <View style={styles.informationView}>
    <Text>Total Amount:</Text>
    <Text>133$</Text>
    </View>
    <View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#f9f9f9",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: Scale(60),
  },
  Icon: {
    height: Scale(24),
    width: Scale(24),
  },
  headerTxt: {
    fontFamily: "Metropolis",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#222222",
    fontWeight: "bold"
  },
  mainContainer: {
  },
  orderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Scale(20),
    alignItems: "center"
  },
  orderNoTxt: {
    fontFamily: "Metropolis",
    fontSize: 18,
    color: "#222222",
    fontWeight: "bold"
  },
  dateTxt: {
    fontFamily: "Metropolis",
    fontSize: 16,
    color: "#9B9B9BB"
  },
  orderDetailsView: {
    marginTop: Scale(20)
  },
  trackingnoText: {
    marginTop: Scale(10),
    fontSize: 16,
    color: "#9B9B9B",
    fontFamily: "Metropolis",

  },
  trackingnoTextno: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222222",
    fontFamily: "Metropolis",
  },
  delivertTxt: {
    color: "#2AA952",
    justifyContent: "center",
  },
  itemTxt: {
    fontFamily: "Metropolis",
    fontSize: 16,
    color: "#222222",
    fontWeight: "bold",
    marginHorizontal: Scale(20),
    marginTop: Scale(10)
  },
  cardContainer: {
    flexDirection: "row",
    borderRadius: 8,
    marginHorizontal: Scale(10),
    marginTop: Scale(20)
  },
  cardImg: {
    height: Scale(104),
    width: Scale(104)
  },
  cardContain: {
    backgroundColor: "#fff",
    height: Scale(104),
    width: Scale(300),

  },
  sizeView: {
    flexDirection: "row",
    gap: 5
  },
  productName: {
    fontFamily: "Metropolis",
    fontSize: 18,
    color: "#222222",
    fontWeight: "bold"
  },
  txtView: {
    marginLeft: Scale(20),
    marginVertical: Scale(10)
  },
  subTxt: {
    fontFamily: "Metropolis",
    fontSize: 13,
    letterSpacing: -0.0015
  },
  unitTxtView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  price: {
    fontFamily: "Metropolis",
    fontSize: 16,
    marginRight: Scale(20),
    color: "#222222",
    fontWeight: "bold"
  },
  Txt:{
fontFamily: "Metropolis",
fontSize: 14,
lineHeight: 20,

  },
  informationView:{
    flexDirection:"row",
    justifyContent:"space-between"
  }


})