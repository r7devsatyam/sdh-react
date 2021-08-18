import React from 'react';
import Preloader from "./Components/Preloader";
import Header from "./Components/Header";
import Hero from './Components/Hero';
import About from './Components/About';
import Service from './Components/Service';
import Statistics from './Components/Statistics';
import Portfolio from './Components/Portfolio';
import Clients from './Components/Clients';
import WorkCategory from './Components/WorkCategory';
import Testinomial from './Components/Testinomial';
import Form from './Components/Form';
import Footer from './Components/Footer';
import MenuRightBorder from './Components/MenuRightBorder';
import MobileMenu from './Components/MobileMenu';
import MobileContact from './Components/MobileContact';

const App = () => {
    //creating orignal refrance to the root//
    const renderRef = React.useRef(0);
    
    return (
        <div>
            <Preloader ref={renderRef} />
            <Header  ref={renderRef} />
            <MenuRightBorder />
            <MobileMenu/>
            <MobileContact/>
            <Hero  />
            <About  />
            <Service  />
            <Statistics  />
            <Portfolio  />
            <Clients  />
            <WorkCategory  />
            <Testinomial  />
            <Form  />
            <Footer  />
        </div>
    )
}

export default App
// render(<App />, document.getElementById("root"));
