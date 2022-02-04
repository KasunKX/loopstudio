import { useState, useEffect } from "react";

const useMultiView = () => {

   const [ableM, setAbleM] = useState(true)

   let options = {
      root: null, // default, use viewport
      rootMargin: '0% 0% -10% 0%',
      threshold: 0.1 // item height

   }

   let observer = new IntersectionObserver((entries, observer) => {

      entries.forEach((el) => {
         if (el.isIntersecting) {
            el.target.classList.add("crd")
         }
      })

   }, options)

   useEffect(() => {
      {
         document.querySelectorAll("#ca").length > 0 ?

            document.querySelectorAll("#ca").forEach((el) => {
               observer.observe(el)
            }) : console.log()
      }
   })

   return { ableM }

}

export default useMultiView