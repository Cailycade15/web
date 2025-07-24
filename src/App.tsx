import React, { useEffect, useRef, useState } from 'react';

import Header from "./Components/Header/Header";
import NavMenu from "./Components/NavMenu/NavMenu";
import StartConteiner from "./Components/StartConteiner/StartConteiner"
import DoubleNav from './Components/DoubleNav/DoubleNav';
import LogoLine from './Components/Logo/LogoLine';
import Footer from './Components/Footer/Footer';
import MainSlider from './Components/MainSlider/MainSlider';
import MainLenta from './Components/MainLenta/MainLenta'

import cl from "./App.module.css"

function App() {

  type Categories = {
    id: string,
    categoryName: string
  }
  const [categories, setCategories] = useState<Categories[]>([]);

  type Manufacturer = {
    id: string,
    name: string,
    country: string
  }
  const [manufacturer, setManufacturer] = useState<Manufacturer[]>([]);

  type AnimalType = {
    id: string,
    name: string
  }
  const [animaltype, setAnimaltype] = useState<AnimalType[]>([]);



  type Products = {
    id: string,
    name: string,
    price: string,
    stock: string,
    weightGrams: number,
    category: Categories,
    manufacturer: Manufacturer
  }
  const [products, setProducts] = useState<Products[]>([]);





  useEffect(() => {
      fetch('http://localhost:8080/categories') // Пример API
        .then(res => 
          res.json()
        )
        .then(data => {
          setCategories(data);
        })
        .catch(err => {
          console.error('Ошибка загрузки категории:', err);
        });



      fetch('http://localhost:8080/manufacturers') 
        .then(res => 
          res.json()
        )
        .then(data => {
          setManufacturer(data);
        })
        .catch(err => {
          console.error('Ошибка загрузки мануфактуры', err);
        });



        fetch('http://localhost:8080/animaltype') 
        .then(res => 
          res.json()
        )
        .then(data => {
          setAnimaltype(data);
        })
        .catch(err => {
          console.error('Ошибка загрузки типов животных', err);
        });



        fetch('http://localhost:8080/products') 
        .then(res => 
          res.json()
        )
        .then(data => {
          setProducts(data);
        })
        .catch(err => {
          console.error('Ошибка загрузки продуктов', err);
        });

    }, []);














  return (
    <div className="App">
      <Header />
      {/* <NavMenu /> */}
      <StartConteiner />
      <DoubleNav />

      <br/><br/><br/>

      <MainSlider valueScroll={250} >
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
      </MainSlider>




<br/><br/><br/><br/><br/><br/><br/><br/>
      {/* Популярные бренды */}
      <MainLenta icon={"https://lapa.md/wp-content/uploads/2025/07/brand-icon.png"} text={"Популярные бренды"} valueScroll={250}>
        {/* <div className="brend">
          <img className={cl.img_brend} src={process.env.PUBLIC_URL + "/images/brends/club_4_paws.png"} alt="" />
        </div> */}
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
      </MainLenta>
<br/><br/><br/><br/><br/><br/><br/><br/>


















      <div className="conteiner">

        <h1>Список категорий</h1>
        <ul>
          {categories.map((item) => (
            <li key={item.id}>{item.categoryName}</li>
          ))}
        </ul>


        <h1>Список мануфактур</h1>
        <ul>
          {manufacturer.map((item) => (
            <li key={item.id}>{item.name}({item.country})</li>
          ))}
        </ul>

        <h1>Список типов животных</h1>
        <ul>
          {animaltype.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>


        <h1>Список продуктов</h1>
        <ul>
          {products.map((item) => (
            <li key={item.id}>{item.name} Цена:{item.price}$ Остаток:{item.stock} Вес:{item.weightGrams} Категория:{item.category.categoryName} Бренд:{item.manufacturer.name} Страна производитель:{item.manufacturer.country}</li>
          ))}
        </ul>
      </div>















      <br/><br/><br/><br/><br/><br/><br/><br/>
      <LogoLine />
      <Footer />
    </div>
  );
}

export default App;
