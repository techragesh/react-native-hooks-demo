import React, { useContext } from 'react'
import { AccountContext } from '../contexts/AccountContext';

const AccountDetail = ({ account }) => {
  const { delAccount } = useContext(AccountContext)
  return (
    <li onClick={() => delAccount(account.id)}>
      <div className="name">{account.name}</div>
      <div className="role">{account.role}</div>
    </li>
  )
}
export default AccountDetail