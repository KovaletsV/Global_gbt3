import React from "react";
import "./App.css";
import {
    Footer,
    Blog,
    Header,
    WhatGPT3,
    Possibility,
    Features
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
);

export default App;
