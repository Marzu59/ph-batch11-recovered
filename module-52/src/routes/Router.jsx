import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import Home from '../pages/Home';
import CategoryNEws from '../pages/CategoryNEws';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../layout/AuthLayout';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoute from '../components/PrivateRoute';
import LoadingIcon from '../pages/LoadingIcon';

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
                loader: ()=> fetch('/news.json'),
                hydrateFallbackElement: <LoadingIcon></LoadingIcon>
            }
        ]
    

    },
    {
        path: '/auth',
        element:  <AuthLayout></AuthLayout> ,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>

            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]

    },
    {
        path: '/news-details/:id',
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute> ,
        loader: ()=> fetch('/news.json'),
        hydrateFallbackElement: <LoadingIcon></LoadingIcon>

    },
    {
        path: '/*',
        element: <h1>Error</h1>

    }
])

export default Router;