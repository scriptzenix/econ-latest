import { Image, ImageBackground, Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Fashionimg, image, product, Tshirt, product1 } from '../../assets';
import Scale from '../../Scale';
import { Rating } from 'react-native-ratings';
import { scheduleFlushOperations } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
export default function landingPage() {

    return (

        <ScrollView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.bgimage}>
                <Image source={Fashionimg} resizeMode='contain' style={styles.fImg} />
                <TouchableOpacity style={styles.checkBtn}>
                    <Text style={styles.checkBtnTxt}>Check</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.middleContainer}>
                <Text style={styles.txtNew}>New</Text>
                <TouchableOpacity style={styles.allTxtView}>
                    <Text style={styles.allTxt}>View all</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.subHeading}>You’ve never seen it before!</Text>
            <View>
                {flatist()}
            </View>
        </ScrollView>

    )

}
const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer}>
        <ImageBackground source={item.image} style={styles.cardImg} >
            <View style={styles.newTxtView}>
                <Text style={styles.newTxt}>{item.new}</Text>
            </View>
        </ImageBackground>
        <View>
            <Rating 
                type='custom'
                ratingCount={5}
                imageSize={20}
                onFinishRating={this.ratingCompleted}
                style={styles.rating}
            />
        </View>
        <Text style={styles.derssName}>{item.derssName}</Text>
        <Text style={styles.derssSubName}>{item.derssSubName}</Text>
        <View style={styles.priceView}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.disPrice}>{item.DiscountPrice}</Text>
        </View>
    </TouchableOpacity>

);
const flatist = () => {
    const data = [
        {
            image: product1,
            derssName: "Dorothy Perkins",
            derssSubName: "Evening Dress",
            price: "15$",
            DiscountPrice: "12$",
            new: "NEW"

        },
        {
            image: Tshirt,
            derssName: "Dorothy Perkins",
            derssSubName: "Evening Dress",
            price: "15$",
            DiscountPrice: "12$",
            new: "NEW"


        },
        {
            image: product,
            derssName: "Dorothy Perkins",
            derssSubName: "Evening Dress",
            price: "15$",
            DiscountPrice: "12$",
            new: "NEW"


        },
        {
            image: Tshirt,
            derssName: "Dorothy Perkins",
            derssSubName: "Evening Dress",
            price: "15$",
            DiscountPrice: "12$",
            new: "NEW"


        },
    ]
    return (
        <FlatList showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgimage: {
        flex: 1,
        justifyContent: 'center',
    },
    fImg: {
        height: Scale(150),
        width: Scale(230),
        marginTop: Scale(350),
        marginHorizontal: Scale(10)
    },
    checkBtnTxt: {
        fontSize: Scale(14),
        color: "#fff"
    },
    checkBtn: {
        backgroundColor: "red",
        height: Scale(38),
        width: Scale(160),
        borderRadius: Scale(25),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: Scale(10),
        marginBottom: Scale(20)
    },
    middleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: Scale(10),
        marginTop: Scale(20)
    },
    txtNew: {
        fontSize: Scale(50),
        color: "#222222",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "700"
    },
    allTxtView: {
        justifyContent: "center",
        alignItems: "center"
    },
    allTxt: {
        fontSize: Scale(17),
        color: "#222222"
    },
    subHeading: {
        color: "#9B9B9B",
        marginHorizontal: Scale(10),
        fontSize: Scale(18)
    },

    cardContainer: {
        marginHorizontal: Scale(10),
        marginTop: Scale(20),
        marginBottom:Scale(30),
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
    cardImg: {
        height: Scale(200),
        width: Scale(190),
        resizeMode: "contain",
        marginTop: Scale(10),
        flex:1,
       
    },
    rating: {
        alignSelf: "flex-start",
        marginTop: Scale(10),
    },
    priceView: {
        flexDirection: "row",
        gap: 10
    },
    derssName: {
        color: "#9B9B9B",
        fontSize: Scale(15),
        marginTop: Scale(5)

    },
    derssSubName: {
        fontSize: Scale(16),
        color: "#222222",
        marginTop: Scale(5)

    },
    disPrice:{
        fontSize:Scale(14),
        color:"#DB3022"
    },
    price:{
        fontSize:Scale(14),
        color:"#9B9B9B",
        textDecorationLine: 'line-through',
    }
    

});