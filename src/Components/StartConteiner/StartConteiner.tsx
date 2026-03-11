import React from 'react';

import cl from "./StartConteiner.module.css";

function StartConteiner() {

  return (
    <div className={cl.content}>
        <div className={`conteiner ${cl.flex_div}`}>
            <div className={cl.TextDiv}>
            <div className={cl.posLitleDiv}>
                <p className={cl.textUp}>Grandin</p>
                <p className={cl.textDown}>Сухой корм для собак.</p>
                <button className={cl.button}>перейти 
                    <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </button>
            </div>
            </div>

            <div className={cl.PhotoDiv}>
                <img className={cl.imgEat}
                    src="https://lapa.md/wp-content/uploads/2025/07/grandin-image-scaled.png" 
                    alt="eat" />
            </div>
        </div>










        
        
        







    </div>
  );
}

export default StartConteiner;




