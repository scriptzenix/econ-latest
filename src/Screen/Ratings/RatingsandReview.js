import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header';
import { backIcon, inActiveCheckBox, Myprofile, ActiveCheckBox, Photo } from '../../assets';
import { AirbnbRating } from 'react-native-ratings';
import Scale from '../../Scale';
import CustomButton from '../../Components/Button';

export default function RatingsandReview() {
  const [withPhoto, setWithPhoto] = useState(false);

  // Toggle the checkbox state
  const toggleCheckbox = () => {
    setWithPhoto(!withPhoto);
  };

  return (
    <ScrollView>
      {renderRating(toggleCheckbox, withPhoto)}
      {renderReview(withPhoto)}
      {renderReview(withPhoto)}
      {renderReviewBtn()}
    </ScrollView>
  );
}

const renderRating = (toggleCheckbox, withPhoto) => {
  return (
    <View>
      <Header leftIcon={backIcon} headerTxt="Rating and review" />
      <Text style={Styles.Headline}>Rating&Reviews</Text>
      <View style={Styles.mainView}>
        <View style={Styles.container}>
          <Text style={Styles.numberTxt}>4.3</Text>
          <Text>23 ratings</Text>
        </View>
        <View style={Styles.ratingView}>
          <AirbnbRating
            count={5}
            defaultRating={5}
            size={15}
            reviews={true}
            ratingContainerStyle={Styles.rating}
          />
          <AirbnbRating
            count={4}
            defaultRating={4}
            size={15}
            reviews={false}
            ratingContainerStyle={Styles.rating1}
          />
          <AirbnbRating
            count={3}
            defaultRating={3}
            size={15}
            reviews={false}
            ratingContainerStyle={Styles.rating2}
          />
          <AirbnbRating
            count={2}
            defaultRating={2}
            size={15}
            reviews={false}
            ratingContainerStyle={Styles.rating3}
          />
          <AirbnbRating
            count={1}
            defaultRating={1}
            size={15}
            reviews={false}
            ratingContainerStyle={Styles.rating4}
          />
        </View>
      </View>
      <View style={Styles.ratingNum}>
        <Text style={Styles.ratingTxt}>8 reviews</Text>
        <TouchableOpacity onPress={toggleCheckbox} style={Styles.imageView}>
          <Image source={withPhoto ? ActiveCheckBox : inActiveCheckBox} style={Styles.Icon} />
          <Text style={Styles.Description}>With photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderReview = (withPhoto) => {
  return (
    <View style={Styles.reviewView}>
      <View>
        <Image source={Myprofile} style={Styles.reviewImg} />
      </View>
      <View style={Styles.reviewTxt}>
        <View style={Styles.Txt}>
          <Text style={Styles.reviewName}>Helene Moore</Text>
          <AirbnbRating
            count={5}
            defaultRating={5}
            size={15}
            reviews={false}
            ratingContainerStyle={Styles.rating4}
          />
          <Text style={Styles.reviewDescription}>
            The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.
          </Text>
          {
            withPhoto && <Image source={Myprofile} style={Styles.reviewPhoto} />
          } 
        </View>
        <Text>Helpful</Text>
        <Image/>
      </View>
    </View>
  );
};
const renderReviewBtn=()=>{
  return(
    <View style={Styles.btnView}>
    <CustomButton BtnName="Write a review" btnStyle={Styles.reviewBtn}/>
    </View>
  )
}

const Styles = StyleSheet.create({
  Headline: {
    fontFamily: "Metropolis",
    fontSize: 30,
    color: "#222222",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 10
  },
  Txtinput: {
    width: Scale(100),
    backgroundColor: "red",
    height: Scale(8),
    borderRadius: 10,
    marginTop: -9,
  },
  ratingView: {
    marginTop: 15
  },
  mainView: {
    flexDirection: "row",
    height: Scale(95),
    width: Scale(330),
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 20,
  },
  rating: {
    height: 30,
    alignSelf: "flex-start",
    marginVertical: 15,
    marginTop: -35,
  },
  rating1: {
    height: 30,
    alignSelf: "flex-start",
    marginVertical: 10,
    marginTop: -30,
  },
  rating2: {
    height: 30,
    alignSelf: "flex-start",
    marginVertical: 10,
    marginTop: -25,
  },
  rating3: {
    height: 30,
    alignSelf: "flex-start",
    marginVertical: 10,
    marginTop: -20,
  },
  rating4: {
    height: 30,
    alignSelf: "flex-start",
    marginVertical: 10,
    marginTop: -20,
  },
  container: {
    marginBottom: 25
  },
  numberTxt: {
    fontFamily: "Metropolis",
    fontSize: 44,
    letterSpacing: -0.40799999237060547,
    color: "#222222",
    fontWeight: "bold",
  },
  Description: {
    fontFamily: "Metropolis",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.15000000596046448,
  },
  ratingNum: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20
  },
  imageView: {
    flexDirection: "row",
    alignItems: "center"
  },
  Icon: {
    width: Scale(19),
    height: Scale(19),
    marginRight: Scale(12),
  },
  ratingTxt: {
    fontFamily: "Metropolis",
    fontSize: 24,
    letterSpacing: -0.40799999237060547,
    color: "#222222",
    fontWeight: "bold"
  },
  reviewView: {
    flexDirection: "row",
    width: "90%",
    height: "auto",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginVertical: 20,
    gap: 30
  },
  reviewImg: {
    height: 32,
    width: 32,
    borderRadius: 20,
  },
  reviewTxt: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  Txt: {
    paddingHorizontal: 20,
    marginVertical:20
  },
  reviewName: {
    fontFamily: "Metropolis",
    fontSize: 14,
    color: "#222222",
    fontWeight: "bold"
  },
  reviewDescription: {
    fontFamily: "Metropolis",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.15000000596046448,
    color: "#222222"
  },
  reviewPhoto: {
    width: Scale(104),
    height: Scale(104),
    marginTop: 10,
  },
  reviewBtn:{
    height:Scale(36),
    width:Scale(128), 

   },
   btnView:{
    justifyContent:"flex-end",
    alignItems:"flex-end",
   }
});
