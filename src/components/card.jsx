import Picture from "./picture";
import Name from "./name";
import Title from "./title";
import Website from "./website";
import About from "./about";
import Interests from "./interests";
import Footer from "./footer";
import Buttons from "./button";
import './styles/card.css'

export default function Card() {
  return (
    <div className="container">
      <Picture />
      <div className="cardBody">
        <div className="userData">
          <Name />
          <Title />
          {/* <Website /> */}
        </div>
        <Buttons />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}