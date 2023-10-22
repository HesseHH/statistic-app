import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Navbar } from './shared'

export const Home = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}
