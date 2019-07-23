import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1';

export const AccountContext = createContext();

const AccountContextProvider = (props) => {

  const [accounts, setAccounts] = useState([
    { name: 'John Doe', role: 'Admin', id: 1 },
    { name: 'Peter', role: 'Government', id: 2 }
  ]);

  const addAccount = (name, role) => {
    setAccounts([...accounts, { name, role, id: uuid() }])
  }

  const delAccount = (id) => {
    setAccounts(accounts.filter(account => account.id !== id))
  }

  return (
    <AccountContext.Provider value={{ accounts, addAccount, delAccount }}>
      {props.children}
    </AccountContext.Provider>
  )
}
export default AccountContextProvider;