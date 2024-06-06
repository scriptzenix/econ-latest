import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  shareIcon,
  backIcon,
  shortDress,
  shortDress1,
  downArrow,
  bg,
  heartIcon,
  forwardImg,
  product1,
  Tshirt,
} from "../../assets";
import Scale from "../../Scale";
import Header from "../../Components/Header";
import { AirbnbRating } from "react-native-ratings";
import ReadMore from "react-native-read-more-text";
import CustomButton from "../../Components/Button";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ProductCard = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  return (
    <ScrollView>
      <Header
        leftIcon={backIcon}
        rightIcon={shareIcon}
        headerTxt="ShortDress"
      />
      {renderListData()}
      {renderProductDetails(setOpen)}
      {renderFlatlist()}
      {renderModal(open, setOpen)}
    </ScrollView>
  );
};

const renderListData = () => {
  const data = [
    {
      image: shortDress,
    },
    {
      image: shortDress1,
    },
    {
      image: shortDress,
    },
  ];
  return (
    <View>
      <FlatList
        horizontal={true}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => renderImage(item)}
      />
    </View>
  );
};

const renderImage = (item) => {
  return (
    <View>
      <Image source={item.image} style={styles.listImage} />
    </View>
  );
};

const renderProductDetails = (setOpen) => {
  return (
    <View>
      <View style={styles.ContainerView}>
        <TouchableOpacity style={styles.sizeView} onPress={() => setOpen(true)}>
          <Text style={styles.sizeTxt}>Size</Text>
          <Image source={downArrow} style={styles.downIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeView}>
          <Text style={styles.sizeTxt}>Black</Text>
          <Image source={downArrow} style={styles.downIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBackground source={bg} style={styles.bgIcon}>
            <Image source={heartIcon} style={styles.likeIcon} />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.nameView}>
          <Text style={styles.brandName}>H&M</Text>
          <Text style={styles.brandName}>$19.99</Text>
        </View>
        <Text style={styles.dressName}>Short black dress</Text>
        <AirbnbRating
          count={5}
          defaultRating={3}
          size={20}
          reviews={false}
          ratingContainerStyle={styles.rating}
        />
        <View style={{ width: "100%" }}>
          <ReadMore numberOfLines={2} onReady={() => { }}>
            <Text style={styles.cardText}>
              <Text style={styles.Description}>
                Short dress in soft cotton jersey with decorative buttons down
                the front and a wide, frill-trimmed square neckline with
                concealed elastication. Elasticated seam under the bust and
                short puff sleeves with a small frill trim.
              </Text>
            </Text>
          </ReadMore>
        </View>
      </View>
      <View style={styles.btnView}>
        <CustomButton BtnName="ADD TO CART" />
      </View>
    </View>
  );
};

const renderFlatlist = () => {
  return (
    <View>
      <TouchableOpacity style={styles.boxView}>
        <Text style={styles.Txt}>Shipping info</Text>
        <Image source={forwardImg} style={styles.forwardIcon} />
      </TouchableOpacity>
      <View style={styles.boxView1}>
        <Text style={styles.Txt}>Support</Text>
        <Image source={forwardImg} style={styles.forwardIcon} />
      </View>
      <View style={styles.headView}>
        <Text style={styles.headerText}>You can also like this</Text>
        <Text style={styles.itemTxt}>4 item</Text>
      </View>
      {flatlist()}
    </View>
  );
};

const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.cardContainer}>
    <ImageBackground source={item.image} style={styles.cardImg}>
      <View style={styles.newTxtView}>
        <Text style={styles.newTxt}>{item.new}</Text>
      </View>
    </ImageBackground>
    <View>
      <AirbnbRating
        count={5}
        defaultRating={3}
        size={20}
        reviews={false}
        ratingContainerStyle={styles.rating}
      />
    </View>
    <Text style={styles.productName}>{item.derssName}</Text>
    <Text style={styles.derssSubName}>{item.derssSubName}</Text>
    <View style={styles.priceView}>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.disPrice}>{item.DiscountPrice}</Text>
    </View>
  </TouchableOpacity>
);

