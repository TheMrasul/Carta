import './section1.scss'

import img1 from './img/section1.png';
import img2 from './img/section2.png';
import img3 from './img/section3.png';
import img4 from './img/section4.png';

function Section1(){
    return (
        <section className="section-1">
            <div className="section1-sector1">
                <img src={img1} alt="" />
                <img src={img2} alt="" className="section1-sector1Img"/>
            </div>
            <div className="section1-sector2">
                <h1>Infrastructure for innovators</h1>
                <p>Carta’s platform of software and services lays the groundwork so you can focus on building the future.</p>
                <div className="section1-sector2Under">
                    <button>Request a demo</button> 
                    <a href="/">Take a video tour</a>
                </div>
            </div>
            <div className="section1-sector3">
                <img src={img3} alt="" className="section1-sector3Img"/>
                <img src={img4} alt="" className="section1-sector3Img2"/>
            </div>
        </section>
    )
}

export default Section1;