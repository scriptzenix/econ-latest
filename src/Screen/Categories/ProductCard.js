import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ImageBackground, ImageComponent, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { shareIcon, backIcon, shortDress, shortDress1, downArrow, bg, heartIcon,forwardImg} from '../../assets'
import Scale from '../../Scale'
import Header from '../../Components/Header'
import { Rating, AirbnbRating } from 'react-native-ratings'
import ReadMore from 'react-native-read-more-text';
import CustomButton from '../../Components/Button'
const ProductCard = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Header leftIcon={backIcon} rightIcon={shareIcon} headerTxt="ShortDress" />
      {renderListData()}
      {renderProduuctDetails()}
    </ScrollView>
  )
}

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
  )
}
const renderProduuctDetails = () => {
  return (
    <View>
      <View style={styles.ContainerView}>
        <TouchableOpacity style={styles.sizeView}>
          <Text style={styles.sizeTxt}>Size</Text>
          <Image source={downArrow} style={styles.downIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeView}>
          <Text style={styles.sizeTxt}>Black</Text>
          <Image source={downArrow} style={styles.downIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={{
          justifyContent: "center",
          alignItems: "center"
        }}>
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
        <View style={{width:"100%"}}>
         <ReadMore
         numberOfLines={2}
        
         onReady={this._handleTextReady}>
         <Text style={styles.cardText}>
         <Text style={styles.Description}>Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.</Text>
         </Text>
       </ReadMore>
         </View>
      </View>
      <View style={styles.btnView}>
      <CustomButton BtnName="ADD TO CART"/>
      <View style={styles.blankView}/>
      </View>
      <View style={styles.boxView}>
      <Text style={styles.Txt}>Shipping info</Text>
      <Image source={forwardImg} style={[styles.Icon,{tintColor:"#000"}]}/>
      </View>
      <View style={styles.boxView}>
      <Text style={styles.Txt}>Support</Text>
      <Image source={forwardImg} style={[styles.Icon,{tintColor:"#000"}]}/>
      </View>
    </View>
  )
}


export default ProductCard

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
    resizeMode: "contain"
  },
  icons: {
    height: Scale(20),
    width: Scale(20),
    resizeMode: "contain"
  },
  headerTxt: {
    fontFamily: "Metropolis",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#222222",
    fontWeight: "bold"
  },
  listImage: {
    width: Scale(275),
    height: Scale(413),
    resizeMode: "contain"
  },
  downIcon: {
    height: Scale(16),
    width: Scale(16),
    resizeMode: "contain"
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
    height: Scale(40)
  },
  ContainerView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Scale(20)
  },
  bgIcon: {
    height: Scale(49),
    width: Scale(49),
    resizeMode: "contain",
  },
  likeIcon: {
    height: Scale(35),
    width: Scale(35),
    resizeMode: "contain",
    alignSelf:"center",
    marginTop:4
  },
  nameView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  brandName: {
    fontFamily: "Metropolis",
    fontSize: Scale(24),
    color: "#222222",
    fontWeight: "bold"
  },
  rating: {
    height: 30,
    alignSelf:"flex-start",
    marginTop:-5,
  marginVertical:15

  },
  dressName: {
    fontFamily: "Metropolis",
    fontSize: Scale(15),
    color: "#9B9B9B"
  },
  Description:{
fontFamily: "Metropolis",
fontSize: 18,
lineHeight: 21,
letterSpacing: -0.15000000596046448,
color:"#222222",
  },
  btnView:{
    height:"25%",
    marginVertical:10,
    backgroundColor: '#ffff',
    elevation: 5,
    alignItems:"center",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height:1,
      width: 1
    }
  },
  blankView:{
    height:Scale(5),
    width:Scale(134),
    backgroundColor:"#000000",
    marginVertical:20,
    borderRadius:8
  },
  boxView:{
height:Scale(80),
flexDirection:"row",
justifyContent:"space-between",
backgroundColor:"#ffff",
alignItems:"center",
},
Txt:{
fontFamily: "Metropolis",
fontSize: 18,
lineheight: 16,
color:"#222222"
}
  
})