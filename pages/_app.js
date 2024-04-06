import '/src/app/globals.css'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isUserAuthenticated } from '../pages/api/auth';
import Login from "../pages/Login";

export default function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    // Check authentication status when component mounts
    const isAuthenticated = isUserAuthenticated();

    // Redirect to login page if user is not authenticated
    if (!isAuthenticated && router.pathname !== '/login') {
      router.push('/login');
    }
  }, []);

  return (
    <>
      {router.pathname === '/login' ? (
        <Login />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )

}