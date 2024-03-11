// utils/withAuth.js

import { useRouter } from "next/navigation";
import {useSession } from 'next-auth/react';
import { useEffect } from "react";



const withAuth = (WrappedComponent) => {

  return function WithAuthVerification(props) {
    
    // const { data: session, status } = useSession();

    const { data: session, status } = useSession({
      required: true,
      // onUnauthenticated() {
      //   redirect('/signin');
      // },
    });

    if (status === 'loading') {
      // Render loading state or spinner while session status is being fetched
      return <p></p>;
    }

    if (!session) {
      // If no session is found, redirect to login page
      return <RedirectToLogin />;
    }else{
      console.log(session);
    }

    // If session exists, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  function RedirectToLogin() {
    const router = useRouter();
    // Redirect to login page
    useEffect(() => {
      router.push('/signin');
    }, []);

    return null; // Return null while redirecting
  }
};

export default withAuth;