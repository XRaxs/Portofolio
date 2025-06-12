import { Link } from "react-scroll";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            easing: "ease", // Jenis easing
            once: true, // Hanya sekali animasi
        });
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 py-5">
                <div className="flex items-center h-[35px]">
                    <div className="absolute left-0 ml-[100px] text-xl font-bold" data-aos="slide-right">
                        Portofolio
                    </div>
                    <div className="absolute right-0 mr-[100px] flex space-x-8 font-medium" data-aos="slide-left">
                        <div>
                            <Link
                                to="hero"
                                smooth
                                duration={500}
                                className="text-lg text-black hover:underline cursor-pointer"
                            >
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="experience"
                                smooth
                                duration={500}
                                className="text-lg text-black hover:underline cursor-pointer"
                            >
                                Experience
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="recent-posts"
                                smooth
                                duration={500}
                                className="text-lg text-black hover:underline cursor-pointer"
                            >
                                Recent Posts
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="contact"
                                smooth
                                duration={500}
                                className="text-lg text-black hover:underline cursor-pointer"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
