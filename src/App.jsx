import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import RecentPosts from "./components/RecentPosts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            <Navbar />
            <Hero />
            <Experience />
            <RecentPosts />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
