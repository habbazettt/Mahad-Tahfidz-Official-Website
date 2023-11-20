import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'
import Timeline from "../components/Timeline"
import TableMentor from "../components/TableMentor"
import Article from "../components/Article"

const AboutPage = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <main className="relative w-full">
            <Navbar />

            <section className="xl:padding-1 wide:padding-r padding-b">
                <div className="flex flex-col mt-28 justify-center items-center">
                    <h1 className="font-bold md:text-5xl text-3xl" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-blue-900">Profil</span> Kami</h1>
                </div>

                <div className="px-5 lg:px-10 mt-3 lg:mt-4 font-light" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300'>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                </div>

                <div className="px-5 lg:px-10 mt-3 lg:mt-4 font-light" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='400'>
                    <Article />
                </div>


                <div className="px-5 py-7 lg:px-10 mt-8 lg:mt-4">
                    <div>
                        <h1 className="font-semibold md:text-5xl text-3xl text-center mb-5" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-blue-900">Murobbi</span> Ruhina</h1>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <img
                                src="/public/Abi-Asep.jpeg"
                                className="rounded-lg shadow-xl"
                                width={300}
                                data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300'
                            />
                            <div className="flex flex-col items-center justify-center text-center">
                                <h1 className="text-blue-900 font-bold text-lg md:text-2xl" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='400'>Dr. KH. Asep Mustafa Kamal, M. Ag.</h1>
                                <p className="font-light sm:text-lg" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='500'>(Direktur Mahad Tahfidz Al-Quran UIN SGD)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-5 lg:px-10 mt-3 lg:mt-4">
                    <TableMentor />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-semibold md:text-5xl text-3xl" data-aos='fade-up' data-aos-duration='1500' data-aos-delay='200'><span className="text-blue-900">Jadwal</span> Harian</h1>
                    <Timeline />
                </div>
            </section>

            <section className="bg-blue-950 padding-x padding-t pb-8 text-white">
                <Footer />
            </section>
        </main>
    )
}

export default AboutPage