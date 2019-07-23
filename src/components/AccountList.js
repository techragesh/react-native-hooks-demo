import React, { useContext } from 'react'
import { AccountContext } from '../contexts/AccountContext';
import AccountDetail from './AccountDetail';

const AccountList = () => {

  const { accounts } = useContext(AccountContext)

  return (
    <div>
      <ul>
        {accounts.map(account => {
          return <AccountDetail account={account} key={account.id}></AccountDetail>
        })}
      </ul>
    </div>
  )
}
export default AccountList;