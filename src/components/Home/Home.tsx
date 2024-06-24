import { Link } from 'react-router-dom'
import Intro from './Intro'
import AboutUs from './AboutUs'
import MainServices from './MainServices'
import WhyChoosingUs from './WhyChoosingUs'
import Blog from './Blog'
import RequestCallService from './RequestCallService'

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Intro />
            <AboutUs />
            <MainServices />
            <WhyChoosingUs />
            <Blog />
            <RequestCallService />
        </div>
    )
}
