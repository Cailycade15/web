import React from 'react';
import './Header.module.css';

import cl from "./Header.module.css"

function Header() {


  return (
    <header className={cl.header}>
      <div className={`conteiner ${cl.flex_row_center}`}>

        <img 
          className={cl.img_logo}
          src={process.env.PUBLIC_URL + "/images/icons/icons_mainPage/lapa-logo-ru.png"} 
          alt="logo" />

        <div className={cl.search}>
          <input type="text" className={cl.search__input} placeholder="Поиск по товарам" />
          <button className={cl.search__button}>
              <svg className={cl.search__icon} aria-hidden="true" viewBox="0 0 24 24">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
              </svg>
          </button>
        </div>

        {/* ${cl.open} */}
        <div className={`${cl.burger} `}>
          <span></span>
        </div>


        <div className={cl.user_panel}>
          <div>
          <svg className={cl.icon_panel}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" 
            d="M18.5 20.247V16S16 14.5 12 14.5S5.5 16 5.5 16v4.247M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12Zm10.426.5S8.5 10.68 8.5 8c0-1.933 1.569-3.5 3.504-3.5A3.495 3.495 0 0 1 15.5 8c0 2.68-3.426 4.5-3.426 4.5h-.148Z"/>
          </svg>
          </div>

          <div>
          <svg className={cl.icon_panel}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path fill="currentColor" 
            d="M4.24 12.25a4.19 4.19 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.241 4.241 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5l-7.26-7.25m15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.218 5.218 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96l7.96-7.96Z"/>
          </svg>
          </div>

          <div className={cl.block_shop_basket}>
            <svg className={`${cl.icon_panel} `}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Z"/>
            </svg>
            </div>
        </div>
      
      </div>
    </header>
  );
}

export default Header;
