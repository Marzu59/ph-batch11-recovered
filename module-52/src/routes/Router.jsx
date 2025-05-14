import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import Home from '../pages/Home';
import CategoryNEws from '../pages/CategoryNEws';

const Router = createBrowserRouter([

    {
        path: '/',
        element: <HomeLayout />,
        children: 
        [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNEws></CategoryNEws>,
                loader: ()=> fetch('news.json')
            }
        ]
    

    },
    {
        path: '/auth',
        element: <h1>Auth layout</h1>

    },
    {
        path: '/news',
        element: <h1>news layout</h1>

    },
    {
        path: '/*',
        element: <h1>Error</h1>

    }
])

export default Router;