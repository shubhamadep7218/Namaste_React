import React from "react";


const Logo = () => {

    return(
        <div className="logo">
            <h1>Logo</h1>
        </div>
    )
}
const Search = () => {

    return(
        <div>
            <input type="text" placeholder="search here" />
        </div>
    )
}

const User = () => {

    return(
        <div>
            <p>User icon</p>
        </div>
    )
}

 const Header = () => {
    return(
        <>
            <div className="header">
                <Logo />
                <Search />
                <User />
            </div>
        </>
    )
}

export default Header