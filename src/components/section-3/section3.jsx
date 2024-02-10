import './section3.scss';

import Img1 from './Img/section3-img1.png';
import Img2 from './Img/section3-img2.png'

function Section3(){
    return (
        <section className="section-3">

            <div className="section3-block1">
                <h1>Support to drive your<br/> business forward</h1>
            </div>

            <div className="section3-block2">
                <ul className="section3-block2Ul">
                    <li className="active-li">Equity Management</li>
                    <li>Compensation</li>
                    <li>Venture Capital</li>
                    <li>Liquidity</li>
                </ul>
            </div>

            <div className="section3-block3">
                <div>
                    <h1>Equity Management</h1>
                    <p>Manage all things equity in one place, including cap tables, valuations, fundraising, issuing shares, expense accounting, and equity planning.</p>
                    <button>Learn more <img src={Img1}/></button>
                </div>
                <div>
                    <img src={Img2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section3;