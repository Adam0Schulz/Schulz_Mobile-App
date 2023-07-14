import React from 'react'
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native'
import {gStyles, lStyles} from './style'
import DisplayOptions from '@components/DisplayOptions'
import ItemList from '@components/ItemList/ItemList'

const Explore = () => {
  return (
    <View style={gStyles.main}>
      <View style={lStyles.logoCont}>
        <Image style={lStyles.logo} source={require("@assets/logo.png")}></Image>
      </View>
      <SafeAreaView>
        <ScrollView style={lStyles.scrollSect}>
          <DisplayOptions />
          <ItemList />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Explore