const flatlist = () => {
  const data = [
    {
      id: "1",
      image: product1,
      derssName: "Dorothy Perkins",
      derssSubName: "Evening Dress",
      price: "15$",
      DiscountPrice: "12$",
      new: "NEW",
    },
    {
      id: "2",
      image: Tshirt,
      derssName: "Dorothy Perkins",
      derssSubName: "Evening Dress",
      price: "15$",
      DiscountPrice: "12$",
      new: "NEW",
    },
    {
      id: "3",
      image: product1,
      derssName: "Dorothy Perkins",
      derssSubName: "Evening Dress",
      price: "15$",
      DiscountPrice: "12$",
      new: "NEW",
    },
    {
      id: "4",
      image: Tshirt,
      derssName: "Dorothy Perkins",
      derssSubName: "Evening Dress",
      price: "15$",
      DiscountPrice: "12$",
      new: "NEW",
    },
  ];
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const renderModal = (open, setOpen) => {
  return (
    <Modal
      animationType="slide"
      visible={open}
      transparent={true}
      onRequestClose={() => setOpen(false)}
    >
    <View
    style={styles.centeredView}
    activeOpacity={1}
    >
        <View style={styles.modalView}>
          <Text style={[styles.headerTxt,{marginTop:20}]}>Select size</Text>
          <View style={styles.modalBtnView}>
            <TouchableOpacity style={styles.SizeBtn}>
              <Text>XS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SizeBtn}>
              <Text>S</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SizeBtn}>
              <Text>M</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalBtnView1}>
          <TouchableOpacity style={styles.SizeBtn}>
          <Text>L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SizeBtn}>
        <Text>XL</Text>
      </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.infoBtn}>
          <Text style={styles.Txt}>Size info</Text>
          <Image source={forwardImg} style={styles.forwardIcon} />
        </TouchableOpacity>
        <View style={styles.customBtn}>
        <CustomButton BtnName="ADD TO CART" />
        </View>
        </View>
        
      </View>
    </Modal>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#f9f9f9",
    justifyContent: "space-between",
    paddingHorizontal: Scale(10),
    alignItems: "center",
    flexDirection: "row",
    height: Scale(60),
    shadowColor: "#9B9B9B",
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 15,
  },
  Icon: {
    height: Scale(26),
    width: Scale(26),
    resizeMode: "contain",
  },
  icons: {
    height: Scale(20),
    width: Scale(20),
    resizeMode: "contain",
  },
  headerTxt: {
    fontFamily: "Metropolis",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#222222",
    fontWeight: "bold",
  },
  listImage: {
    width: Scale(275),
    height: Scale(413),
    resizeMode: "contain",
  },
  downIcon: {
    height: Scale(16),
    width: Scale(16),
    resizeMode: "contain",
  },
  sizeTxt: {
    fontFamily: "Metropolis",
    fontSize: 14,
    color: "#222222",
  },
  sizeView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    width: Scale(138),
    height: Scale(40),
  },
  ContainerView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Scale(20),
  },
  bgIcon: {
    height: Scale(49),
    width: Scale(49),
    resizeMode: "contain",
  },
  likeIcon: {
    height: Scale(30),
    width: Scale(30),
    resizeMode: "contain",
    alignSelf:"center",
    marginTop:7
   
  },
  nameView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:10
  },
  brandName: {
    fontFamily: "Metropolis",
    fontSize: 18,
    lineHeight: 20,
    color: "#222222",
    fontWeight: "bold",
  },
  dressName: {
    color: "#9B9B9B",
    fontSize: Scale(15),
    marginTop: Scale(5),
    fontFamily: "Metropolis",
  },
  rating: {
    height: 30,
    alignSelf: "flex-start",
    marginTop: -5,
    marginVertical: 15,

  },
  cardText: {
    fontFamily: "Metropolis",
    fontSize: 14,
    lineHeight: 20,
    color: "#222222",
  },
  Description: {
    fontFamily: "Metropolis",
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.15000000596046448,
    color: "#222222",
  },
  btnView: {
    marginVertical: Scale(20),
    height: Scale(110),
    marginVertical: 10,
    backgroundColor: '#ffff',
    elevation: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 1,
      width: 1
    }

  },
  // boxView: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   padding: Scale(20),
  //   backgroundColor: "white",
  //   marginBottom: Scale(10),
  // },
  // boxView1: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   padding: Scale(20),
  //   backgroundColor: "white",
  //   marginBottom: Scale(10),
  //   marginTop: Scale(10),
  // },
  boxView: {
    height: Scale(50),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth:0.5,
    borderColor:"#9B9B9B",
    borderBottomWidth:0.5,

  },
  boxView1: {
    height: Scale(50),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor:"#9B9B9B",
    borderBottomWidth:0.5

  },
  Txt: {
    fontFamily: "Metropolis",
    fontSize: 18,
    lineheight: 16,
    color: "#222222",
    marginLeft:10
  },
  forwardIcon: {
    height:Scale(10),
    width:Scale(10),
    marginRight:10
  },
  headView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: Scale(20),
    backgroundColor: "white",
    marginTop: Scale(10),
  },
  headerText: {
    fontFamily: "Metropolis",
    fontSize: 16,
    lineHeight: 20,
    color: "#222222",
    fontWeight: "bold",
  },
  itemTxt: {
    fontFamily: "Metropolis",
    fontSize: 14,
    lineHeight: 20,
    color: "#9B9B9B",
  },
  cardContainer: {
    marginHorizontal: Scale(10),
    marginTop: Scale(20),
    marginBottom: Scale(30),

  },
  cardImg: {
    height: Scale(200),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  newTxtView: {
    position: "absolute",
    top: Scale(10),
    left: Scale(10),
    backgroundColor: "red",
    padding: Scale(5),
    borderRadius: Scale(5),
  },
  newTxt: {
    fontFamily: "Metropolis",
    fontSize: 12,
    lineHeight: 14,
    color: "white",
  },
  derssName: {
    fontFamily: "Metropolis",
    fontSize: 14,
    lineHeight: 20,
    color: "#222222",
    marginVertical: Scale(5),
  },
  productName:{
    fontFamily: "Metropolis",
    fontSize: 14,
    lineHeight: 20,
    color: "#9B9B9B",
    marginVertical: Scale(5),
  },
  derssSubName: {
    fontFamily: "Metropolis",
    fontSize: 13,
    lineHeight: 18,
    color: "#222222",
  },
  priceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Scale(5),
  },
  price: {
    fontFamily: "Metropolis",
    fontSize: 14,
    lineHeight: 20,
    color: "#222222",
    fontWeight: "bold",
  },
  disPrice: {
    fontFamily: "Metropolis",
    fontSize: 12,
    lineHeight: 18,
    color: "#DB3022",
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: Scale(14),
    color: "#9B9B9B",
    textDecorationLine: 'line-through',
    fontFamily: "Metropolis",

  },
  cardImg: {
    height: Scale(200),
    width: Scale(190),
    resizeMode: "contain",
    marginTop: Scale(10),
    flex: 1,
    
  },
  newTxtView: {
    backgroundColor: "#000",
    height: Scale(30),
    width: Scale(53),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Scale(10),
    marginTop: Scale(10)
  },
  newTxt: {
    color: "#fff"
  },
  headerText: {
    fontFamily: "Metropolis",
    fontSize: 18,
    color: "#222222",
    fontWeight: "bold",
    marginTop: 10,
  },
  headView: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", marginHorizontal: 10

  },
  priceView: {
    flexDirection: "row",
    gap: 10,
    marginTop: Scale(5)
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#F9F9F9',
    shadowColor: '#000',
    height: "40%",
    width: "99%",
paddingHorizontal:20,
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
  modalBtnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  SizeBtn: {
    height: Scale(40),
    width: Scale(100),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "9B9B9B",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBtnView1:{
    flexDirection: "row",
    gap:45,
    marginTop: 20
  },
  infoBtn:{
    // backgroundColor:"#ffff"
    flexDirection:"row",
    justifyContent:"space-between",
    borderTopWidth:0.5,
    borderBottomWidth:0.5,
    borderColor:"#9B9B9B",
    marginTop:50,
    height:Scale(50),
    alignItems:"center"
  },
  customBtn:{
    justifyContent:"flex-end",
    flex:1,
    marginBottom:30
  }
 
});
