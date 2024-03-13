"use client"  
// import { authoptions } from "pages/api/auth/[...nextauth]";
import React, { useContext } from 'react'

import { UserContext } from '@/contexts/userContext';
import withAuth from '@/utils/withAuth'
import { useSession } from 'next-auth/react';


function AddUser() {

  const session = useSession({
    required: true,
    // onUnauthenticated() {
    //   redirect('/signin');
    // },
  });

  console.log(session);

  const user = useContext(UserContext);
  // console.log("Logging user details");

 console.log(user);

  if(user?.userRole !=="admin"){
    //console.log(user.userRole);

    return (<p>Restricted page</p>)
  }

  
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Add User
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6">
                User Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-1 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                  Password
                </label>
            
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-1 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                  Confirm Password
                </label>
            
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-1 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                  User Role
                </label>
            
              </div>
              <div className="mt-2">
                <select className="block w-full rounded-md border-1 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <option> Editor </option>
                  <option> Admin User </option>
                </select>
                
              </div>
            </div>

            <div>
              <button
                
                className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Create User
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default withAuth(AddUser);