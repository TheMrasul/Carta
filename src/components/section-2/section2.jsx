import './section2.scss'

import Img1 from "./Img/section2-img1.png"
import Img2 from "./Img/section2-img2.png"
import Img3 from "./Img/section2-img3.png"
import Img4 from "./Img/section2-img4.png"
import Img5 from "./Img/section2-img5.png"
import Img6 from "./Img/section2-img6.png"

function Section2(){
    return (
        <section className="section-2">
            <div className="section2-block1">
                <h1>
                    A generation of ownership <br/> built on Carta
                </h1>
            </div>

            <div className="section2-block2">
                <h1>2,201,980</h1>
                <span>Equity owners</span>
            </div>

            <div className="section2-block3">
                <div className="section2-block3UnderText">
                    <h1>$2.5T</h1>
                    <span>Assets on platform</span>
                </div>
                <div className="section2-block3UnderText">
                    <h1 className="number">30,000</h1>
                    <span>Companies</span>
                </div>
                <div className="section2-block3UnderText">
                    <h1>$100B</h1>
                    <span>Assets under administration</span>
                </div>
            </div>

            <div className="section2-block4">
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
                <img src={Img5} alt="" />
                <img src={Img6} alt="" />
            </div>

        </section>
    )
}

export default Section2;