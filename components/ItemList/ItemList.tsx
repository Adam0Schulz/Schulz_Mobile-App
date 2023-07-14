import React from 'react'
import {View, Text} from 'react-native'
import {lStyles, gStyles} from './style'

interface Props {

}

const ItemList = (props: Props) => {
  return (
    <View style={gStyles.section}>
        <Text style={gStyles.regularText}>Item List</Text>
    </View>
  )
}

export default ItemList