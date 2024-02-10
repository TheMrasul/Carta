import React from "react";
import './App.scss'
import Header from './components/Header/Header';
import Section1 from "./components/section-1/section1";
import Section2 from "./components/section-2/section2";
import Section3 from "./components/section-3/section3";
import Section4 from "./components/section-4/section4";
import Section5 from "./components/section-5/section5";
import Section6 from "./components/section-6/section6";
import Section7 from "./components/section-7/section7";

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="App">
                <Header />
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
                <Section7/>
            </div>
        )
    }
}

export default App;
