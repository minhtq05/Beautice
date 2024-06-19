import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import GotoTop from '../components/GotoTop'

export default function App() {
  return (
    <div className="flex flex-col justify-center" >
      <Header />
      <Main />
      <Footer />
      <GotoTop />
    </div>
  )
}

