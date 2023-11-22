import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const Gallery = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="flex flex-col w-full mt-10 md:mt-20">
            <h1 className="font-bold md:text-5xl text-3xl text-center mt-4 md:mt-10" data-aos='fade-right' data-aos-duration='1500'><span className="text-blue-900">Galeri</span> MTA</h1>

            <div className="p-5 md:p-10">
                <div className="gap-5 lg:gap-8 columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8" data-aos='fade-up' data-aos-duration='1300'>
                    <img src="/gallery/gallery-1.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-2.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-3.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-4.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-5.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-6.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-7.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-8.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-9.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-10.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-11.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-12.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-13.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-14.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-15.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-16.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-17.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-18.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-19.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-20.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-21.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-22.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-23.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-24.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-25.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-26.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-27.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-28.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-29.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-30.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-31.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-32.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-33.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-34.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-35.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-36.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-37.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-38.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-39.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-40.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-41.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-42.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-43.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-44.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-45.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-46.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-47.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-48.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-49.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-50.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-51.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-52.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-53.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-54.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-55.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-56.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-57.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-58.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-59.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-60.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-61.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-62.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-63.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-64.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-65.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-66.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-67.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-68.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/gallery/gallery-69.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                </div>
            </div>
        </div>
    )
}

export default Gallery