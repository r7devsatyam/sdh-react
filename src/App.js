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

const App = () => {
    return (
        <div>
            <Preloader/>
            <Header/>
            <Hero/>
            <About/>
            <Service/>
            <Statistics/>
            <Portfolio/>
            <Clients/>
            <WorkCategory/>
            <Testinomial/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default App
// render(<App />, document.getElementById("root"));
