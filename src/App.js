import React from 'react';
import { Header } from './Components/Header/Header.js';
import { Balance } from './Components/Balance/Balance.js';
import { IncomeExpenses } from './Components/IncomeExpenses/IncomeExpenses.js';
import { TransactionList } from './Components/Transaction/TransactionList.js';
import './App.module.scss';

function App() {
  return (
    <>
      <Header text="Expense Tracker"/>
      <Balance />
      <IncomeExpenses />
      <TransactionList text="History" />
      
    </>
  );
}

export default App;
