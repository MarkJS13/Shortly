import logo from '/src/assets/images/logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx';

const Nav = (props) => {

    const toggleMenu = () => {  
        props.setToggle(true);
    }

    return(
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <nav>
                <li> Features </li>
                <li> Pricing </li>
                <li>Resources</li>
            </nav>

            <div className="login-section">
                <li>Login</li>
                <li className='signup'>Sign Up</li>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <RxHamburgerMenu/>
            </div>
        </header>
    )
}

export default Nav;