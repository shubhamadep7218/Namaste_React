import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';

import Header from './src/Components/Header';
import Body from './src/Components/Body';
const ele = document.getElementById('root')
const root = ReactDOM.createRoot(ele);

const domain = 'dev-xn3y8g0dancfajqx.us.auth0.com'
const clientId = 'fDkvydwTMK8QYneySPyxwGGka3Ml55fj'

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import AuthButton from './src/Components/AuthButton';
import Profile from './src/Components/Profile';

const About = lazy(()=> import('./src/Components/About'))
const Contact = lazy(()=> import('./src/Components/Contact'))
const RestMenu = lazy(()=> import('./src/Components/RestMenu'))

const AppLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
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

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
