import React from 'react';
import './App.css';
import Header from './components/header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faMapMarkedAlt, faLaptopCode, faAddressCard } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faMapMarkedAlt, faLaptopCode, faAddressCard);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
};

export default App;
