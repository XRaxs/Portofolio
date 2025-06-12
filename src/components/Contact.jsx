import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';  // Corrected import
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    // Membuat referensi untuk form
    const formRef = useRef();

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Kirim email menggunakan EmailJS
        emailjs
            .sendForm('service_s5dsy3l', 'template_53dr1ts', e.target, "ZEy6JQk0auWLrjtZv") // Menyertakan e.target sebagai parameter ketiga
            .then(
                (result) => {
                    // Jika email berhasil dikirim
                    console.log('Email sent successfully', result.text);
                    // Reset form setelah pengiriman berhasil
                    formRef.current.reset();
                    // Tampilkan notifikasi toast sukses
                    toast.success("Your message was sent successfully!");
                },
                (error) => {
                    // Jika terjadi error saat mengirim email
                    console.log('Error sending email', error.text);
                    // Tampilkan notifikasi toast error
                    toast.error("There was an error sending your message.");
                }
            );
    };

    return (
        <section id="contact" className="py-20 ">
            <h2 className="font-bold text-[34px] text-start ml-[100px] mb-[80px]">
                Contact
            </h2>
            <div className="">
                <div className="flex pl-[100px]">
                    <div className="w-[350px]">
                        <h3 className="text-2xl font-medium">
                            Let’s talk about anything!
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Don’t like the form? Send me an{" "}
                            <a href="mailto:your_email@example.com" className="text-black font-bold">
                                email
                            </a>
                            .👋🏼
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <div className="w-[868px]">
                            <div className="flex justify-between mb-14">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-[420px] p-3 rounded-[18px] border border-gray-300"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="w-[420px] p-3 rounded-[18px] border border-gray-300"
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full p-3 rounded-[18px] border border-gray-300 mb-14"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="w-full p-3 rounded-[18px] border border-gray-300 mb-20"
                                rows="5"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-[250px] h-[60px] py-3 bg-black border-1 border-white hover:border-black hover:text-black hover:bg-white text-white rounded-[18px]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Tambahkan komponen untuk menampilkan toast */}
            <ToastContainer />
        </section>
    );
};

export default Contact;
