import React from 'react';
import Preloader from "./Components/Preloader";
import Header from "./Components/Header";
import Hero from './Components/Hero';
import About from './Components/About';
import Service from './Components/Service';

const App = () => {
    return (
        <div>
            <Preloader/>
            <Header/>
            <Hero/>
            <About/>
            <Service/>
        </div>
    )
}

export default App
// render(<App />, document.getElementById("root"));
