
import './header.scss'

function Header(){
    return (
        <header className="header">
            <div className="header-span1">
                <span className="header-logo">carta</span>
                <ul className="header-ul">
                    <li className="header-li">Product</li>
                    <li className="header-li">Use Cases</li>
                    <li className="header-li">Pricing</li>
                    <li className="header-li">Recources</li>
                    <li className="header-li">Company</li>
                </ul>
            </div>
            <div className="header-span2">
                <span><a href="/">Sign in</a></span>
                <button>Request a demo</button>
            </div>
        </header>
    )
};

export default Header;