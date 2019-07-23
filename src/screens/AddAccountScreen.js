import React, { useContext, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function AddAccountScreen() {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const { addAccount } = useContext(AccountContext);

  handleSubmit = () => {
    addAccount(name, role);
    const { navigation } = this.props;
    navigation.navigate('AccountListScreen');
  }


  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Account name"
        maxLength={20}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Account Role"
        maxLength={20}
      />
      <TouchableOpacity onPress={this.handleSubmit}>
        <Text style={styles.txtName}>Add Account</Text>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
})
