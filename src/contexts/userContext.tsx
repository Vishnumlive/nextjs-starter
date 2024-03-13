import React, { createContext, useEffect,useState } from "react";

import { auth } from "@/firebase/firebase";
import { getDataByFieldValue } from "@/firebase/firestore/data";

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [user, setUser] = useState(null);

  // fetch a user from a fake backend API
  useEffect(() => {
    // const fetchUser = () => {
    //   // this would usually be your own backend, or localStorage
    //   // for example
    //   fetch("https://randomuser.me/api/")
    //     .then((response) => response.json())
    //     .then((result) => setUser(result.results[0]))
    //     .catch((error) => console.log("An error occured"));
    // };

    // fetchUser();

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
       // console.log("Executing the code"+user.uid);

       const result = getDataByFieldValue('users', "userId",user.uid)
               .then((response) => setUser(response))
        .then((result) => setUser(result.result))
        .catch((error) => console.log(error));
      
        
      } else {
        console.log('User is signed out')
      }
    })

    return () => unsubscribe()
    
  }, []);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };