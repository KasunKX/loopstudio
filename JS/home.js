import react, { useEffect, useRef, useState } from 'react'
import burger from "./images/icon-hamburger.svg"
import closeIcon from "./images/icon-close.svg"
import useInView from './useInView'


const Home = () => {


   const topic = useRef()
   const navigation = useRef()
   const burg = useRef()

   const { state: navi } = useInView(navigation.current, "navAppear", {})
   const { state: home } = useInView(topic.current, "appear", {})

   const [menuLeft, setMenu] = useState("-99.9%")
   const [activeBurg, setBurg] = useState(burger)

   function openMenu() {

      if (menuLeft == "-99.9%") {
         setMenu("0")
         setBurg(closeIcon)
      } else {
         setMenu("-99.9%")
         setBurg(burger)
      }

   }

   window.addEventListener("scroll", () => {
      if (window.pageYOffset < 25) {
         navigation.current.style.top = "0"
      } else {
         navigation.current.style.top = "-20%"
      }
   })

   return <>

      <nav className='nav' ref={navigation}>

         <div className="left">
            <h2 className="name">
               loopstudios
            </h2>
         </div>
         <div className="right" onClick={openMenu} ref={burg}><img src={activeBurg} alt="" /></div>

         <ul className="desktopNav">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
         </ul>

      </nav>

      <div className="home" >

         <div className="immersive" ref={topic}>
            <h3>IMMERSIVE EXPERIENCES THAT DELIVER</h3>
         </div>

      </div>

      <div className="mobile-menu" style={{ left: menuLeft }}>

         <div className="items">

            <ul>
               <li>ABOUT</li>
               <li>CAREERS</li>
               <li>EVENTS</li>
               <li>PRODUCTS</li>
               <li>SUPPORT</li>
            </ul>

         </div>
      </div>

   </>
}


export default Home