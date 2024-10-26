import React, { useState } from 'react'
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import Image11 from "../../assets/images/california-2.jpeg"
import Image22 from "../../assets/images/california-4.jpeg"
import Image33 from "../../assets/images/california-3.jpeg"
import Image44 from "../../assets/images/california-6.jpeg"
import Image55 from "../../assets/images/california-9.jpeg"
import Image66 from "../../assets/images/califronia-12.jpeg"
import Image77 from "../../assets/images/california-10.jpeg"
import Image88 from "../../assets/images/california-11.jpeg"
import Image99 from "../../assets/images/california-13.jpeg"



const LightboxGallery = () => {

  return (
    <div className='my-12'>
        <SlideshowLightbox className='container grid  lg:grid-cols-3 gap-4 mx-auto my-4'>
          <img className='w-full h-96 rounded object-cover' src={Image11} alt='' />
          <img className='w-full h-96 rounded object-cover' src={Image22} alt=''/>  
          <img className='w-full h-96 rounded object-cover' src={Image33} alt=''/>
          <img className='w-full h-96 rounded object-cover' src={Image44} alt=''/>
          <img className='w-full h-96 rounded object-cover' src={Image55} alt=''/>  
          <img className='w-full h-96 rounded object-cover' src={Image66} alt=''/>
          <img className='w-full h-96 rounded object-cover' src={Image77} alt=''/>
          <img className='w-full h-96 rounded object-cover' src={Image88} alt=''/>  
          <img className='w-full h-96 rounded object-cover' src={Image99} alt=''/>
   
        </SlideshowLightbox>   
    </div>
  )
  
};

export default LightboxGallery;