import React from "react";
import Hero from "../components/hero";
import Package from "../components/package";
import Product from "../components/product";
import Portofolio from "../components/portofolio";
import Footer from "../components/footer";
import SwiperComponent from "../components/swiper";
import Consultation from "../components/consultation";
import Testimonial from "../components/testimonial";
import WhatsappBtn from "../components/whatsappBtn";

function Home() {
  return (
    <>
      <Hero />
      <Package />
      <Product />
      <Portofolio />
      <Testimonial />
      <SwiperComponent />
      <Consultation />
      <Footer />
      <WhatsappBtn />
    </>
  );
}

export default Home;
