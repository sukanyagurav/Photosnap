import React from 'react'
import Banner from '../components/Banner'
import CTA from '../components/CTA'

const PricingPage = () => {
  return (
   <>
     <Banner
        heading='Pricing'
        description={
          "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."        }
        image={{
          desktop: "/images/pricing/desktop/hero.jpg",
          mobile: "/images/pricing/mobile/hero.jpg",
          tablet: "/images/pricing/tablet/hero.jpg",
        }}
        bgColor="bg-black"
        headingColor="text-white"
        descriptionColor="text-gray-400"
        order2={2}
        type="dark"
        linearGradient={true}
        revereseRow={"flex flex-col md:flex-row-reverse "}
      />
       <CTA/>
   </>
  )
}

export default PricingPage
