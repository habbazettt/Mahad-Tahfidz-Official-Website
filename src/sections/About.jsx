import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const slides = [
        {
            url: '/slide-1.jpg'
        },
        {
            url: '/slide-2.JPG'
        },
        {
            url: '/slide-3.JPG'
        },
        {
            url: '/slide-4.JPG'
        },
        {
            url: '/slide-5.JPG'
        },
        {
            url: '/slide-6.JPG'
        },
        {
            url: '/slide-7.JPG'
        },
        {
            url: '/slide-8.JPG'
        },
        {
            url: '/slide-9.JPG'
        },
        {
            url: '/public/slide-10.JPG'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-14 md:gap-40">
            <div className="flex flex-col gap-3">
                <h1 className="font-bold md:text-5xl text-3xl" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-blue-900">Profil</span> Singkat</h1>
                <p className="font-light" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300'>Mahad Tahfidz UIN Sunan Gunung Djati Bandung adalah lembaga yang merupakan bagian dari kampus UIN Sunan Gunung Djati Bandung. Ditempati oleh mahasiswa aktif UIN Bandung yang berhasil lolos melalui jalur mandiri tahfidz, mahad ini menyediakan asrama untuk santri putra dan putri. Fokus utamanya adalah pada program Tahfidzul Quran, menciptakan lingkungan yang mendukung penghafalan Al-Quran. Terletak di kecamatan Cileunyi, Mahad Tahfidz UIN Sunan Gunung Djati Bandung menjadi pusat pembinaan keilmuan dan keagamaan bagi mahasiswa yang berkomitmen pada pengembangan diri melalui tahfidz Al-Quran.</p>

                <button className="p-2 bg-blue-800 hover:bg-blue-900 hover:shadow-md duration-300 text-white w-full md:w-1/3 rounded-lg mt-1" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300'><Link to='/about'>Selengkapnya</Link></button>
            </div>

            <div className="max-w-[900px] h-[220px] md:h-[500px] w-full mx-auto relative group shadow-2xl" data-aos='fade-down' data-aos-duration='1500'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-xl bg-cover bg-center object-contain duration-700">
                    {/* Left Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                </div>
                <div className="flex top-4 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-lg md:text-xl cursor-pointer">
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About