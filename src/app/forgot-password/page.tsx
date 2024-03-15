

import { Metadata } from "next";

import { UserForgotPassword } from "@/components/Auth/UserForgotPassword";

export const metadata: Metadata = {
  title: 'Forgot Password Page',
  description: 'Pre-built components with awesome default',
};

export default function ForgotPassword() {
  
  return (

      <UserForgotPassword/>

  )
}
