import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/Components/Header';
import Body from './src/Components/Body';
const ele = document.getElementById('root')
const root = ReactDOM.createRoot(ele);

const AppLayout = () => {
    return(
        <>
            <Header />
            <Body />
        </>
    )
}

root.render(<AppLayout />)
