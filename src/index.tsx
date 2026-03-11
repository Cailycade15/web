import React, { useEffect } from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {jwtDecode} from "jwt-decode";

import App from './App';
import Login from './Components/Log_and_Reg/Login';
import Register from "./Components/Log_and_Reg/Register"

import './index.css';

import {Type_For_String_or_Null} from "./Data_Structures/types"
import {DecodedToken} from "./Data_Structures/types"
import {localStorageToken} from "./Data_Structures/globalVariables"


// Функция для проверки валидности токена
const isTokenValid = (token: Type_For_String_or_Null) :boolean => {
  if (token === null) return false;

  try {
    const decoded = jwtDecode<DecodedToken>(token);

    // Текущая дата в миллисекундах
    const currentTime = Date.now();

    // exp в токене — в секундах, поэтому умножаем на 1000
    const expTime = decoded.exp * 1000;

    return expTime > currentTime;
  } catch (error) {
    console.error("Ошибка декодирования токена:", error);
    return false;
  }
}


let token = localStorage.getItem(localStorageToken)

//Проверяем на наличие и на валидность токена и в случае провала мы удаляем все данные из куки
if(token !== null && !isTokenValid(token)) 
  localStorage.clear()


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route index path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
