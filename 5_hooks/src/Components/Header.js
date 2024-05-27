import { LOGO_URL } from "../utils/constants"

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
    return(
        <div className='navigation'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Login</li>
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