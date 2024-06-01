import { LOGO_URL } from "../utils/constants"
import {useState} from "react"

const Logo = () => {
    return (
        <div className="logo">
            <img alt='brand logo' src={LOGO_URL} />
        </div>
    )
}

const Search = () => {

    return(
        <div className='search'>
            <input type="text" placeholder="search here" />
            <button>Search</button>
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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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
                <Search />
                <Navigation />
            </div>
        </>
    )
}

export default Header