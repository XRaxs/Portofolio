import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Kanto from "../assets/images/kanto.png";
import BerbagiCeritaku from "../assets/images/berbagi-ceritaku.png";
import Cofee from "../assets/images/cofee.png";
import Vscode from "../assets/images/vsc.png";
import Linkedin from "../assets/images/linkedin.png";
import Ai from "../assets/images/ai.png";
import Github from "../assets/images/github.png";

const RecentPosts = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            easing: "ease", // Jenis easing
            once: true, // Hanya sekali animasi
        });
    }, []);

    return (
        <section id="recent-posts" className="py-20">
            <h2 className="font-bold text-[34px] text-center md:text-start md:ml-[100px] mb-[80px]" data-aos="fade-up">
                Recent Posts
            </h2>
            <div className="flex justify-center" data-aos="fade-up">
                <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="bg-white w-[300px] h-[330px] p-6 rounded-lg shadow-lg flex flex-col justify-between items-center">
                        <a href="https://sikanto.netlify.app/">
                            <img
                                src={Kanto}
                                alt="Post 1"
                                className="w-full h-40 object-fit rounded-md"
                            />
                            <h3 className="mt-6 text-xl font-semibold h-[60px] text-center">
                                Capstone Project Studi Independent
                            </h3>
                            <p className="mt-2 text-center">
                                10 Juni 2025 | Website
                            </p>
                        </a>
                    </div>
                    <div className="bg-white w-[300px] h-[330px] p-6 rounded-lg shadow-lg flex flex-col justify-between items-center">
                        <a href="https://xraxs.github.io/BerbagiCeritaku/">
                            <img
                                src={BerbagiCeritaku}
                                alt="Post 2"
                                className="w-full h-40 object-fit rounded-md"
                            />
                            <h3 className="mt-6 text-xl font-semibold h-[60px] text-center">
                                Project Berbagi Ceritaku
                            </h3>
                            <p className="mt-2 text-center">
                                27 Mei 2025 | Website
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex justify-center mt-28 md:gap-16 lg:gap-32">
                <div className="flex flex-col" data-aos="fade-in" data-aos-duration="1000">
                    <img
                        src={Cofee}
                        alt="cangkir kopi"
                        className="h-[32px] w-[32px] mx-auto"
                    />
                    <h2 className="font-semibold">Cup of Coffee</h2>
                </div>
                <div className="flex flex-col" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
                    <img
                        src={Vscode}
                        alt="cangkir kopi"
                        className="h-[32px] w-[32px] mx-auto"
                    />
                    <h2 className="font-semibold">Vscode</h2>
                </div>
                <div className="flex flex-col" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
                    <img
                        src={Linkedin}
                        alt="cangkir kopi"
                        className="h-[32px] w-[32px] mx-auto"
                    />
                    <h2 className="font-semibold">Linkedin</h2>
                </div>
                <div className="flex flex-col" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                    <img
                        src={Ai}
                        alt="cangkir kopi"
                        className="h-[32px] w-[32px] mx-auto"
                    />
                    <h2 className="font-semibold">Artificial Intelligence</h2>
                </div>
                <div className="flex flex-col" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">
                    <img
                        src={Github}
                        alt="cangkir kopi"
                        className="h-[32px] w-[32px] mx-auto"
                    />
                    <h2 className="font-semibold">Github</h2>
                </div>
            </div>
        </section>
    );
};

export default RecentPosts;
