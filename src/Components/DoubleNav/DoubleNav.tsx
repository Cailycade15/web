import React from 'react';

import CardForNav from './CardForNav';

import cl from "./CardForNav.module.css"

function DoubleNav() {


  return (
    <div className={cl.position}>
        <div className={`conteiner ${cl.flex_div}`}>
            <CardForNav img="/images/icons/icons_mainPage/shield-icon.png" text="Защита от паразитов"/>
            <CardForNav img="/images/icons/icons_mainPage/cat-icon.png" text="Кошки"/>
            <CardForNav img="/images/icons/icons_mainPage/dog-icon.png" text="Собаки"/>
            <CardForNav img="/images/icons/icons_mainPage/pills-icon.png" text="Ветаптека"/>
            <CardForNav img="/images/icons/icons_mainPage/discount-icon-lapa.png" text="Акции"/>
        </div>
    </div>
  );
}

export default DoubleNav;
