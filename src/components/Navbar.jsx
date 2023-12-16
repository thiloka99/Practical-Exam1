import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { IoIosPhonePortrait , IoLogoCodepen} from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import Nav from '../style/Nav.css';
import { RxDividerVertical } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";

function Navbar() {
  return (
    <div>
        <nav className='navstyle'>
            <h2><IoLogoCodepen/>SHANGRI-LA</h2>
            <div className='itemsContainerStyle'>
                    <IoPersonOutline />
                    
                    <a href="/#" className='space'>sign in</a>
                    <RxDividerVertical className='dividerStyle'/>
                    <a href="/#" className='space'>Join Now</a>
                    <RxDividerVertical />
                    <a href="/#" className='space'>Find Reservations</a> 
                    <RxDividerVertical />
                    <TbWorld />
                    <select className='space' variant="outlined">
                        <option>English</option>
                        <option>Tamil</option>
                        <option>Sinhala</option>
                    </select>
                    <RxDividerVertical />
                    <select className='space'>
                        <option>LKR</option>
                    </select>
                    <RxDividerVertical />
                    <IoIosPhonePortrait />
                
            </div>
        </nav> 
    </div>


     
       
  
  )
}

export default Navbar