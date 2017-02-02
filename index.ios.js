/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Perf from 'react-addons-perf';

// Access via remote debug console in the "debuggerWorker.js" environment
window.Perf = Perf;

export default class PerfNative2 extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          {this.state.count}
        </Text>
        <TouchableOpacity onPress={() => this.setState({ count: this.state.count + 1 })}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PerfNative2', () => PerfNative2);
