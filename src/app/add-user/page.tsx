"use client"  

import React from 'react'
import { useSelector } from 'react-redux';

import { AddUserDetails } from "@/components/AddUserDetails";

import withAuth from '@/utils/withAuth'


function AddUser() {
  
  const user = useSelector((state) => state.session.user );

  if(user?.userRole !=="admin"){

    return (<p>Restricted page</p>)
  }

  return (
    <>
      <AddUserDetails/>
    </>
  )
}

export default withAuth(AddUser);