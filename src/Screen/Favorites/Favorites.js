import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
  Modal,
  SafeAreaView
} from "react-native";
import { Rating } from "react-native-ratings";
import {
  leftArrowImage,
  vectorImage,
  crossButton,
  filter,
  grid,
  swap,
  rightArrowImage,
  searchIcon,
} from "../../assets"
import Scale from "../../Scale";

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      searchAndCatagoryText: false,
      textInputValue: "",
      range: 0,
      catagoryList: [
        { itemName: "Tops" },
        { itemName: "Shirts & Blouses" },
        { itemName: "Cardigans & Sweaters" },
        { itemName: "Knitwear" },
        { itemName: "Blazers" },
        { itemName: "Outerwear" },
        { itemName: "Pants" },
        { itemName: "Jeans" },
        { itemName: "Shorts" },
        { itemName: "Skirts" },
        { itemName: "Dresses" },
      ],
      saleCataloglist: [
        {
          images: require("../../Assets/Image.png"),
          name: "Black Jacket",
          theme: "Winter Wearable",
          newPrice: "12$",
          salePercent: "-65%",
        },
        {
          images: require("../../Assets/photo.png"),
          name: "White Top",
          theme: "Trunks Top",
          newPrice: "10$",
          cutPrice: "13$",
          salePercent: "-95%",
        },
        {
          images: require("../../Assets/Image.png"),
          name: "Brown Dress",
          theme: "Summer Dress",
          newPrice: "24$",
          cutPrice: "34$",
          salePercent: "-35%",
        },
        {
          images: require("../../Assets/Image.png"),
          name: "Red Yellow Dress",
          theme: "Summer Dress",
          newPrice: "21$",
          salePercent: "-15%",
        },
        {
          images: require("../../Assets/photo.png"),
          name: "Brown Red Dress",
          theme: "Party Dress",
          newPrice: "56$",
          cutPrice: "59$",
          salePercent: "-55%",
        },
      ],
      brandsWithCheckBox: [
        {
          brandname: "adidas",
          checkBoxInactive: require("../../Assets/inActiveCheckBox.png"),
          checkBoxActive: require("../../Assets/activeCheckBox.png"),
        },
        {
          brandname: "adidas Originals",
          checkBoxInactive: require("../../Assets/inActiveCheckBox.png"),
          checkBoxActive: require("../../Assets/activeCheckBox.png"),
        },
        {
          brandname: "Blend",
          checkBoxInactive: require("../../Assets/inActiveCheckBox.png"),
          checkBoxActive: require("../../Assets/activeCheckBox.png"),
        },
        {
          brandname: "Boutique Moschino",
          checkBoxInactive: require("../../Assets/inActiveCheckBox.png"),
          checkBoxActive: require("../../Assets/activeCheckBox.png"),
        },
        {
          brandname: "Champion",
          checkBoxInactive: require("../../Assets/inActiveCheckBox.png"),
          checkBoxActive: require("../../Assets/activeCheckBox.png"),
        },
        {
          brandname: "Diesel",
          checkBoxInactive: require("../../Assets/inActiveCheckBox.png"),
          checkBoxActive: require("../../Assets/activeCheckBox.png"),
        },
        {
          brandname: "Jack & Jones",
          checkBoxInactive: require("../../Assets/inActiveCheckBox.png"),
          checkBoxActive: require("../../Assets/activeCheckBox.png"),
        },
        {
          brandname: "Naf Naf",
          checkBoxInactive: require("../../Assets/inActiveCheckBox.png"),
          checkBoxActive: require("../../Assets/activeCheckBox.png"),
        },
        {
          brandname: "Red Valentino",
          checkBoxInactive: require("../../Assets/inActiveCheckBox.png"),
          checkBoxActive: require("../../Assets/activeCheckBox.png"),
        },
        {
          brandname: "s.Oliver",
          checkBoxInactive: require("../../Assets/inActiveCheckBox.png"),
          checkBoxActive: require("../../Assets/activeCheckBox.png"),
        },
      ],
      sortModalVisibility: false,
      popular: false,
      newest: false,
      customerReview: false,
      lowToHigh: false,
      highToLow: false,
      colorBlack: false,
      colorWhite: false,
      colorRed: false,
      colorGray: false,
      colorYellow: false,
      colorBlue: false,
      sizeXS: false,
      sizeS: false,
      sizeM: false,
      sizeL: false,
      sizeXL: false,
      catagoryAll: false,
      catagoryMen: false,
      catagoryWomen: false,
      catagoryBoys: false,
      catagoryGirls: false,
      discard: false,
      apply: false,
      discardBrand: false,
      applyBrand: false,
      low: 0,
      high: 100,
      filterVisibility: false,
      brandModalVisibility: false,
      checkBox: false,
    };
  }

  searchHeader = () => {
    return (
        <View style={styles.searchHeaderMainView}>
            <View style={styles.searchHeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image source={leftArrowImage} style={styles.leftArrowImageStyle} />
                </TouchableOpacity>
                {this.state.searchAndCatagoryText ?
                    <TouchableWithoutFeedback onPress={() => this.setState({ searchAndCatagoryText: false })}><TextInput placeholder='Search here' placeholderTextColor={"#000"} value={this.state.textInputValue} onChangeText={(text) => this.setState({ textInputValue: text })} style={styles.searchBar} /></TouchableWithoutFeedback>
                    :
                    <Text style={styles.catagoryText}>Favorites</Text>}
                <TouchableOpacity onPress={() => this.setState({ searchAndCatagoryText: !this.state.searchAndCatagoryText, textInputValue: "" })}>
                    {this.state.searchAndCatagoryText ? <Image source={crossButton} style={styles.leftArrowImageStyle} /> : <Image source={vectorImage} style={styles.leftArrowImageStyle} />}
                </TouchableOpacity>
            </View>
        </View>
    )
}

catagoryListFlatlist = () => {
    return (
        <View style={styles.catagoryListFlatlistView}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.catagoryList}
                renderItem={({ item }) => this.rendercatagoryListFlatlist(item)}
            />
        </View>
    )
}

 
rendercatagoryListFlatlist = (item) => {
    return (
        <TouchableOpacity style={styles.cataListStyle}>
            <Text style={styles.textCatagoryList}>{item.itemName}</Text>
        </TouchableOpacity>
    )
}

