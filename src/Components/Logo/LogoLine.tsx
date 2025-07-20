import React from 'react';

import cl from "./LogoLine.module.css"

function LogoLine() {


  return (
    <div className={cl.divLogo}>
        <div className="conteiner">
            <img className={cl.img_logo}
            src={process.env.PUBLIC_URL + "/images/lapa-logo-ru.png"}  
            alt="Logo" />
        </div>
    </div>
  );
}

export default LogoLine;
