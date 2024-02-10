import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomBar from './components/BottomBar'
import Shutdown from './components/Shutdown'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
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
          <img className='w-dvw h-dvh absolute -z-10' src="bg.png" alt="" />
          <div className=''>
            <Navbar />
            <Outlet />
            <BottomBar />
          </div>
        </>

      }

    </>
  )
}

export default App
