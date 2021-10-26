import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'
const Submenu = () => {
  const {isSubmenuOpen, location ,page:{page,links},} = useGlobalContext();
  const container = useRef(null);
  const [coloumns, setColoumns] = useState('col-2')
  useEffect(()=>{
    setColoumns('col-2')
     const submenu = container.current;
     const {center,bottom} = location;
     submenu.style.left = `${center}px`;
     submenu.style.top = `${bottom}px`;

     if(links.length===3){setColoumns('col-3')}
     if(links.length>3){setColoumns('col-4')}
  },[location, links])
  return <aside className = {`${isSubmenuOpen ? 'submenu show' : ' submenu'}`} ref={container}>
    <h4>{page}</h4>
    <div className={`submenu-center ${coloumns}`}>
    {links.map((link,index)=>{
      const {label,icon,url}=link;
      return(
      <a href={url} key={index}>
        {icon}
        {label}
      </a>
      );

    })}
    </div>
  </aside>
}

export default Submenu
