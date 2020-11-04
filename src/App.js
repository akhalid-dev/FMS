import React from 'react';
import { Header } from './Components/Header/Header.js';
import { Balance } from './Components/Balance/Balance.js';
import { IncomeExpenses } from './Components/IncomeExpenses/IncomeExpenses.js';
import { TransactionList } from './Components/Transaction/TransactionList.js';
import { AddTransaction } from './Components/Transaction/AddTransaction.js';

import { GlobalProvider } from './Context/GlobalState.js';

import './App.module.scss';

function App() {
  return (
    <GlobalProvider>
      
      <Header text="Expense Tracker"/>
      <Balance />
      <IncomeExpenses />
      <TransactionList text="History" />
      <AddTransaction message="Add new transaction" />
            
    </GlobalProvider>
  );
}

export default App;
