import '/src/app/globals.css'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isUserAuthenticated } from '../pages/api/auth';
import Login from "../pages/Login";
import SalePage from './SalePage';

export default function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    // Check authentication status when component mounts
    const isAuthenticated = isUserAuthenticated();

    // Redirect to login page if user is not authenticated
    if (!isAuthenticated && router.pathname !== '/Login') {
      router.push('/Login');
      console.log("isAuthenticated");
    }
  }, []);

  return (
    <>
      {router.pathname === '/Login' ? (
        <Login />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )

}