sortBar = () => {
    return (
        <View style={styles.sortBarMainView}>
            <View style={styles.sortBarView}>
                <TouchableOpacity onPress={() => this.setState({ sortModalVisibility: !this.state.sortModalVisibility })} style={styles.sortBarImageAndText}>
                    <Image source={filter} style={styles.sortBarStyle} />
                    <Text style={styles.sortBarTextStyle}>Filters</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sortBarImageAndText}>
                    <Image source={swap} style={styles.sortBarStyle} />
                    <Text style={styles.sortBarTextStyle}>Price:Lowest to high</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.setState({ filterVisibility: !this.state.filterVisibility })}>
                    <Image source={grid} style={styles.sortBarStyle} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

renderSaleCatalog = () => {
    return (
        <ScrollView style={styles.renderNewCatalogView} showsVerticalScrollIndicator={false}>
            <FlatList
            showsVerticalScrollIndicator={false}
                numColumns={2}
                data={this.state.saleCataloglist}
                renderItem={({ item }) => this.renderSaleCatalogList(item)}
            />
        </ScrollView>
    )
}

renderSaleCatalogList = (item) => {
    return (
        <TouchableOpacity style={styles.renderNewCatalogViewList}>
            <ImageBackground source={item.images} style={styles.imageBgForNewCatalog}>
                {item.cutPrice ? <View style={styles.salePatch}>
                    <Text style={styles.newPatchColor}>{item.salePercent}</Text>
                </View> : ""}
            </ImageBackground>
            <View style={styles.ratingAndText}>
                <Rating
                    type='star'
                    ratingColor='#FFBA49'
                    ratingBackgroundColor='pink'
                    ratingCount={5}
                    imageSize={14}
                    onFinishRating={this.ratingCompleted}
                    defaultRating={0}
                    onStartRating={0}
                />
                <Text>{`(${10})`}</Text>

            </View>
            <Text style={styles.clothName}>{item.name}</Text>
            <Text style={styles.themeName}>{item.theme}</Text>
            <View style={styles.cutAndNewPrice}>
                <Text style={styles.cutPriceName}>{item.cutPrice}</Text>
                <Text style={item.cutPrice ? styles.newPriceName : styles.cutPriceName02}>{item.newPrice}</Text>
            </View>
        </TouchableOpacity>
    )

}


