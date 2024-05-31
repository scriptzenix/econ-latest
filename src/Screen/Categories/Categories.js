import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { backIcon, searchIcon, clothes, shoes, Neew, Accesories } from '../../assets';
import Scale from '../../Scale';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState('women');
    const [showCategoryList, setShowCategoryList] = useState(false);

    const categories = [
        { name: 'New', image: Neew },
        { name: 'Clothes', image: clothes },
        { name: 'Shoes', image: shoes },
        { name: 'Accesories', image: Accesories },
    ];

    const CategoryList = [
        { name: "Women’s tops" },
        { name: "Tops" },
        { name: "Shirts & Blouses" },
        { name: "Cardigans & Sweaters" },
        { name: "Knitwear" },
        { name: "Blazers" },
        { name: "Outerwear" },
        { name: "Pants" },
        { name: "Jeans" },
        { name: "Shorts" },
        { name: "Skirts" },
        { name: "Dresses" },
    ];

    const navigation = useNavigation();

    const renderHeader = () => (
        <View style={styles.headerView}>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <Image source={backIcon} style={styles.backIconImage} />
            </TouchableOpacity>
            <Text style={styles.categoriesText}>Categories</Text>
            <Image source={searchIcon} style={styles.backIconImage} />
        </View>
    );

    const renderCategories = () => (
        <View>
            <View style={styles.categoriesTextView}>
                <TouchableOpacity
                    onPress={() => setActiveCategory('women')}
                    style={[styles.categoryBox, { borderBottomColor: activeCategory === 'women' ? 'red' : '#f0f0f0' }]}
                >
                    <Text style={[styles.categoryText, { color: activeCategory === 'women' ? 'black' : 'grey' }]}>Women</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setActiveCategory('men')}
                    style={[styles.categoryBox, { borderBottomColor: activeCategory === 'men' ? 'red' : '#f0f0f0' }]}
                >
                    <Text style={[styles.categoryText, { color: activeCategory === 'men' ? 'black' : 'grey' }]}>Men</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setActiveCategory('kids')}
                    style={[styles.categoryBox, { borderBottomColor: activeCategory === 'kids' ? 'red' : '#f0f0f0' }]}
                >
                    <Text style={[styles.categoryText, { color: activeCategory === 'kids' ? 'black' : 'grey' }]}>Kids</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.saleBanner}>
                <Text style={styles.summerText}>SUMMER SALES</Text>
                <Text style={styles.upToText}>Up to 50% off</Text>
            </TouchableOpacity>
        </View>
    );

    const renderCategoryItem = ({ item }) => (
        <View style={styles.listView}>
            <View style={styles.listTextView}>
                <Text style={styles.listText}>{item.name}</Text>
            </View>
            <Image source={item.image} style={styles.listImage} />
        </View>
    );

    const renderCategoryList = ({ item }) => (
        <View>
            <TouchableOpacity style={styles.categoriestTextView} onPress={() => navigation.navigate('Catalog')}>
                <Text style={styles.categoriestText}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    );

    const categoriesFlatList = () => {
        return (
            showCategoryList && (
                <View>
                <Text style={styles.categoriesHeadTxt}>Choose category</Text>
                <FlatList
                style={styles.flatlistView}
                    showsVerticalScrollIndicator={false}
                    data={CategoryList}
                    renderItem={renderCategoryList}
                    keyExtractor={(item) => item.name}
                />
                </View>
            )
        );
    };

    return (
        <ScrollView style={styles.mainContainer}>
            {renderHeader()}
            {renderCategories()}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.name}
            />
            <TouchableOpacity style={styles.btnView} onPress={() => setShowCategoryList(!showCategoryList)}>
                <Text style={styles.btnTxt}>VIEW ALL ITEMS</Text>
            </TouchableOpacity>
            {categoriesFlatList()}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f9f9f9f9',
    },
    backIconImage: {
        resizeMode: 'contain',
        height: Scale(25),
        width: Scale(25),
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Scale(20),
        alignItems: 'center',
        backgroundColor: '#fff',
        height: Scale(40),
    },
    categoriesText: {
        fontSize: Scale(18),
        fontWeight: '600',
        color: 'black',
    },
    categoriesTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Scale(10),
        backgroundColor: '#ffff',
    },
    categoryBox: {
        height: Scale(40),
        width: Scale(150),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
    },
    categoryText: {
        fontSize: Scale(18),
        fontWeight: '500',
    },
    saleBanner: {
        height: Scale(110),
        width: Scale(385),
        backgroundColor: 'red',
        borderRadius: Scale(8),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Scale(20),
    },
    summerText: {
        color: '#fff',
        fontSize: Scale(24),
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    upToText: {
        fontSize: Scale(14),
        fontWeight: '600',
        color: '#ffff',
    },
    listView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: Scale(110),
        width: Scale(385),
        alignSelf: 'center',
        marginTop: Scale(20),
        alignItems: 'center',
    },
    listTextView: {
        backgroundColor: '#fff',
        borderTopLeftRadius: Scale(8),
        borderBottomLeftRadius: Scale(8),
        height: Scale(107),
        width: Scale(205),
        justifyContent: 'center',
        alignItems: 'center',
    },
    listImage: {
        height: Scale(107),
        width: Scale(180),
        borderTopRightRadius: Scale(8),
        borderBottomRightRadius: Scale(8),
    },
    listText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Metropolis',
        color: '#222222',
    },
    btnView: {
        height: Scale(50),
        width: Scale(370),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 30
    },
    btnTxt: {
        color: "#ffffff",
        fontSize: 16,
        fontFamily: 'Metropolis',
    },
    categoriesHeadTxt: {
        color: "#9B9B9B",
        fontSize: 16,
        fontFamily: 'Metropolis',

    },
    categoriestTextView: {
        backgroundColor: "#fff",
        height: Scale(50),
        borderBottomWidth: 1,
        borderColor: "#9B9B9B",
        justifyContent:"center"

    },
    categoriestText: {
        color: "#222222",
        fontSize: 16,
        fontFamily: 'Metropolis',
        marginHorizontal:20

    },
    flatlistView:{
        marginVertical:25
    }
});

export default Categories;
