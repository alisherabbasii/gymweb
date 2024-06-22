import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import MainPage from './Components/MainPage/MainPage';
import AboutUs from './Components/AboutUs/AboutUs';
import OurServices from './Components/Services/OurServices';
import ClientFeedback from './Components/ClientFeedback/ClientFeedback';
import Gallery from './Components/Gallery/Galery';
import Trainers from './Components/OurTrainers/Trainer';
import MembershipOffers from './Components/MemberShipOffers/MembershipOffers';
import ContactUsForm from './Components/contactUsForm/ContactUs';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>

        
            {isLoading && <Loader />}
            <Header />
            <main>
                <MainPage />
                <AboutUs />
                <OurServices />
                {/* <ClientFeedback /> */}
                <Gallery />
                {/* <Trainers /> */}
                <MembershipOffers />
                <ContactUsForm />
                {/* <Blogs /> */}
                
            </main>
            <div style={{position: "fixed", bottom: "60px", right: "20px"}} >
                <a href="https://wa.me/5491155901207" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <img src="assets/img/logo/whatsapp.png" alt="Whatsapp" />
                </a>
            </div>
            <Footer />

            
            

          
        </>
    );
}

export default App;