sortModal = () => {
    return (
        <Modal
            visible={this.state.sortModalVisibility}
            transparent={true}
            animationType="slide"
        >

            <View style={styles.ModalMainView}>
                <TouchableOpacity onPress={() => this.setState({ sortModalVisibility: !this.state.sortModalVisibility, popular: false, newest: false, customerReview: false, lowToHigh: false, highToLow: false })} style={styles.upperTransparentModal}>
                </TouchableOpacity>

                <View style={styles.lowerModal}>
                    <View style={styles.dash}></View>
                    <Text style={styles.sortedByText}>Sort by</Text>

                    <TouchableOpacity onPress={() => this.setState({ popular: !this.state.popular, newest: false, customerReview: false, lowToHigh: false, highToLow: false })} style={this.state.popular ? styles.popularStyleRed : styles.popularStyle}>
                        <Text style={this.state.popular ? styles.popularTextWhite : styles.popularText}>Popular</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ newest: !this.state.newest, popular: false, customerReview: false, lowToHigh: false, highToLow: false })} style={this.state.newest ? styles.popularStyleRed : styles.popularStyle}>
                        <Text style={this.state.newest ? styles.popularTextWhite : styles.popularText}>Newest</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ customerReview: !this.state.customerReview, popular: false, newest: false, lowToHigh: false, highToLow: false })} style={this.state.customerReview ? styles.popularStyleRed : styles.popularStyle}>
                        <Text style={this.state.customerReview ? styles.popularTextWhite : styles.popularText}>Customer review</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ lowToHigh: !this.state.lowToHigh, popular: false, newest: false, customerReview: false, highToLow: false })} style={this.state.lowToHigh ? styles.popularStyleRed : styles.popularStyle}>
                        <Text style={this.state.lowToHigh ? styles.popularTextWhite : styles.popularText}>Price: lowest to high</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ highToLow: !this.state.highToLow, popular: false, newest: false, customerReview: false, lowToHigh: false })} style={this.state.highToLow ? styles.popularStyleRed : styles.popularStyle}>
                        <Text style={this.state.highToLow ? styles.popularTextWhite : styles.popularText}>Price : highest to low</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    )
}

