import React from 'react';

import cl from "./CardFooter.module.css"

type PropsCardFooter = {
    title: string,
    list: string[],
}

const CardFooter = ({title, list}: PropsCardFooter) => {

  return (
    <div className={cl.card}>
        <p className={cl.title}>{title}</p>
        {
            list.map((item) => 
                <a 
                    href={item}
                    className={cl.list_item}>{item}</a>
            )
        }
    </div>
  );
}

export default CardFooter;
