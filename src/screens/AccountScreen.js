import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'


export default class AccountScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('AccountListScreen')}>
          <Text style={styles.txtName}>Account List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('AddAccountScreen')}
        >
          <Text style={styles.txtName}>Add Account</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtName: {
    fontSize: 20,
    fontWeight: '400'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#ef5350'
  }
});
