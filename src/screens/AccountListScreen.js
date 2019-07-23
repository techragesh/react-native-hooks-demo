import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AccountList from '../components/AccountList';

export default class AccountListScreen extends Component {
  render() {
    return (
      <View>
        <AccountList></AccountList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})
