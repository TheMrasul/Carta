import './section6.scss';
import Img from './Img/section6.png'

function Section6(){
    return(
        <section className="section-6">
            <div className='section6-header'>
                <h1>As we plan for growth, I’m thrilled to have a partner like Carta that really scales with my startup and its needs.</h1>
            </div>
            <div className='section6-main'>
                <img src={Img} />
            </div>
            <div className='section6-footer'>
                <h1>Amber Allen</h1>
                <p>Founder & CEO, Double A Labs</p>
                <h2>Read case study</h2>
            </div>
        </section>
    )
}

export default Section6;