import HeroImage from "../assets/images/hero.png";
import React, { useEffect } from "react";
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
        <section
            id="hero"
            className="h-screen text-black flex items-center flex-col md:flex-row"
        >
            <div
                className="pl-[10px] space-y-6 z-10 mt-32 md:pl-[60px] lg:pl-[100px] w-full md:w-[450px] lg:w-[650px]"
                data-aos="fade-up"
            >
                <h1 className="text-[24px] sm:text-[28px] text-center md:text-start font-bold">
                    Hi, I am Imam Arishandi Irfanto, a Web Developer
                </h1>
                <p className="font-light text-[16px] sm:text-[18px] md:text-[20px] text-center md:text-start">
                    My name is Imam Arishandi Irfanto and I am a web developer
                    with a strong interest in technology. I have solid
                    experience in designing and developing websites. I also
                    master several frameworks.
                </p>
                <button className="mt-4 px-6 py-3 w-[180px] h-[60px] text-[14px] bg-black border-black border-1 text-white rounded-[8px] hover:text-black hover:bg-white hover:border-1 hover:border-black mx-auto md:mx-0" data-aos="fade-up">
                    <a href="https://drive.google.com/file/d/18-8v847Rog10uEdLHoP2QkY-pjo5MVrf/view?usp=sharing">
                        See My Resume
                    </a>
                </button>
            </div>
            <div className="lg:absolute right-0 md:pr-10 lg:pr-[100px] mt-8 lg:mt-16 hidden md:flex" data-aos="fade-up">
                <img
                    src={HeroImage}
                    alt="Imam"
                    className="ml-auto rounded-full sm:hidden md:inline-flex w-[250px] md:w-[300px] lg:w-[400px] h-[250px] md:h-[300px] lg:h-[400px] object-cover border-4 border-white mx-auto md:mx-0"
                />
            </div>
        </section>
    );
};

export default Hero;
