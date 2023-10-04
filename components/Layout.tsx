'use client'
import { ReactNode, FC, useEffect } from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'

import { useStateContext } from '../contexts/ContextProvider'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import ThemeSettings from '@/components/ThemeSettings'
import Footer from '@/components/Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext()

  function getStoredThemeColor(): string | null {
    return localStorage.getItem('colorMode')
  }

  function getStoredThemeMode(): string | null {
    return localStorage.getItem('themeMode')
  }

  useEffect(() => {
    const storedThemeColor = getStoredThemeColor()
    const storedThemeMode = getStoredThemeMode()

    if (storedThemeColor && storedThemeMode) {
      setCurrentColor(storedThemeColor)
      setCurrentMode(storedThemeMode)
    }
  }, [])

  return (
    <>
      <div>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent>
              <button
                type='button'
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className='text-2xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray'
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'
              style={{ boxShadow: 'rgb(113 122 131 / 11%) 0px 7px 30px 0px' }}
            >
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Layout
