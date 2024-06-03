import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { shareIcon, backIcon, shortDress, shortDress1, downArrow, bg, heartIcon } from '../../assets'
import Scale from '../../Scale'
import Header from '../../Components/Header'
import { Rating } from 'react-native-ratings'
const ProductCard = () => {
  const navigation = useNavigation();
  
  return (
    <View>
    <Header leftIcon={backIcon} rightIcon={shareIcon} headerTxt="ShortDress" />
      {renderListData()}
      {renderProduuctDetails()}
    </View>
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
      <TouchableOpacity style={{ justifyContent:"center",
      alignItems:"center"}}>
      <ImageBackground source={bg} style={styles.bgIcon}>
      <Image source={heartIcon} style={styles.likeIcon}/>
      </ImageBackground>
      </TouchableOpacity>
    </View>
    <View style={{marginHorizontal:20}}>
    <View style={styles.nameView}>
    <Text style={styles.brandName}>H&M</Text>
    <Text style={styles.brandName}>$19.99</Text>
    </View>
    <Text>Short black dress</Text>
    <Rating
  showRating
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/>
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
    justifyContent:"space-around",
    marginTop:Scale(20)
  },
  bgIcon:{
    height:Scale(49),
    width:Scale(49),
    resizeMode:"contain",
    justifyContent:"center",
    alignItems:"center"
  },
  likeIcon:{
    height:Scale(35),
    width:Scale(35),
    resizeMode:"contain",
  },
  nameView:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  brandName:{
fontFamily: "Metropolis",
fontSize:Scale(24),
color:"#222222",
fontWeight:"bold"
  }
})