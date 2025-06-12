import HeroImage from "../assets/images/hero.png";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            easing: "ease", // Jenis easing
            once: true, // Hanya sekali animasi
        });
    }, []);

    return (
        <section id="hero" className="h-screen text-black flex items-center">
            <div className="space-y-6 z-10 mt-14 pl-[100px] w-[650px]" data-aos="fade-up">
                <h1 className="text-[28px] text-start font-bold w-[650px]">
                    Hi, I am Imam Arishandi Irfanto, a Web Developer
                </h1>
                <p className="font-light text-[20px] text-start w-[650px]">
                    My name is Imam Arishandi Irfanto and I am a web developer with
                    a strong interest in technology. I have solid experience in
                    designing and developing websites. I also master several
                    frameworks.
                </p>
                <button className="mt-4 px-6 py-3 w-[180px] h-[60px] text-[14px] bg-black border-black border-1 text-white rounded-[8px] hover:text-black hover:bg-white hover:border-1 hover:border-black">
                    <a href="https://drive.google.com/file/d/18-8v847Rog10uEdLHoP2QkY-pjo5MVrf/view?usp=sharing">
                        See My Resume
                    </a>
                </button>
            </div>
            <div className="absolute right-0 pr-[100px]" data-aos="fade-up">
                <img
                    src={HeroImage}
                    alt="Imam"
                    className="ml-auto rounded-full w-[400px] h-[400px] object-cover border-4 border-white"
                />
            </div>
        </section>
    );
};

export default Hero;
