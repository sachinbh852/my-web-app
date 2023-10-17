"use client"
import Link from 'next/link'
import  { React, useState } from 'react'


export const Menu = () => {
  const [menuItemName,setMenuItemName]=useState('');
  const fnMenuClick=(eve)=>{
    eve.stopPropagation();
    const id=eve.target.id;
    if(id){
      console.log("fnMenuClick",id);
      setMenuItemName(id)
    }
  }
  return (
      <nav className='menu '>
    <ul className='menu' onClick={fnMenuClick}>
      <li><Link  className={menuItemName==="home" && "menu.active"} href="/home" id='home' >Home</Link></li>
      <li><Link className={menuItemName==="about" && "menu.active"} href="/about" id='about'>about</Link></li>
      <li><Link className={menuItemName==="contact" && "menu.active"} href="/contact" id='contact'>contact</Link></li>
    </ul>
 </nav>
  )
}
