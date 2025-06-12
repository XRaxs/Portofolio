import { Link } from "react-scroll";
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <div className="flex items-center justify-between h-[35px]">
                    <div className="absolute left-0 ml-[50px] md:ml-[100px] text-xl font-bold" data-aos="slide-right">
                        Portofolio
                    </div>

                    {/* Hamburger Menu for Mobile/Tablet */}
                    <div className="lg:hidden flex items-center space-x-4" data-aos="fade-in" data-aos-delay="500">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="text-3xl text-black md:ml-6"
                        >
                            {isMenuOpen ? '×' : '≡'}
                        </button>
                    </div>

                    {/* Navbar links for larger screens */}
                    <div className="hidden lg:absolute right-0 mr-[100px] lg:flex space-x-8 font-medium" data-aos="slide-left">
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

                    {/* Mobile Menu for smaller screens */}
                    <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-[60px] left-0 right-0 bg-white shadow-lg`}>
                        <div className="flex flex-col items-center py-5 space-y-4">
                            <div>
                                <Link
                                    to="hero"
                                    smooth
                                    duration={500}
                                    className="text-lg text-black hover:underline cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
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
                                    onClick={() => setIsMenuOpen(false)}
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
                                    onClick={() => setIsMenuOpen(false)}
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
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
