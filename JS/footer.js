import react from 'react'
import fb from "./images/icon-facebook.svg"
import twitter from "./images/icon-twitter.svg"
import pinterest from "./images/icon-pinterest.svg"
import inst from "./images/icon-instagram.svg"

const Footer = () => {

   return <>

      <footer>

         <h2 className="head">loopstudios</h2>

         <ul className="nav">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
         </ul>

         <ul className="social">
            <li><img src={fb} alt="" /></li>
            <li><img src={twitter} alt="" /></li>
            <li><img src={pinterest} alt="" /></li>
            <li><img src={inst} alt="" /></li>
         </ul>

         <p className="foot">	&copy; 2022 loopstudios. All Rights Reserved.</p>

      </footer>

   </>

}

export default Footer