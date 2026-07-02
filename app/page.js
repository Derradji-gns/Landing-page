
import Nav from "./components/nav";
import Hero from "./components/hero";
import Services from "./components/services";
import Collections from "./components/collections";
import Reviews from "./components/reviews";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Services/>
      <Collections/>
      <Reviews/>
      <Footer/>
    </div>
  );
}
