"use client"
import { AES, enc } from 'crypto-js';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getFromSessionStorage } from "@/lib/helper";

import { Navigation } from '@/components/Header/Navigation';

import { setUser } from '@/redux/slices/sessionSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user );
  

  const secretKey = process.env.NEXT_PUBLIC_AES_SECRET_KEY;

  React.useEffect(() => {
    const encrypted = getFromSessionStorage("firebaseToken");

      if (encrypted) {
        // Decrypt the data and parse it back to an object
        const decrypted = JSON.parse(AES.decrypt(encrypted, secretKey).toString(enc.Utf8));
        
        if(decrypted && !user){
          // console.log(decrypted);
          dispatch(setUser(decrypted));
        }
      }
  },[dispatch])

  
  return (
    <Navigation user={user}/>
  )
}
