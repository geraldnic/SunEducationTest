import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Package from "../components/package";
import Product from "../components/product";
import Portofolio from "../components/portofolio";
import Footer from "../components/footer";
import SwiperComponent from "../components/swiper";
import Consultation from "../components/consultation";

function Home() {
  return (
    <>
      <Hero />
      <Package />
      <Product />
      <Portofolio />
      <SwiperComponent />
      <Consultation />
      <Footer />
    </>
  );
}

export default Home;
