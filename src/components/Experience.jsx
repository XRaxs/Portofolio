import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Toga from "../assets/images/toga.png";
import Garis from "../assets/images/garis.png";
import Tas from "../assets/images/tas.png";

const Experience = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            easing: "ease", // Jenis easing
            once: true, // Hanya sekali animasi
        });
    }, []);

    return (
        <section id="experience" className="py-20">
            <h2 className="font-bold text-[34px] text-start ml-[100px] mb-[80px]" data-aos="fade-up">
                Experience
            </h2>
            <div className="flex justify-center">
                <div>
                    <div className="w-[416px] h-[552px] bg-white pt-[35px] pl-[28px] rounded-[25px] shadow-lg">
                        <div className="flex" data-aos="fade-up" data-aos-delay="100">
                            <img
                                src={Tas}
                                alt="Tas Kantor"
                                className="w-[25px] h-[25px]"
                            />
                            <div className="ml-[12px] -mt-[12px]">
                                <h3 className="text-[14px] font-light">
                                    2025-Now
                                </h3>
                                <p className="w-[350px] font-medium text-[20px]">
                                    Siswa CodingCamp 2025 DBSFoundation
                                </p>
                            </div>
                        </div>
                        <img
                            src={Garis}
                            alt="Garis tepi"
                            className="ml-[11px] -mt-[30px]"
                            data-aos="fade-up" aos-delay="250"
                        />
                        <div className="flex mt-6" data-aos="fade-up" data-aos-delay="200">
                            <img
                                src={Tas}
                                alt="Tas Kantor"
                                className="w-[25px] h-[25px]"
                            />
                            <div className="ml-[12px] -mt-[12px]">
                                <h3 className="text-[14px] font-light">2025</h3>
                                <p className="w-[350px] font-medium text-[20px]">
                                    Kerja Praktik di Dinas Kominfo Sidoarjo
                                </p>
                            </div>
                        </div>
                        <img
                            src={Garis}
                            alt="Garis tepi"
                            className="ml-[11px] -mt-[30px]"
                            data-aos="fade-up" aos-delay="350"
                        />
                        <div className="flex mt-6" data-aos="fade-up" data-aos-delay="300">
                            <img
                                src={Tas}
                                alt="Tas Kantor"
                                className="w-[25px] h-[25px]"
                            />
                            <div className="ml-[12px] -mt-[12px]">
                                <h3 className="text-[14px] font-light">2024</h3>
                                <p className="w-[350px] font-medium text-[20px]">
                                    Petugas Sistem Layanan & Rujukan Terpadu
                                    Dinas Sosial Kabupaten Bangkalan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-20">
                    <div className="w-[416px] h-[552px] bg-white pt-[35px] pl-[28px] rounded-[25px] shadow-lg">
                        <div className="flex" data-aos="fade-up" data-aos-delay="100">
                            <img
                                src={Toga}
                                alt="Topi Toga"
                                className="w-[35px] h-[35px]"
                            />
                            <div className="ml-[12px] -mt-[12px]">
                                <h3 className="text-[14px] font-light">
                                    2022-Now
                                </h3>
                                <p className="w-[250px] font-medium text-[20px]">
                                    System Information - Universitas Trunojoyo
                                    Madura
                                </p>
                            </div>
                        </div>
                        <img
                            src={Garis}
                            alt="Garis tepi"
                            className="ml-[18px] -mt-[50px]"
                            data-aos="fade-up" aos-delay="250"
                        />
                        <div className="flex mt-3" data-aos="fade-up" data-aos-delay="200">
                            <img
                                src={Toga}
                                alt="Topi Toga"
                                className="w-[35px] h-[35px]"
                            />
                            <div className="ml-[12px] -mt-[12px]">
                                <h3 className="text-[14px] font-light">
                                    2019-2022
                                </h3>
                                <p className="w-[250px] font-medium text-[20px]">
                                    SMKN 3 Bangakalan
                                </p>
                            </div>
                        </div>
                        <img
                            src={Garis}
                            alt="Garis tepi"
                            className="ml-[18px] mt-[10px]"
                            data-aos="fade-up" aos-delay="350"
                        />
                        <div className="flex mt-3.5" data-aos="fade-up" data-aos-delay="300">
                            <img
                                src={Toga}
                                alt="Topi Toga"
                                className="w-[35px] h-[35px]"
                            />
                            <div className="ml-[12px] -mt-[12px]">
                                <h3 className="text-[14px] font-light">
                                    2016-2019
                                </h3>
                                <p className="w-[250px] font-medium text-[20px]">
                                    SMPN 3 Bangkalan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
