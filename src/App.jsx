import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomBar from './components/BottomBar'
import Shutdown from './components/Shutdown'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Help from './components/Help'

function App() {
  const [open, isOpen] = useState(false);
  const shutdownState = useSelector(state => state.shutdown);
  const theme = useSelector(state => state.theme);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  return (
    <>
      {
        shutdownState ? <Shutdown /> : <>
          <img className='fixed w-dvw h-dvh -z-10' src="bg.png" alt="" />
          <div className='w-dvw h-dvh flex flex-col justify-between items-center'>
            <Navbar />
            <button className='absolute top-10 right-2 right-0 animate-pulse flex flex-col items-center' onClick={() => isOpen(true)}>
              <img src={`questionWhite.svg`} className='z-10 w-6 h-6' alt="" />
              <span className='text-white'>May I Help</span>
            </button>
            {
              open && <Help open={open} isOpen={isOpen} />
            }
            <Outlet />
            <BottomBar />
          </div>
        </>

      }

    </>
  )
}

export default App
