import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from "./Components/Header/Header";
import NavMenu from "./Components/NavMenu/NavMenu";
import StartConteiner from "./Components/StartConteiner/StartConteiner"
import DoubleNav from './Components/DoubleNav/DoubleNav';
import LogoLine from './Components/Logo/LogoLine';
import Footer from './Components/Footer/Footer';
import MainSlider from './Components/MainSlider/MainSlider';
import MainLenta from './Components/MainLenta/MainLenta'

import { localStorageToken } from './Data_Structures/globalVariables';

import cl from "./App.module.css"

function App() {

  const token = localStorage.getItem(localStorageToken)












  return (
    <div className="App">
      <Header />
      {/* <NavMenu /> */}
      <StartConteiner />
      <DoubleNav />

      <br/><br/><br/>

      {/* <MainSlider valueScroll={250} >
        <div className={cl.advertising}>
          <img className={cl.img_advertising} src="https://lapa.md/wp-content/uploads/2025/07/Rasprodazha.webp" alt="" />
        </div>
        <div className={cl.advertising}>
          <img className={cl.img_advertising} src="https://lapa.md/wp-content/uploads/2025/07/zashhita_d17ceab1c6.webp" alt="" />
        </div>
        <div className={cl.advertising}>
          <img className={cl.img_advertising} src="https://lapa.md/wp-content/uploads/2025/07/Royal_efe0941c26.webp" alt="" />
        </div>
        <div className={cl.advertising}>
          <img className={cl.img_advertising} src="https://lapa.md/wp-content/uploads/2025/07/Onest_3ff7e283cb.webp" alt="" />
        </div>
        <div className={cl.advertising}>
          <img className={cl.img_advertising} src="https://lapa.md/wp-content/uploads/2025/07/Dacha_115be4473a.webp" alt="" />
        </div>
        <div className={cl.advertising}>
          <img className={cl.img_advertising} src="https://lapa.md/wp-content/uploads/2025/07/Ohlazhdenie_07b67cb689.webp" alt="" />
        </div>
      </MainSlider> */}


      {/* <div>token: {token}</div> */}



      <LogoLine />
      <Footer />
    </div>
  );
}

export default App;