filterModal = () => {
    return (
        <Modal
            visible={this.state.filterVisibility}
            transparent={true}
            animationType="slide"
        >
            <View style={styles.filterModalMainView}>
                {this.headerModal()}
                {this.renderSlider()}
                {this.colorPicker()}
                {this.filterSizes()}
                {this.filterCatagory()}
                {this.selectBrands()}
                {this.applyAndDiscart()}
            </View>
        </Modal>
    )
}
headerModal = () => {
    return (
        <View style={styles.searchHeaderMainView}>
            <View style={styles.searchHeaderView}>
                <TouchableOpacity onPress={() => this.setState({ filterVisibility: false })}>
                    <Image source={leftArrowImage} style={styles.leftArrowImageStyle} />
                </TouchableOpacity>
                {this.state.searchAndCatagoryText ?
                    <TouchableWithoutFeedback onPress={() => this.setState({ searchAndCatagoryText: false })}><TextInput placeholder='Search here' placeholderTextColor={"#000"} value={this.state.textInputValue} onChangeText={(text) => this.setState({ textInputValue: text })} style={styles.searchBar} /></TouchableWithoutFeedback>
                    :
                    <Text style={styles.filterModalText}>Filter</Text>}
                <View>
                </View>
            </View>
        </View>
    )
}
colorPicker = () => {
    return (
        <View>
            <Text style={styles.colorSelectText}>Colors</Text>
            <View style={styles.colorBundleView}>
                <View style={styles.colorsBundle}>
                    <View style={[{ padding: Scale(4) }, this.state.colorBlack && styles.colorBorderView]}>
                        <TouchableOpacity onPress={() => this.setState({ colorBlack: !this.state.colorBlack })} style={[styles.colorCodeBlack]}>
                        </TouchableOpacity>
                    </View>

                    <View style={[{ padding: Scale(4) }, this.state.colorWhite && styles.colorBorderView]}>
                        <TouchableOpacity onPress={() => this.setState({ colorWhite: !this.state.colorWhite })} style={styles.colorCodeWhite}>
                        </TouchableOpacity>
                    </View>

                    <View style={[{ padding: Scale(4) }, this.state.colorRed && styles.colorBorderView]}>
                        <TouchableOpacity onPress={() => this.setState({ colorRed: !this.state.colorRed })} style={styles.colorCodeRed}>
                        </TouchableOpacity>
                    </View>

                    <View style={[{ padding: Scale(4) }, this.state.colorGray && styles.colorBorderView]}>
                        <TouchableOpacity onPress={() => this.setState({ colorGray: !this.state.colorGray })} style={styles.colorCodeGray}>
                        </TouchableOpacity>
                    </View>

                    <View style={[{ padding: Scale(4) }, this.state.colorYellow && styles.colorBorderView]}>
                        <TouchableOpacity onPress={() => this.setState({ colorYellow: !this.state.colorYellow })} style={styles.colorCodeYellow}>
                        </TouchableOpacity>
                    </View>

                    <View style={[{ padding: Scale(4) }, this.state.colorBlue && styles.colorBorderView]}>
                        <TouchableOpacity onPress={() => this.setState({ colorBlue: !this.state.colorBlue })} style={styles.colorCodeBlue}>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}
filterSizes = () => {
    return (
        <View>
            <Text style={styles.colorSelectText}>Sizes</Text>
            <View style={styles.colorBundleView}>
                <View style={styles.sizeBundle}>
                    <TouchableOpacity onPress={() => this.setState({ sizeXS: !this.state.sizeXS })} style={[styles.selectSizes, this.state.sizeXS && { backgroundColor: "red", borderWidth: 0 }]}>
                        <Text style={[styles.filterSizeText, this.state.sizeXS && { color: "#FFFFFF" }]}>XS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ sizeS: !this.state.sizeS })} style={[styles.selectSizes, this.state.sizeS && { backgroundColor: "red", borderWidth: 0 }]}>
                        <Text style={[styles.filterSizeText, this.state.sizeS && { color: "#FFFFFF" }]}>S</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ sizeM: !this.state.sizeM })} style={[styles.selectSizes, this.state.sizeM && { backgroundColor: "red", borderWidth: 0 }]}>
                        <Text style={[styles.filterSizeText, this.state.sizeM && { color: "#FFFFFF" }]}>M</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ sizeL: !this.state.sizeL })} style={[styles.selectSizes, this.state.sizeL && { backgroundColor: "red", borderWidth: 0 }]}>
                        <Text style={[styles.filterSizeText, this.state.sizeL && { color: "#FFFFFF" }]}>L</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ sizeXL: !this.state.sizeXL })} style={[styles.selectSizes, this.state.sizeXL && { backgroundColor: "red", borderWidth: 0 }]}>
                        <Text style={[styles.filterSizeText, this.state.sizeXL && { color: "#FFFFFF" }]}>XL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
