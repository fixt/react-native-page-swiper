import React, { Component, Dimensions, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-page-swiper'

export default class SwiperExample extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>

        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>

        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
  },

  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
