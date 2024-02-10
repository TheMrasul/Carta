import './section5.scss';
import Img from './section5-Img/section5-img.png'

function Section5(){
    return(
        <section className="section-5">
            <div className='section5-block1'>
                <h1>Focused on the future</h1>
                <p>Innovation starts from within, so we’re always evolving our suite of products to keep you<br /> moving forward.</p>
            </div>

            <div className='section5-block2'>
                <div className='section5-textContent'>
                    <h1>Carta Total Compensation</h1>
                    <p>Make responsible compensation decisions, stay on budget, and communicate the true value of your compensation packages with Carta Total Comp.</p>
                </div>
                <div className='section5-img'>
                    <img src={Img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section5;