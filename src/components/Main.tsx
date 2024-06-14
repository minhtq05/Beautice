import Intro from "./Intro";
import MainServices from "./MainServices";
import AboutUs from "./AboutUs";
import ProfessionalTeams from "./ProfessionalTeams";
import ContactUs from "./ContactUs";

function Main() {
    return (
        <div className="sm:overflow-x-hidden">
            <Intro />
            <MainServices />
            <AboutUs />
            <ProfessionalTeams />
            <ContactUs />
        </div>
    )
}

export default Main