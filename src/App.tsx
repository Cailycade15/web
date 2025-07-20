import React from 'react';
import './App.css';

import Header from "./Components/Header/Header";
import NavMenu from "./Components/NavMenu/NavMenu";
import StartConteiner from "./Components/StartConteiner/StartConteiner"
import DoubleNav from './Components/DoubleNav/DoubleNav';
import LogoLine from './Components/Logo/LogoLine';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <div className="App">
      <Header />
      <NavMenu />
      <StartConteiner />
      <DoubleNav />

      <br/><br/><br/><br/><br/><br/><br/><br/>
      <LogoLine />
      <Footer />
    </div>
  );
}

export default App;