filterCatagory = () => {
    return (
        <View>
            <Text style={styles.colorSelectText}>Catagory</Text>
            <View style={styles.colorBundleView}>
                <View style={styles.sizeBundle}>
                    <TouchableOpacity onPress={() => this.setState({ catagoryAll: !this.state.catagoryAll })} style={[styles.selectCatagoryFilter, { marginBottom: Scale(12) }, this.state.catagoryAll && { backgroundColor: "red", borderWidth: 0 }]}>
                        <Text style={[styles.filterSizeText, this.state.catagoryAll && { color: "#FFFFFF" }]}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ catagoryWomen: !this.state.catagoryWomen })} style={[styles.selectCatagoryFilter, { marginBottom: Scale(12) }, this.state.catagoryWomen && { backgroundColor: "red", borderWidth: 0 }]}>
                        <Text style={[styles.filterSizeText, this.state.catagoryWomen && { color: "#FFFFFF" }]}>Women</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ catagoryMen: !this.state.catagoryMen })} style={[styles.selectCatagoryFilter, { marginBottom: Scale(12) }, this.state.catagoryMen && { backgroundColor: "red", borderWidth: 0 }]}>
                        <Text style={[styles.filterSizeText, this.state.catagoryMen && { color: "#FFFFFF" }]}>Men</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ catagoryBoys: !this.state.catagoryBoys })} style={[styles.selectCatagoryFilter, this.state.catagoryBoys && { backgroundColor: "red", borderWidth: 0 }]}>
                        <Text style={[styles.filterSizeText, this.state.catagoryBoys && { color: "#FFFFFF" }]}>Boys</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ catagoryGirls: !this.state.catagoryGirls })} style={[styles.selectCatagoryFilter, this.state.catagoryGirls && { backgroundColor: "red", borderWidth: 0 }]}>
                        <Text style={[styles.filterSizeText, this.state.catagoryGirls && { color: "#FFFFFF" }]}>Girls</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
selectBrands = () => {
    return (
        <TouchableOpacity style={styles.selectBrandsTouch} onPress={() => this.setState({ brandModalVisibility: !this.state.brandModalVisibility })}>
            <View style={styles.BrandTextAndRightArrowImage}>
                <Text style={styles.colorSelectText}>Brands</Text>
                <Image source={rightArrowImage} style={styles.rightArrowImageStyle} />
            </View>
            <Text style={styles.brandsNameExample}>addidas Original, Jack & Jones, Oliver</Text>
        </TouchableOpacity>
    )
}

applyAndDiscart = () => {
    return (
        <View style={styles.applyDiscardMainView}>
            <View style={styles.applyDiscardView}>
                <TouchableOpacity onPress={() => this.setState({ discard: !this.state.discard, filterVisibility: false })} style={[styles.applyDiscard, this.state.discard && { backgroundColor: "red", borderWidth: 0 }]}>
                    <Text style={[styles.discardApplyText, this.state.discard && { color: "#FFFFFF" }]}>Discard</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.setState({ apply: !this.state.apply, filterVisibility: false })} style={[styles.applyDiscard, this.state.apply && { backgroundColor: "red", borderWidth: 0 }]}>
                    <Text style={[styles.discardApplyText, this.state.apply && { color: "#FFFFFF" }]}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
renderSlider = () => {
    return (
       <View style={{flex:1}}>
       </View>
    )
}

brandSelectModal = () => {
    return (
        <SafeAreaView>
            <Modal
                visible={this.state.brandModalVisibility}
                animationType="slide"
                transparent={true}>
                <View style={styles.brandSelectModalView}>
                    {this.headerModalBrand()}
                    {this.brandSearchBar()}
                    {this.brandList()}
                    {this.applyAndDiscartBrand()}
                </View>
            </Modal>
        </SafeAreaView>
    )
}


applyAndDiscartBrand = () => {
    return (
        <View style={styles.applyDiscardMainView}>
            <View style={styles.applyDiscardView}>
                <TouchableOpacity onPress={() => this.setState({ discardBrand: !this.state.discardBrand, brandModalVisibility: false })}
                    style={[styles.applyDiscard, this.state.discardBrand && { backgroundColor: "red", borderWidth: 0 }]}>
                    <Text style={[styles.discardApplyText, this.state.discardBrand && { color: "#FFFFFF" }]}>Discard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ applyBrand: !this.state.applyBrand, brandModalVisibility: false })}
                    style={[styles.applyDiscard, this.state.applyBrand && { backgroundColor: "red", borderWidth: 0 }]}>
                    <Text style={[styles.discardApplyText, this.state.applyBrand && { color: "#FFFFFF" }]}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


