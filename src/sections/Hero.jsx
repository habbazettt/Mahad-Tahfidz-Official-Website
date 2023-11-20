import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="w-full max-h-screen ">
            <div className="relative mt-14 md:mt-0">
                <img
                    src="/public/hero3.JPG"
                    alt="hero image"
                    className="top-0 left-0 w-screen h-screen object-cover"
                />

                <div className="bg-black/60 absolute top-0 left-0 w-full h-screen" />

                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white mt-0 md:mt-12'>
                    <div className='md:left-[5%] max-w-screen m-auto absolute p-4 z-40 flex flex-col-reverse md:flex-row gap-8 md:gap-20'>
                        <div className="flex flex-col justify-center items-start">
                            <p className="text-3xl mb-2 md:mb-3">بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ</p>
                            <h1 className='font-bold text-2xl md:text-4xl drop-shadow-2xl '>
                                Selamat Datang di <br /> Website Resmi Mahad Tahfidz Al-Quran <br /> UIN Sunan Gunung Djati Bandung
                            </h1>
                        </div>
                        <div className="flex justify-center items-center ml-0 md:ml-40">
                            <img
                                src="/public/mahadFullColor.svg"
                                className="w-[300px] sm:w-[400px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero