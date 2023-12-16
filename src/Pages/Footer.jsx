import React from 'react'
import last from '../style/last.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
   <div>
        <div class="container-footer w-container">
  <div class="w-row">
    <div class="footer-column w-clearfix w-col w-col-4">
      <p7 class="footer-failory-name">About</p7>
      <p7 class="footer-description-failory">About cinamon Hotels  <br/></p7>
      <p7 class="footer-description-failory">Medis & Acciades <br/></p7>
      <p7 class="footer-description-failory">Gallery <br/></p7>
      <p7 class="footer-description-failory">CSR $ Sustanability <br/></p7>
      <p7 class="footer-description-failory">Jhon Keels Group <br/></p7>
      <p7 class="footer-description-failory">Cinnamon Air <br/></p7>
      <p7 class="footer-description-failory">Term & Condition <br/></p7>
      <p7 class="footer-description-failory">Privacy Statement <br/></p7>
    </div>

    <div class="footer-column w-clearfix w-col w-col-4">
      <p7 class="footer-failory-name">Get In Touch</p7>
      <p7 class="footer-description-failory">Know Sri Lanka  <br/></p7>
      <p7 class="footer-description-failory">Know Maidves<br/></p7>
      <p7 class="footer-description-failory">Contact Us <br/></p7>
      <p7 class="footer-description-failory">FAQs <br/></p7>
    </div>

    <div class="footer-column w-clearfix w-col w-col-4">
      <p7 class="footer-failory-name">Follo Us</p7>
      <p7 class="footer-description-failory"><FaFacebook /> </p7>
      <p7 class="footer-description-failory"><FaTwitterSquare /></p7>
      <p7 class="footer-description-failory"><FaLinkedin /> </p7>
      <p7 class="footer-description-failory"><GrInstagram /> </p7>
    </div>
   
  </div>
</div>

   </div>
  )
}

export default Footer