headerModalBrand = () => {
    return (
        <View style={styles.searchHeaderMainView}>
            <View style={styles.searchHeaderView}>
                <TouchableOpacity onPress={() => this.setState({ brandModalVisibility: false })}>
                    <Image source={leftArrowImage} style={styles.leftArrowImageStyle} />
                </TouchableOpacity>
                <Text style={styles.filterModalText}>Brand</Text>
                <View>
                </View>
            </View>
        </View>
    )
}
brandSearchBar = () => {
    return (
        <View style={styles.brandSearchBarView}>
            <Image source={searchIcon} style={styles.brandSearchImageStyle} />
            <TextInput placeholder="Search" style={styles.TextInputBrandSearchBar} />
        </View>
    )
}


brandList = () => {
    return (
        <View style={styles.brandListMainView}>
            <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
                data={this.state.brandsWithCheckBox}
                renderItem={({ item }) => this.renderBrandListWithCheckBox(item)}
            />
        </View>
    )
}


renderBrandListWithCheckBox = (item) => {
    return (
        <View style={styles.renderBrandListWithCheckBoxViewStyle}>
            <Text style={[styles.brandText, this.state.checkBox && { color: "#DB3022", fontWeight: "700" }]}>{item.brandname}</Text>
            <TouchableOpacity onPress={() => this.setState({ checkBox: !this.state.checkBox })}>
                {this.state.checkBox ? <Image source={item.checkBoxActive} style={styles.checkBoxStyle} /> : <Image source={item.checkBoxInactive} style={styles.checkBoxStyle} />}
            </TouchableOpacity>
        </View>
    )
}
render() {

    return (
        <View style={styles.mainContainer}>
            {this.searchHeader()}
            {this.catagoryListFlatlist()}
            {this.sortBar()}
            {this.renderSaleCatalog()}
            {this.sortModal()}
            {this.filterModal()}
            {this.brandSelectModal()}
        </View>
    )
}
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    searchHeaderMainView: {
        backgroundColor: '#FFFFFF',
    },
    searchHeaderView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Scale(8),
        backgroundColor: '#FFFFFF',
        // paddingVertical: Scale(11),
        height: Scale(50),
        alignItems: "center",
    },
    leftArrowImageStyle: {
        width: Scale(24),
        height: Scale(24),
        resizeMode: "contain",
    },
    searchBar: {
        borderWidth: 1,
        height: Scale(37),
        width: Scale(300),
        borderRadius: Scale(20),
        padding: Scale(10),
        color: '#000000'
    },
    catagoryText: {
        fontSize: 18,
        fontFamily: 'Metropolis',
        fontWeight: '600',
        color: "#222222",
    },
    cataListStyle: {
        borderWidth: 1,
        borderRadius: Scale(20),
        paddingVertical: Scale(8),
        paddingHorizontal: Scale(12),
        marginRight: Scale(7),
        backgroundColor: "#222222",
    },
    catagoryListFlatlistView: {
        marginLeft: Scale(16),
        marginTop: Scale(10),
    },
    textCatagoryList: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: 'Metropolis',
    },
    sortBarStyle: {
        resizeMode: "cover",
        width: Scale(24),
        height: Scale(24),
    },
    sortBarView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Scale(16),
        marginTop: Scale(18),
        backgroundColor: "#F9F9F9",
        paddingVertical: Scale(10),
    },
    sortBarImageAndText: {
        flexDirection: 'row',
        alignItems: "center",
    },
    sortBarTextStyle: {
        color: "#222222",
        fontSize: 11,
        fontFamily: "Metropolis",
        marginLeft: Scale(6),
    },
    renderNewCatalogView: {
        marginHorizontal: Scale(34),
        marginTop: Scale(22),
    },
    renderNewCatalogViewList: {
        backgroundColor: "#FFFFFF",
        marginRight: Scale(30),
        height: Scale(300),
        width: Scale(165),
        marginTop: Scale(10),
    },
    imageBgForNewCatalog: {
        width: Scale(162),
        height: Scale(184),
        resizeMode: "contain",
        borderRadius: Scale(20)
    },
    salePatch: {
        width: Scale(40),
        height: Scale(24),
        borderRadius: Scale(25),
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: Scale(8),
        marginVertical: Scale(8),
    },
    newPatchColor: {
        color: "#FFFFFF",
        fontSize: 11,
        fontFamily: 'Metropolis',
    },
    ratingAndText: {
        flexDirection: "row",
    },
    clothName: {
        fontSize: 11,
        fontFamily: 'Metropolis',
        color: "#9B9B9B",
    },
    themeName: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Metropolis",
        color: "#222222",
    },
    cutAndNewPrice: {
        flexDirection: 'row',
    },
    cutPriceName: {
        fontSize: 14,
        color: '#9B9B9B',
        fontWeight: '500',
        textDecorationLine: 'line-through',
    },
    cutPriceName02: {
        fontSize: 14,
        color: '#222222',
        fontWeight: '500',
        marginLeft: Scale(4),
    },
    newPriceName: {
        fontSize: 14,
        color: '#DB3022',
        fontWeight: '500',
        marginLeft: Scale(4),
    },
    sortBarMainView: {
        shadowOffset: { width: 2, height: 10 },
        shadowColor: '#222222',
        shadowOpacity: 1,
        elevation: 10
    },
    upperTransparentModal: {
        height: Scale(460),
    },
    popularStyle: {
        height: Scale(48), justifyContent: "center", width: "100%",
    },
    popularStyleRed: {
        height: Scale(48), justifyContent: "center", width: "100%", backgroundColor: "#DB3022",
    },
    popularText: {
        color: '#222222', fontSize: 16, fontFamily: 'Metropolis', fontWeight: '600', marginLeft: Scale(16),
    },
    popularTextWhite: {
        color: '#FFFFFF', fontSize: 16, fontFamily: 'Metropolis', fontWeight: '600', marginLeft: Scale(16),
    },
    lowerModal: { backgroundColor: "#FFFFFF", flex: 1, borderTopLeftRadius: Scale(30), borderTopRightRadius: Scale(30), alignItems: "center", },
    dash: { width: Scale(60), height: Scale(6), backgroundColor: "#9B9B9B", marginTop: Scale(14), borderRadius: Scale(3) },
    sortedByText: { fontSize: 18, color: "#222222", fontFamily: "Metropolis", fontWeight: "800", alignSelf: 'center', marginTop: Scale(16) },
    ModalMainView: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)" },
    colorSelectText: {
        fontSize: 16,
        fontFamily: "Metropolis",
        fontWeight: '700',
        color: "#222222",
        marginHorizontal: Scale(16),
        marginVertical: Scale(14),
    },
    colorCodeBlack: {
        width: Scale(44),
        height: Scale(44),
        backgroundColor: "#020202",
        borderRadius: Scale(30),
        borderColor: 'red',
        padding: Scale(4),
    },
    colorCodeWhite: {
        width: Scale(44),
        height: Scale(44),
        backgroundColor: "#F6F6F6",
        borderRadius: Scale(30),
    },
    colorCodeRed: {
        width: Scale(44),
        height: Scale(44),
        backgroundColor: "#B82222",
        borderRadius: Scale(30),
    },
    colorCodeGray: {
        width: Scale(44),
        height: Scale(44),
        backgroundColor: "#BEA9A9",
        borderRadius: Scale(30),
    },
    colorCodeYellow: {
        width: Scale(44),
        height: Scale(44),
        backgroundColor: "#E2BB8D",
        borderRadius: Scale(30),
    },
    colorCodeBlue: {
        width: Scale(44),
        height: Scale(44),
        backgroundColor: "#151867",
        borderRadius: Scale(30),
    },
    colorsBundle: {
        marginHorizontal: Scale(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: Scale(24),
    },
    sizeBundle: {
        marginHorizontal: Scale(16),
        paddingVertical: Scale(24),
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    colorBundleView: {
        backgroundColor: "#FFFFFF",
    },
    colorBorderView: { borderWidth: 1, borderColor: "red", borderRadius: Scale(30) },
    filterModalMainView: { backgroundColor: "#F9F9F9", flex: 1 },
    filterModalText: {
        fontSize: 18,
        fontFamily: "Metropolis",
        fontWeight: "700",
        color: "#222222",
        marginRight: Scale(10),
    },
    selectSizes: {
        width: Scale(40),
        height: Scale(40),
        borderColor: "#C7C7C7",
        borderRadius: Scale(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginRight: Scale(16),
    },
    selectCatagoryFilter: {
        width: Scale(100),
        height: Scale(40),
        borderColor: "#C7C7C7",
        borderRadius: Scale(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginRight: Scale(22),
    },
    filterSizeText: {
        color: "#222222",
        fontSize: 14,
        fontFamily: "Metropolis",
        fontWeight: '500',
    },
    rightArrowImageStyle: {
        width: Scale(7.41),
        height: Scale(12),
        resizeMode: 'contain',
        marginRight: Scale(23),
    },
    BrandTextAndRightArrowImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    brandsNameExample: {
        fontSize: 11,
        fontFamily: "Metropolis",
        color: "#9B9B9B",
        fontWeight: "500",
        marginLeft: Scale(16),
        marginTop: Scale(-15),
    },
    applyDiscard: {
        width: Scale(160),
        height: Scale(36),
        borderWidth: 1,
        borderColor: "#3D3D3D",
        borderRadius: Scale(20),
        justifyContent: "center",
        alignItems: "center",
    },
    discardApplyText: {
        fontSize: 14,
        fontFamily: "Metropolis",
        fontWeight: '500',
        color: "#222222",
    },
    applyDiscardView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Scale(16),
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginBottom: Scale(14),
        paddingTop: Scale(20),
    },
    applyDiscardMainView: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: Scale(14),
    },
    brandSelectModalView: { flex: 1, backgroundColor: "#F9F9F9" },
    brandSearchBarView: {
        height: Scale(40),
        marginHorizontal: Scale(16),
        backgroundColor: "#FFFFFF",
        borderRadius: Scale(30),
        alignItems: "center",
        flexDirection: "row",
        marginTop: Scale(20),
        paddingHorizontal: Scale(15),
    },
    brandSearchImageStyle: {
        width: Scale(14),
        height: Scale(14),
        marginRight: Scale(12),
    },
    TextInputBrandSearchBar: { width: Scale(320), fontSize: 16, placeholderTextColor: "#9B9B9B", paddingVertical: Scale(-10) },
    checkBoxStyle: {
        width: Scale(20),
        height: Scale(20),
        resizeMode: "contain",
    },
    renderBrandListWithCheckBoxViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Scale(16),
        marginBottom: Scale(32),
    },
    brandListMainView: {
        marginTop: Scale(24),
    },
    brandText: {
        fontSize: 16,
        fontFamily: 'Metropolis',
        fontWeight: "500",
        color: "#222222",
    },
    selectBrandsTouch: {
        marginBottom: Scale(30),
    },
      ratingStyle: {
        alignSelf: "flex-start",
      },
      renderCatalogText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
      },
      renderCatalogTextName: {
        fontSize: 16,
        fontWeight: "bold",
      },
      renderCatalogTextTheme: {
        fontSize: 14,
        color: "#999",
      },
      renderCatalogPriceView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      renderCatalogTextPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FF6347",
      },
      renderCatalogTextCutPrice: {
        fontSize: 14,
        textDecorationLine: "line-through",
        color: "#999",
      },
      sortModalMainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
      sortModalSubView: {
        width: "80%",
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10,
      },
      sortModalCrossImageStyle: {
        width: 20,
        height: 20,
        alignSelf: "flex-end",
      },
      sortModalTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
      },
      sortOptionsView: {
        flexDirection: "column",
      },
      sortOptionButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
      },
      sortOptionText: {
        fontSize: 16,
      },
      filterModalSubView: {
        width: "100%",
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10,
      },
      filterModalTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
      },
})