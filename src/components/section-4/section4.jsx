import React from 'react';
import './section4.scss'

import ImgVector from './img/section4-vector.png';
import Img1 from './img/section4-img1.png';
import Img2 from './img/section4-img2.png';
import Img3 from './img/section4-img3.png';
import Img4 from './img/section4-img4.png';
import Img5 from './img/section4-img5.png';

function Posts(props){
    return (
        <div className="section4-posts">
            <div className="section4-Img"><img src={props.image}/></div>
            <div className="section4-postsContent"> 
                <h1>{props.mainText}</h1>
                <p>{props.underText}</p>
            </div>
            <div className='section4-linkVector'>
                <a href="#">Learn more <img src={ImgVector}/></a>
            </div>
        </div>
    )
}

function Section4(props){
    return(
        <section className="section-4">
            <div className="section4-block1">
                <h1>Built for the builders</h1>
                <p>From idea to IPO, Carta supports innovators at every<br/> stage and in every role.</p>
            </div>
            
            <div className="section4-block2">
                <Posts image={Img1} mainText='Founders' underText="Over 30,000 companies use Carta to fundraise, issue equity, and stay compliant." />
                <Posts image={Img2} mainText='HR' underText="From extending offers to answering employee equity questions, find the tools and team to support you." />
                <Posts image={Img3} mainText="Law Firms" underText="Help your clients issue equity, raise funds, and stay compliant, all in one place."/>
                <Posts image={Img4} mainText="Investors" underText="Manage your fund on Carta so you can spend more time on deals and less time dealing with your back office."/>
                <Posts image={Img5} mainText="Finance" underText="Grow and plan for the future with tools and services that help you with everything from receiving fast valuations to managing burn to running liquidity events."/>
            </div>
        </section>
    )
}

export default Section4;