import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GotoTop from '@/components/GotoTop'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="relative flex flex-col justify-center overflow-x-hidden" >
      <Header />
      <Outlet />
      <Footer />
      <GotoTop />
    </div>
  )
}

