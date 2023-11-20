import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'
import { FaEnvelopeOpenText, FaInstagram, FaMapMarked, FaTiktok, FaWhatsapp } from "react-icons/fa"

const ContactPage = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <main className="relative w-full">
            <Navbar />

            <section className="xl:padding-1 wide:padding-r padding-b">
                <div className="flex mt-20 md:mt-20 justify-center items-center">
                    <div className="container">
                        <h1 className="font-bold md:text-5xl text-3xl text-center mt-4 md:mt-10" data-aos='fade-right' data-aos-duration='1500'><span className="text-blue-900">Informasi</span> Kontak</h1>

                        <div className="flex flex-col md:flex-row mt-10 justify-between gap-10 px-8">
                            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                                <div className="flex justify-start items-center gap-4 p-3 bg-blue-800 hover:bg-blue-900 hover:shadow-lg duration-300 ease-in text-white rounded-lg" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'>
                                    <FaWhatsapp size={26} />
                                    <h1 className="text-xs md:text-sm font-semibold">- (Ikhwan)</h1>
                                </div>

                                <div className="flex justify-start items-center gap-4 p-3 bg-blue-800 hover:bg-blue-900 hover:shadow-lg duration-300 ease-in text-white rounded-lg" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='250'>
                                    <FaWhatsapp size={26} />
                                    <h1 className="text-xs md:text-sm font-semibold">- (Akhwat)</h1>
                                </div>

                                <div className="flex justify-start items-center gap-4 p-3 bg-blue-800 hover:bg-blue-900 hover:shadow-lg duration-300 ease-in text-white rounded-lg" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300'>
                                    <FaEnvelopeOpenText size={26} />
                                    <h1 className="text-xs md:text-sm font-semibold">mahad.tahfidz@uinsgd.ac.id</h1>
                                </div>

                                <div className="flex justify-start items-center gap-4 p-3 bg-blue-800 hover:bg-blue-900 hover:shadow-lg duration-300 ease-in text-white rounded-lg" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='350'>
                                    <FaInstagram size={26} />
                                    <h1 className="text-xs md:text-sm font-semibold">@mahadtahfidz.uinbdg_</h1>
                                </div>

                                <div className="flex justify-start items-center gap-4 p-3 bg-blue-800 hover:bg-blue-900 hover:shadow-lg duration-300 ease-in text-white rounded-lg" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='400'>
                                    <FaTiktok size={26} />
                                    <h1 className="text-xs md:text-sm font-semibold">@mtauinsgd</h1>
                                </div>

                                <div className="flex justify-start items-center gap-4 p-3 bg-blue-800 hover:bg-blue-900 hover:shadow-lg duration-300 ease-in text-white rounded-lg" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='450'>
                                    <FaMapMarked size={26} />
                                    <h1 className="text-xs md:text-sm font-semibold">Jl. Raya Cileunyi, RT.1/RW.21, Cileunyi Wetan, Cileunyi, Kab. Bandung</h1>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex justify-center items-center mx-auto" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.3064112205507!2d107.7555287!3d-6.9367917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c3655c66817f%3A0xb1d84df7ee3a8bc!2sKampus%203%20UIN%20Sunan%20Gunung%20Djati%20Bandung!5e0!3m2!1sid!2sid!4v1700202004383!5m2!1sid!2sid" allowfullscreen loading="lazy" className="w-[400px] md:w-[700px] h-[400px] md:h-[500px] shadow-xl rounded-lg"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-950 padding-x padding-t pb-8 text-white">
                <Footer />
            </section>
        </main>
    )
}

export default ContactPage