import React from 'react'
import Nav2 from '../style/Nav2.css';
import { MdExpandMore } from "react-icons/md";


function Navbar2() {
  return (
    <div>
         <nav className='navstyle2'>
            <a href="/#" className='space2'>ABOUT <MdExpandMore className='expanspace'/></a>
            <a href="/#" className='space2'>ROOM & SUITES <MdExpandMore className='expanspace'/></a>
            <a href="/#" className='space2'>DINING <MdExpandMore className='expanspace'/></a>
            <a href="/#" className='space2'>EXPERIENCE <MdExpandMore className='expanspace'/></a>
            <a href="/#" className='space2'>EVENTS <MdExpandMore className='expanspace'/></a>
            <a href="/#" className='space3'>GALLERY</a>
            <a href="/#" className='space3'>OFFERS</a>
            <a href="/#" className='space2'>MORE <MdExpandMore className='expanspace'/></a>
            
            {/* <button><a href="/#" className='spacemore'>FIND A HOTEL</a></button> */}
            <button className='spacemore'>FIND A HOTEL</button>
            
         </nav>
    </div>
  )
}

export default Navbar2