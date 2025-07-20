import React from 'react';

import cl from "./Footer.module.css"

import CardFooter from "./CardFooter"

function Footer() {

    const list = [
        "защита от паразитов",
        "кошки",
        "собаки",
        "котята",
        "щенки",
        "ветаптека",
        "акции",
    ]

  return (
    <div>
        <div className={`conteiner ${cl.footer}`}>
            <CardFooter title="Каталог" list={list}/>
            <CardFooter title="Покупателям" list={list}/>
            <CardFooter title="компания" list={list}/>
            
        </div>
    </div>
  );
}

export default Footer;
