import react, { useRef } from 'react'
import pt2Img from "./images/mobile/image-interactive.jpg"
import useInView from './useInView'

const PageT = () => {

   const imaget = useRef()
   const titleH = useRef()
   const paragraph = useRef()

   const { able: imgT } = useInView(imaget.current, "imgt", {
      root: null, // default, use viewport
      rootMargin: '0% 0% -5% 0%',
      threshold: 0.1 // item height
   })

   const { able: titleT } = useInView(titleH.current, "tt", {
      root: null, // default, use viewport
      rootMargin: '0% 0% -5% 0%',
      threshold: 0.1 // item height
   })

   const { able: paraT } = useInView(paragraph.current, "pt", {
      root: null, // default, use viewport
      rootMargin: '0% 0% -5% 0%',
      threshold: 0.1 // item height
   })

   return <>


      <div className="paget">

         <div className="one" ref={imaget}></div>

         <div className="two">
            <h2 className="head" ref={titleH}>
               THE LEADER IN INTERACTIVE VR
            </h2>
            <p ref={paragraph}>
               Founded in 2011, Loopstudios has been producing world-class virtual reality
               projects for some of the best companies around the globe. Our award-winning
               creations have transformed businesses through digital experiences that bind
               to their brand.
            </p>
         </div>

      </div>


   </>
}

export default PageT