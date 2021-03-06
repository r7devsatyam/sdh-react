import React from "react";
import Preloader from "./Components/Preloader";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service";
import Statistics from "./Components/Statistics";
import Portfolio from "./Components/Portfolio";
import Clients from "./Components/Clients";
import WorkCategory from "./Components/WorkCategory";
import Testinomial from "./Components/Testinomial";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import MenuRightBorder from "./Components/MenuRightBorder";
import MobileMenu from "./Components/MobileMenu";
import MobileContact from "./Components/MobileContact";
import StatisticsComponent from "./Components/StatisticsComponent";
import ServiceComponent from "./Components/Service.component";
const App = () => {
  //creating orignal refrance to the root//
  const renderRef = React.useRef(0);

  return (
    <>
      <Preloader ref={renderRef} />
      <Header />
      <MenuRightBorder />
      <MobileMenu />
      <MobileContact />
      <Hero />
      <About />
      <Service />
      <Statistics />
      <Portfolio />
      <Clients />
      <WorkCategory />
      <Testinomial />
      <Form />
      <Footer />
    </>
  );
};

export default App;
// render(<App />, document.getElementById("root"));
