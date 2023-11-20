import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const MapSection = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="flex flex-col gap-8 mt-0 md:mt-20">
            <h1 className="font-bold md:text-5xl text-3xl text-center" data-aos="fade-right" data-aos-duration='1500' data-aos-delay="500"><span className="text-blue-900">Lokasi</span> Kami</h1>

            <div className="flex mx-0 md:mx-auto" data-aos="fade-right" data-aos-duration='1500' data-aos-delay="700">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.3064112205507!2d107.7555287!3d-6.9367917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c3655c66817f%3A0xb1d84df7ee3a8bc!2sKampus%203%20UIN%20Sunan%20Gunung%20Djati%20Bandung!5e0!3m2!1sid!2sid!4v1700202004383!5m2!1sid!2sid" allowfullscreen loading="lazy" className="w-[400px] md:w-[700px] h-[400px] md:h-[700px] shadow-xl rounded-lg"></iframe>
            </div>
        </div>
    )
}

export default MapSection