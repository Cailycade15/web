import React from 'react';

import cl from "./NavMenu.module.css";

function NavMenu() {

  return (
    <div className={cl.back_nav_menu}>
        <div className={`conteiner ${cl.flex_div}`}>
          <a href="#">защита от паразитов</a>
          <a href="#">кошки</a>
          <a href="#">собаки</a>
          <a href="#">котята</a>
          <a href="#">щенки</a>
          <a href="#">ветаптека</a>
          <a href="#">акции</a>
        </div>
    </div>
  );
}

export default NavMenu;
