import React, { Component } from "react";
import {View, StyleSheet, Text} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {container} = styles;
    return (
      <View style={container}>
        <Text>Sample Text</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})