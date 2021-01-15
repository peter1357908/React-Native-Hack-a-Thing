import React, { Component } from 'react'
import * as Linking from 'expo-linking'
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native'

class App extends Component {
  state = {
    ticker: ''
  }

  setTicker = (ticker) => {
    this.setState({ ticker });
  }

  onPress = () => {
    Linking.openURL('https://finance.yahoo.com/quote/' + this.state.ticker)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='input ticker symbol here'
          onChangeText={text => this.setTicker(text)}
          value={this.state.ticker}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text>show quotes</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;