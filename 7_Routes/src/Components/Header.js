import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"
import {useState} from "react"

const Logo = () => {
    return (
        <div className="logo">
            <Link to={'/'}><img alt='brand logo' src={LOGO_URL} /></Link> 
        </div>
    )
}



const Navigation = () => {
    const [btnName, setBtnName] = useState('login')
    const handleClick = () => {
        setBtnName(btnName === 'login' ? 'logout' : 'login')
    }
    return(
        <div className='navigation'>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About Us</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact Us</Link>
                </li>
                <li>
                    <button onClick={handleClick}>{btnName}</button>
                </li>
            </ul>
        </div>
    )
}

const Header = () => {
    return(
        <>
            <div className="header">
                <Logo />
                <Navigation />
            </div>
        </>
    )
}

export default Header