import { View, Text } from 'react-native'
import React from 'react'

export default function OrderDetails() {
  return (
    <View>
     {renderOrderDetails()}
    </View>
  )
}
const renderOrderDetails = () => {
  return (
      <View>
        <Text>hello</Text> 
      </View>
  );
};