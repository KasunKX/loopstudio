import react, { useState, useEffect, useRef } from 'react'


const useInView = (obj, newClass, roots) => {

   const [able, setAble] = useState(false)

   useEffect(() => {

      setAble(true)

      let rootm

      if (rootm === undefined) {
         rootm = {}
         console.log("returning default root for " + obj)
      } else {
         rootm = roots
         console.log("returning returned for " + obj)
      }

      let observer = new IntersectionObserver((entries, observer) => {

         entries.forEach((item) => {
            if (item.isIntersecting) {
               obj.classList.add(newClass)

            }
         })

      }, {
         root: null, // default, use viewport
         rootMargin: '0% 0% -10% 0%',
         threshold: 0.2 // item height
      })

      { able ? observer.observe(obj) : console.log() }


   })

   return { able };
}

export default useInView


