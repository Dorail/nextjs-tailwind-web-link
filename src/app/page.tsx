import Image from "next/image";

// Component
import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import Hero2 from "./Component/Hero2";
import Banner from "./Component/Banner";
import Banner2 from "./Component/Banner2";
import Banner3 from "./Component/Banner3";
import Main from "./Component/Main";
import Main2 from "./Component/Main2";
import Footer from "./Component/Footer";


export default function Home() {
  return (
    <main>
      <Nav />

      <Hero />
      
      <Hero2 />

      <Banner />

      <Banner2 />

      <Banner3 />

      <Main />

      <Main2 />

      <Footer />



    </main>
  );
}
