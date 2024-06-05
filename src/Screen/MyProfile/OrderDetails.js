import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { backIcon, searchIcon } from '../../assets';
import Scale from '../../Scale';
import { orderImg, orderImg1, orderImg2, masterCard } from '../../assets';
import { useNavigation } from "@react-navigation/native"
import CustomButton from '../../Components/Button';
export default function OrderDetails() {


  return (
    <ScrollView style={styles.mainContainer}>
      {renderHeader()}
      {renderOrderDetail()}
      {renderListData()}
      {orderInformation()}
    </ScrollView>
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
        <Text style={styles.headerTxt}>Order Details</Text>
      <TouchableOpacity>
      <Image source={searchIcon} style={styles.Icon} />
      </TouchableOpacity>
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
        <Image source={item.image} style={styles.cardImg} />
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
    <View style={{ marginTop: Scale(20) }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => cardSecttion(item)}
      />
    </View>
  );
};
const orderInformation = () => {
  return (
    <View>
      <Text style={styles.Txt}>Order information</Text>
      <View style={styles.informationView}>
      <View style={styles.informationsView}>
        <Text style={styles.leftTxt}>Shipping Address:</Text>
        </View>
        <View style={styles.addressInfromationView}>
          <Text style={styles.rightTxt}>3 Newbridge Court ,Chino Hills,CA 91709, United States</Text>
        </View>
      </View>
      <View style={styles.informationView}>
      <View style={styles.informationsView}>

        <Text style={styles.leftTxt}>Payment method:</Text>
        </View>

        <View style={styles.addressInfromationView}>
        <View style={styles.cardNoView}>

          <Image source={masterCard} style={styles.masterCardImg} />
          <Text style={styles.rightTxt}>**** **** **** 3947</Text>
        </View>
        </View>

      </View>
      <View style={styles.informationView}>
      <View style={styles.informationsView}>

        <Text style={styles.leftTxt}>Delivery method:</Text>
        </View>

        <View style={styles.addressInfromationView}>

          <Text style={styles.deliveryRightTxt}>FedEx, 3 days, 15$</Text>
        </View>
      </View>

      <View style={styles.informationView}>
      <View style={styles.informationsView}>

        <Text style={styles.leftTxt}>Discount:</Text>
        </View>

        <View style={styles.addressInfromationView}>

          <Text style={styles.discoutRightTxt}>10%, Personal promo code</Text>
        </View>
      </View>

      <View style={styles.informationView}>
      <View style={styles.informationsView}>

        <Text style={styles.leftTxt}>Total Amount:</Text>
      </View>
        
        <View style={styles.addressInfromationView}>

          <Text style={styles.amountRightTxt}>133$</Text>
        </View>

      </View>
      <View>
      </View>
      <View style={styles.btnView}>
        <CustomButton BtnName="Reorder" btnStyle={styles.reorderBtn} textStyle={styles.reorderBtnTxt}/>
        <CustomButton BtnName="Leave feedback" btnStyle={styles.feedbackBtn} textStyle={styles.feedbackBtnTxt}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#f9f9f9",
    justifyContent: "space-between",
    paddingHorizontal:Scale(10),
    alignItems: "center",
    flexDirection: "row",
    height: Scale(60),
      shadowColor: "#9B9B9B",
        shadowOpacity: 2,
        shadowRadius: 5,     
        elevation:15,
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
  Txt: {
    fontFamily: "Metropolis",
    fontSize: 20,
    lineHeight: 20,
    color: "#222222",
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 15
  },
  informationView: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginHorizontal:Scale(15)
  },
  leftTxt: {
    fontSize: 14,
    color: "#9B9B9B",
    fontFamily: "Metropolis",
  },
  rightTxt: {
    fontFamily: "Metropolis",
    fontSize: 14,
    color: "#222222",
    marginLeft:5,
    lineHeight:Scale(20)
  },
  cardNoView: {
    flexDirection: "row",
    width: Scale(270),
    alignItems:"center"
  },
  masterCardImg: {
    height: 24,
    width: 48
  },
  amountRightTxt: {
    fontFamily: "Metropolis",
    fontSize: 14,
    color: "#222222",
  },
  discoutRightTxt: {
    fontFamily: "Metropolis",
    fontSize: 14,
    color: "#222222",
  },
  deliveryRightTxt: {
    fontFamily: "Metropolis",
    fontSize: 14,
    color: "#222222",
  },
  reorderBtn: {
    borderWidth: 1,
    borderRadius: 24,
    width: 160,
    height: 36,
    // borderColor:"#222222",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"transparent"
  },
  feedbackBtn: {
    borderRadius: 24,
    width: 160,
    height: 36,
    backgroundColor: "#DB3033",
    alignItems: "center",
    justifyContent: "center",

  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30

  },
  reorderBtnTxt: {
    fontFamily: "Metropolis",
    fontSize: 18,
    color: "#222222",
  },
  feedbackBtnTxt: {
    fontFamily: "Metropolis",
    fontSize: 18,
    color: "#ffff",
  },
  informationsView:{
    width:Scale(157),
    marginTop:Scale(10),
  },
  addressInfromationView:{
    width: Scale(255),
    marginTop:Scale(10),
  }
})