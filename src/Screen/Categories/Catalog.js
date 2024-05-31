import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, FlatList, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { backIcon, searchIcon, filterIcon, priceFiter, sideBarIcon, orderImg, orderImg1, orderImg2, heartIcon, Shape, bg } from '../../assets';
import Scale from '../../Scale';
import { Rating } from 'react-native-ratings';

const Catalog = () => {
    const [search, setSearch] = useState("");
    const [txtInput, setTxtInput] = useState(false);
    const navigation = useNavigation();
    const menu = [
        { menuName: "T-shirts" },
        { menuName: "Crop tops" },
        { menuName: "Sleeveless" },
        { menuName: "Blouses" },

    ]
    const renderHeader = () => {
        return (
            <View>
                <View style={styles.backsearchImageView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={backIcon} style={styles.backImage} />
                    </TouchableOpacity>
                    {txtInput && (
                        <View style={styles.txtInputfield}>
                            <TextInput
                                placeholder='Search'
                                style={styles.txtInputt}
                                autoCapitalize='none'
                                keyboardType="default"
                                value={search}
                                onChangeText={text => setSearch(text)}
                            />
                        </View>
                    )}
                    <TouchableOpacity onPress={() => setTxtInput(!txtInput)}>
                        <Image source={searchIcon} style={styles.backImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headView}>
                    <Text style={styles.headTxt}>Women’s tops</Text>


                </View>
            </View>
        );
    };
    const renederNavMenu = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={styles.menuView}>
                    <Text style={styles.btnTxt}>{item.menuName}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const menuFlatlist = () => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                horizontal={true}
                data={menu}
                renderItem={renederNavMenu}
                keyExtractor={(item) => item.menuName}
            />
        )
    }
    const filteMenu = () => {
        return (
            <View style={styles.menuConatiner}>
                <TouchableOpacity style={styles.FiterView}>
                    <Image source={sideBarIcon} style={styles.backImage} />
                    <Text>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FiterView}>
                    <Image source={priceFiter} style={styles.backImage} />
                    <Text>Price: lowest to high</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={filterIcon} style={styles.backImage} />
                </TouchableOpacity>
            </View>
        )
    }
    const renderListData = () => {
        const data = [
            {
                image: orderImg,
                Name: "Pullover",
                subName: "Mango",
                totalAmount: "112$",
                icon: heartIcon
            },
            {
                image: orderImg1,
                date: "05-12-2019",
                Name: "Pullover",
                subName: "Mango",
                totalAmount: "112$",
                icon: heartIcon,
                bgImg: bg
            },
            {
                image: orderImg2,
                Name: "Pullover",
                subName: "Mango",
                totalAmount: "112$",
                icon: Shape,
                bgImg: bg
            },
            {
                image: orderImg,
                Name: "Pullover",
                subName: "Mango",
                totalAmount: "112$",
                icon: heartIcon,
                bgImg: bg
            },
        ];
        return (
            <View style={{ marginTop: Scale(10) }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => cardSecttion(item)}
                />
            </View>
        );
    };
    const cardSecttion = (item) => {
        return (
            <View>
                <View style={styles.cardContainer}>
                    <View>
                        <Image source={item.image} style={styles.cardImg} />
                    </View>
                    <View style={styles.cardContain}>
                        <View style={styles.txtView}>
                            <Text style={styles.productName}>{item.Name}</Text>
                            <Text style={styles.subTxt}>{item.subName}</Text>
                            <View style={styles.unitTxtView}>
                                <View>
                                    <Rating
                                        type='custom'
                                        ratingCount={5}
                                        imageSize={20}
                                        onFinishRating={this.ratingCompleted}
                                        defaultRating={0}
                                        onStartRating={0}
                                        style={styles.rating}
                                    />
                                </View>
                            </View>
                            <Text style={styles.price}>{item.totalAmount}</Text>
                            <View style={styles.iconView}>
                                <ImageBackground source={bg} style={styles.bgIcon}>
                                    <Image style={styles.icon} source={item.icon} />
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <ScrollView style={styles.mainContainer}>
            {renderHeader()}
            {menuFlatlist()}
            {filteMenu()}
            <View>
                {renderListData()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        backgroundColor: "#F9F9F9",
    },
    container: {
        marginHorizontal: 20
    },
    backsearchImageView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: Scale(16),
    },
    backImage: {
        height: Scale(30),
        width: Scale(20),
        resizeMode: "contain"
    },
    txtInputfield: {
        borderWidth: 1.5,
        height: Scale(35),
        width: Scale(300),
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
    headTxt: {
        color: "#222222",
        fontFamily: "Metropolis",
        fontWeight: "bold",
        fontSize: 34,

    },
    headView: {
        marginHorizontal: 20
    },
    menuView: {
        backgroundColor: "#222222",
        borderRadius: Scale(25),
        height: Scale(35),
        width: Scale(100),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20
    },
    btnTxt: {
        color: "#fff",
        fontFamily: "Metropolis",
        fontSize: 16,
    },
    menuConatiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginVertical: 20
    },
    FiterView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    cardContainer: {
        flexDirection: "row",
        borderRadius: 8,
        marginHorizontal: Scale(10),
        marginTop: Scale(20),
        marginBottom:20
    },
    cardContain: {
        backgroundColor: "#fff",
        height: Scale(120),
        width: Scale(300),

    },
    cardImg: {
        height: Scale(120),
        width: Scale(104),

    },
    txtView: {
        marginLeft: Scale(20),
        marginVertical: Scale(10)
    },
    productName: {
        fontFamily: "Metropolis",
        fontSize: 18,
        color: "#222222",
        fontWeight: "bold"
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
    iconView: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    icon: {
        height: 30,
        width: 30,
        resizeMode: "contain",
    },
    bgIcon: {
        height: 50,
        width: 30,
        justifyContent: "center",
        alignItems: "center"

    }
})
export default Catalog;

