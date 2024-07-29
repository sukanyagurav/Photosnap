import React from 'react'
import PageLink from './Link'

const CTA = () => {
  return (
    <section className='h-[300px] bg-cover  bg-center w-full borderGrdient   bg-ctaMobileImage p-8 flex-wrap gap-2 md:bg-ctaTabletImage lg:bg-ctaDesktopImage  flex md:justify-between md:p-20 items-center'>
    
        <h1 className='text-4xl text-white uppercase font-bold tracking-[0.1em]  leading-[1.24em] w-[300px]' >We're in Beta. Get your invite  today!</h1>
        <PageLink headingColor='text-white' type='dark' imageFilterClass={'light'} linkText='get an invite' href='#none'/>
    </section>
  )
}

export default CTA
