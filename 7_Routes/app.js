import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/Components/Header';
import Body from './src/Components/Body';
const ele = document.getElementById('root')
const root = ReactDOM.createRoot(ele);

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import About from './src/Components/About';
import Contact from './src/Components/Contact';
import RestMenu from './src/Components/RestMenu';

const AppLayout = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout />,
        children : [
            {
                path: '/',
                element : <Body />
            },
            {
                path: '/about',
                element : <About />
            },
            {
                path: '/restaurant/:restId',
                element : <RestMenu />
            },
            {
                path: '/contact',
                element : <Contact />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />)
