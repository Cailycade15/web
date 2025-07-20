import React from 'react';

import CardForNav from './CardForNav';

import cl from "./CardForNav.module.css"

function DoubleNav() {


  return (
    <div className={cl.position}>
        <div className={`conteiner ${cl.flex_div}`}>
            <CardForNav img="/images/shield-icon.png" text="Защита от паразитов"/>
            <CardForNav img="/images/cat-icon.png" text="Кошки"/>
            <CardForNav img="/images/dog-icon.png" text="Собаки"/>
            <CardForNav img="/images/pills-icon.png" text="Ветаптека"/>
            <CardForNav img="/images/discount-icon-lapa.png" text="Акции"/>
        </div>
    </div>
  );
}

export default DoubleNav;
