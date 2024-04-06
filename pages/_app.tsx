import "/src/app/globals.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { isUserAuthenticated } from "./api/auth";
import { Kodchasan } from "next/font/google";
import React, { useEffect } from "react";
import Login from "./Login";

const kodchasan = Kodchasan({
   subsets: ["latin"],
   weight: ["400", "700"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();

   useEffect(() => {
      const isAuthenticated = isUserAuthenticated();
      if (!isAuthenticated && router.pathname !== "/Login") {
         router.push("/Login");
      }
   });

   return (
      <>
         <div className={kodchasan.className}>
            {router.pathname === "/Login" ? (
               <Login />
            ) : (
               <Component {...pageProps} />
            )}
         </div>
      </>
   );
}
