import React from 'react'
import { features } from '../utilis/constants.js';
const Features = ({columns= features.length}) => {
  return (
   <section className='max-w-[1200px]  gap-8 flex flex-col  flex-wrap md:flex-row  justify-between mx-auto p-8 my-[8rem]'>
        {
            features.slice(0,columns).map(feature=>(
                <article className='md:max-w-[30%] justify-center flex flex-col md:justify-center text-center gap-4'>
                    <img src={feature.imgSource} className='w-[70px] mx-auto object-contain h-[70px]' alt={feature.title} />
                    <h2 className='font-bold text-lg'>{feature.title}</h2>
                    <p className='text-gray-500'>{feature.description}</p>
                </article>
            ))
        }
   </section>
  )
}

export default Features
