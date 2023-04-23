import React from "react";
import './App.css';
import './assets/css/animation.css';
import Header from "./components/header/Header";
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
    return (<>
        <Header/>
        <main>
            <Home/>
            <About/>
            <Skills/>
            <Qualification/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </main>
    </>);
}

export default App;
