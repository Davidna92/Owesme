import React from 'react';

import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { Debtslist } from './components/Debts/Debtslist';
import { AddDebts } from './components/AddDebts/AddDebts';

import { GlobalProvider} from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Debtslist />
        <AddDebts/>
      </div>
    </GlobalProvider>
  );
}

export default App;
