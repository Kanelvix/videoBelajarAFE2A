import React from 'react'
import Navbar from '../components/organisms/Navbar'
import { Outlet } from 'react-router'

export const AuthLayout = () => {
  return (
    <>
      <Navbar page="logInSignIn" />
      <Outlet />
    </>
  )
}