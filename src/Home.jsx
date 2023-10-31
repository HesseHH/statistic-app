import { useEffect, useLayoutEffect } from 'react';

import { AppRouter } from './router/AppRouter';
import { Navbar } from './shared';
import { SideBar } from './shared/components/SideBar';

import './anim.css'

export const Home = () => {
  useLayoutEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])


  return (
    <div className='bg-gray-200 dark:bg-slate-950'>
      <div className='flex'>
        <SideBar />
        <div className='w-full'>
          <Navbar />
          <AppRouter />
        </div>
      </div>
    </div>
  )
}
