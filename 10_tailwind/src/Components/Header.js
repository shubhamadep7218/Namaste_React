import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"
import {useState} from "react"
import { useOnlineStatus } from "../utils/useOnlineStatus"

const Logo = () => {
    return (
        <div className="w-20">
            <Link to={'/'}><img alt='brand logo' src={LOGO_URL} /></Link> 
        </div>
    )
}



const Navigation = () => {
    const [btnName, setBtnName] = useState('login')
    const handleClick = () => {
        setBtnName(btnName === 'login' ? 'logout' : 'login')
    }
    const status = useOnlineStatus()
    return(
        <div>
            <ul className='flex gap-10'>
                <li>
                    Online Status : {status ? "🟢" : "🔴"}  
                </li>
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
            <div className="flex justify-between py-4 items-center">
                <Logo />
                <Navigation />
            </div>
        </>
    )
}

export default Header