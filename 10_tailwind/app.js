import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/Components/Header';
import Body from './src/Components/Body';
const ele = document.getElementById('root')
const root = ReactDOM.createRoot(ele);

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'

const About = lazy(()=> import('./src/Components/About'))
const Contact = lazy(()=> import('./src/Components/Contact'))
const RestMenu = lazy(()=> import('./src/Components/RestMenu'))

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
                element : <Suspense fallback={<h1>Loading .....</h1>}><About /></Suspense>
            },
            {
                path: '/restaurant/:restId',
                element : <Suspense fallback={<h1>Loading .....</h1>}><RestMenu /></Suspense>
            },
            {
                path: '/contact',
                element : <Suspense fallback={<h1>Loading .....</h1>}><Contact /></Suspense>
            }
        ]
    }
])

root.render(<RouterProvider router={router} />)
