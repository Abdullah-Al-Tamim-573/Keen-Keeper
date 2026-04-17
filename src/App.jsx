

import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Shred Components/Navbar/Navbar'

function App() {
 

  return (
   <>
        <header className='geist'>
                <Navbar></Navbar>
        </header>

        <main className='geist max-w-[95%] md:max-w-[75%] mx-auto'>
              <Outlet></Outlet>
        </main>
   </>
  )
}

export default App
