import React from 'react'
import Banner from '../components/Banner'
import Features from '../components/Features'
import CTA from '../components/CTA'


const FeaturesPage = () => {
  return (
   <>
    <Banner
        heading={"Features"}
        description={
          "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        }
        image={{
          desktop: "/images/features/desktop/hero.jpg",
          mobile: "/images/features/mobile/hero.jpg",
          tablet: "/images/features/tablet/hero.jpg",
        }}
        bgColor="bg-black"
        headingColor="text-white"
        descriptionColor="text-gray-400"
        order2={2}
        type="dark"
        linearGradient={true}
        revereseRow={"flex flex-col md:flex-row-reverse "}
      />
        <Features/>
        <CTA/>
   </>
  )
}

export default FeaturesPage
