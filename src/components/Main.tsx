import Intro from "./Intro";
import MainServices from "./MainServices";
import AboutUs from "./AboutUs";
import ProfessionalTeams from "./ProfessionalTeams";
import ContactUs from "./ContactUs";

function Main() {
    return (
        <div className="flex flex-col items-center">
            <Intro />
            <MainServices />
            <AboutUs />
            <ProfessionalTeams />
            <ContactUs />
        </div>
    )
}

export default Main