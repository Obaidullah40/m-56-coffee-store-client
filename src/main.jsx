import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import CoffeeDetails from './components/CoffeeDetails';
import Signin from './components/Signin';
import SignUp from './components/signUp';
import AuthProvider from './auth/AuthProvider';
import Users from './components/Users';


const router = createBrowserRouter([
  {

    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://coffee-store-server-rosy-five.vercel.app/coffees'),
        Component: Home,
      },
      {
        path: 'addCoffee',
        Component: AddCoffee,
      },
      {
        path: 'coffee/:id',
        loader: ({ params }) => fetch(`https://coffee-store-server-rosy-five.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path: 'updateCoffee/:id',
        loader: ({ params }) => fetch(`https://coffee-store-server-rosy-five.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: 'signin',
        Component: Signin,
      },
      {
        path: 'signup',
        Component: SignUp,
      },
      {
        path: 'users',
        loader: () => fetch('https://coffee-store-server-rosy-five.vercel.app/users'),
        Component: Users
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)