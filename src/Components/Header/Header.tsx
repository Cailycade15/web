import React from 'react';
import './Header.module.css';

import cl from "./Header.module.css"
import { useNavigate } from 'react-router-dom';

import {localStorageUserData} from "../../Data_Structures/globalVariables"
import {localStorageToken} from '../../Data_Structures/globalVariables';
import {Type_For_String_or_Null} from "../../Data_Structures/types"
import {Enum_User_Roles} from "../../Data_Structures/enums"

function Header() {

  const navigate = useNavigate();
  const token = localStorage.getItem(localStorageToken)

  const userRole = () => {
    const userData: Type_For_String_or_Null = localStorage.getItem(localStorageUserData) 
    if(userData !== null){
      return JSON.parse(userData).role
    }
    else return null;
  }

  const listUser = [
    {
      text: "Профиль",
      href: "/"
    },
    {
      text: "Настройки",
      href: "/"
    },
    {
      text: "Выход",
      href: "/"
    },
  ]
  const listAdmin = [
    {
      text: "Админская панель",
      href: "/"
    },
    {
      text: "Профиль",
      href: "/"
    },
    {
      text: "Настройки",
      href: "/"
    },
    {
      text: "Выход",
      href: "/"
    },
  ]

  var profilList = null;
  switch(userRole()){
    case Enum_User_Roles.USER:
      profilList = listUser
      break;
    case Enum_User_Roles.ADMIN:
      profilList = listAdmin
  }

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
        <div className={`${cl.burger } `}>
          <span></span>
        </div>

        <div className={cl.user_panel}>

        {
          token !== null
          ?
          <>
            {/* {
              (() => {
                const role: Type_For_String_or_Null = userRole();
                if (role === null) return null;

                switch (role) {
                  case Enum_User_Roles.USER:
                    return (
                      <>
                        
                      </>
                    );
                }

                return null;
              })()
            } */}

            <div className={cl.profil_icon}>
              <svg className={cl.icon_panel} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M18.5 20.247V16S16 14.5 12 14.5S5.5 16 5.5 16v4.247M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12Zm10.426.5S8.5 10.68 8.5 8c0-1.933 1.569-3.5 3.504-3.5A3.495 3.495 0 0 1 15.5 8c0 2.68-3.426 4.5-3.426 4.5h-.148Z"
                />
              </svg>
              <div className={cl.hidenPanel}>
                  {
                    profilList && profilList.map((item, index) => (
                      <div 
                        key={index}
                        className={cl.list_item}
                        onClick={(e) => {
                          // e.preventDefault();
                            navigate("/")
                        }}
                      >
                        <div className={cl.profilText}>
                          {item.text} 
                        </div>
                      </div>
                      ))
                  }
              </div>
            </div>

            <div>
              <svg
                className={cl.icon_panel}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 7 45 55"
                xmlSpace="preserve"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
              >
                <path
                  d="M36.5 51.325 32 56.234 11.725 34.116c-4.579-4.996-4.241-12.769.754-17.348 4.996-4.579 12.769-4.241 17.348.754L32 19.893l2.173-2.371c4.579-4.995 12.352-5.333 17.348-.754 4.995 4.579 5.333 12.352.754 17.348L42.5 44.839"
                  className={cl.heart_icon}
                  style={{
                    stroke: "#222a33",
                    strokeWidth: "3px",
                  }}
                />
                <path
                  d="M14.868 31.187c-3.217-3.509-2.98-8.97.53-12.187M42 39v12M48 45H36"
                  style={{
                    fill: "none",
                    stroke: "#222a33",
                    strokeWidth: "2px",
                  }}
                />
              </svg>
            </div>

            <div className={cl.block_shop_basket}>
              <svg className={`${cl.icon_panel}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  className={cl.basket_icon}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
          </>

          :
          <button 
            className={cl.button} 
            onClick={() => navigate("/login")}
            >Войти</button>
        }
        </div>
      
      </div>
    </header>
  );
}

export default Header;
