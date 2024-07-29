import React from "react";
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import Features from "../components/Features";



const HomePage = () => {
  return (
    <>
      <Banner
        heading={"Create and share your photo Stories."}
        description={
          "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        }
        image={{
          desktop: "/images/home/desktop/create-and-share.jpg",
          mobile: "/images/home/mobile/create-and-share.jpg",
          tablet: "/images/home/tablet/create-and-share.jpg",
        }}
        bgColor="bg-black"
        headingColor="text-white"
        descriptionColor="text-gray-400"
        imageFilterClass="light"
        linkText="Get an invite"
        order2={2}
        type="dark"
        revereseRow={"flex flex-col md:flex-row-reverse "}
        linearGradient={true}
      />
      <Banner
        heading="Beautiful stories every time"
        description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        image={{
          desktop: "/images/home/desktop/beautiful-stories.jpg",
          mobile: "/images/home/mobile/beautiful-stories.jpg",
          tablet: "/images/home/tablet/beautiful-stories.jpg",
        }}
        bgColor="bg-white"
        headingColor="text-black"
        descriptionColor="text-gray-400"
        type="lightText"
        linkText="View the stories"
        order2={1}
        revereseRow={"flex flex-col md:flex-row "}
      />
      <Banner
        heading="Designed for everyone"
        description="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
        image={{
          desktop: "/images/home/desktop/designed-for-everyone.jpg",
          mobile: "/images/home/mobile/designed-for-everyone.jpg",
          tablet: "/images/home/tablet/designed-for-everyone.jpg",
        }}
        bgColor="bg-white"
        headingColor="text-black"
        descriptionColor="text-gray-400"
        linkText="View the stories"
        order1="order-first"
        order2={2}
        type="lightText"
        revereseRow={"flex flex-col md:flex-row-reverse "}
      />

      <Grid column={4}/>
      <Features columns={3}/>
    </>
  );
};

export default HomePage;
