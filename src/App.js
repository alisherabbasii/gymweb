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
        }, 3000);

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
                <ClientFeedback />
                <Gallery />
                <Trainers />
                <MembershipOffers />
                <ContactUsForm />
                <Blogs />
            </main>
            <Footer />
        </>
    );
}

export default App;
