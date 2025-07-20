import React from 'react';

import cl from "./CardForNav.module.css"

type CardForNavProps = {
  img: string;
  text: string;
};

const CardForNav = ({img, text}: CardForNavProps) => {

  return (
    <div className={cl.Card}>
        <div className={cl.div_img}>
          <img className={cl.img}
            src={process.env.PUBLIC_URL + img}  
            alt="icon" />
        </div>
        
        <div className={cl.text}>{text}</div>
    </div>
  );
}

export default CardForNav;
