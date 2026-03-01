import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Industries from '../components/Industries';
import RegionalPresence from '../components/RegionalPresence';
import Assurance from '../components/Assurance';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Resources from '../components/Resources';
import Contact from '../components/Contact';

export default function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <About />
            <Products />
            <Industries />
            <RegionalPresence />
            <Assurance />
            <Testimonials />
            <Stats />
            <Resources />
            <Contact />
        </>
    );
}
