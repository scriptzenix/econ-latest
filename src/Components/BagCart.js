import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Scale from '../Scale';
import { orderImg, dotIcon, minusIcon, plusIcon } from '../assets';

const BagCart = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <View>
      <View style={styles.cardContainer}>
        <View>
          <Image source={orderImg} style={styles.cardImg} />
        </View>
        <View style={styles.cardContain}>
          <View style={styles.txtView}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.productName}>Pullover</Text>
              <Image source={dotIcon} style={styles.icon} />
            </View>
            <View style={styles.detailsView}>
              <Text>Color: <Text style={styles.colorTxt}>Black</Text></Text>
              <Text>Size: <Text style={styles.colorTxt}>L</Text></Text>
            </View>
            <View style={styles.unitTxtView}>
              <TouchableOpacity onPress={handleDecrement}>
                <Image source={minusIcon} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity onPress={handleIncrement}>
                <Image source={plusIcon} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.price}>{112 * count}$</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BagCart;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    borderRadius: 8,
    marginHorizontal: Scale(10),
    marginTop: Scale(20),
    marginBottom: 20,
  },
  cardContain: {
    backgroundColor: "#fff",
    height: Scale(150),
    width: Scale(300),
  },
  cardImg: {
    height: Scale(150),
    width: Scale(104),
  },
  txtView: {
    marginLeft: Scale(10),
    marginVertical: Scale(10),
  },
  productName: {
    fontFamily: "Metropolis",
    fontSize: 18,
    color: "#222222",
    fontWeight: "bold",
  },
  subTxt: {
    fontFamily: "Metropolis",
    fontSize: 13,
    letterSpacing: -0.0015,
  },
  unitTxtView: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  price: {
    fontFamily: "Metropolis",
    fontSize: 16,
    marginLeft: Scale(105),
    color: "#222222",
    fontWeight: "bold",
    marginTop: Scale(10),
  },
  iconView: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  bgIcon: {
    height: 50,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    height: 30,
    alignSelf: "flex-start",
    marginVertical: 15,
  },
  detailsView: {
    flexDirection: "row",
    gap: 20,
    marginHorizontal: 10,
  },
  colorTxt: {
    color: "#000",
  },
  count: {
    fontFamily: "Metropolis",
    fontSize: 15,
    marginTop: 10,
  },
});
