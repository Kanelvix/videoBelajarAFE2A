import React from 'react'
import Navbar from '../components/organisms/Navbar'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
