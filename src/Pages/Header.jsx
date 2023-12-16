import React from 'react'
import main from '../style/main.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { TbCircleCaretRight } from "react-icons/tb";

function Header() {
  return (
    <div className='image'>
        <h1>Shangri-La Colombo</h1>
        <h3>A Person tropical sanctuary set within the heart of the city</h3>
        <div className='expandleft'> 
            <TbCircleCaretRight />
        </div>
        
        <div>
          <table>
            <thead>
              <th><FaRegCalendarAlt /> Dec 15, 2023    1 night   Dec 16, 2023</th>
              <th><IoPersonOutline /> 1 Room, 1 Adult, 0 Children</th>
              <th><IoPricetagOutline /> special code</th>
              <td>search</td>
            </thead>
          </table>
        </div>

      </div>
  )
}

export default Header