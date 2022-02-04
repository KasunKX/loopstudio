import react, { useRef } from 'react'
import useMultiView from './useMultiView'

const Creations = () => {

   const abl = useRef()

   const { ableM: main } = useMultiView()

   return <>

      <div className="creations">

         <h2 className="headC">
            OUR CREATIONS
         </h2>

         <div className="headDesk">
            <h2>OUR CREATIONS</h2>
            <button>Load More</button>
         </div>

         <div className="creationItems">

            <div className="deepE cm" id='ca' ref={abl}>
               <h2>DEEP EARTH</h2>
            </div>

            <div className="nightA cm" id='ca' ref={abl}>
               <h2>NIGHT ACADEMY</h2>
            </div>

            <div className="soccerT cm" id='ca'>
               <h2>SOCCER TEAM VR</h2>
            </div>

            <div className="grid cm" id='ca'>
               <h2>THE GRID</h2>
            </div>

            <div className="above cm" id='ca'>
               <h2>FROM UP ABOVE VR</h2>
            </div>

            <div className="pocket cm" id='ca'>
               <h2>POCKET BOREALIS</h2>
            </div>

            <div className="curiosity cm" id='ca'>
               <h2>THE CURIOSITY</h2>
            </div>

            <div className="fisheye cm" id='ca'>
               <h2>MAKE IT FISHEYE</h2>
            </div>

            <div className="button">
               <button className="see" id="ca">SEE ALL</button>
            </div>
         </div>

      </div>

   </>
}

export default Creations