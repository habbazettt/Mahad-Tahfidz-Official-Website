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
                    <img src="/public/gallery/gallery-1.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-2.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-3.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-4.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-5.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-6.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-7.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-8.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-9.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-10.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-11.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-12.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-13.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-14.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-15.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-16.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-17.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-18.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-19.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-21.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-22.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-24.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-25.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-26.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-27.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-28.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-29.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-30.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-31.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-32.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-33.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-34.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-35.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-36.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-37.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-38.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-39.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-40.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-41.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-42.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-43.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-44.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-45.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-46.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-47.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-48.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-49.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-50.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-51.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-52.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-53.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-54.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-55.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-56.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-57.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-58.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-59.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-60.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-61.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-63.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-69.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-70.jpeg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-71.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-72.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-73.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-74.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-75.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-76.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-77.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-78.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-79.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-80.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-81.JPG" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-82.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-83.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-84.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-85.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-86.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/public/gallery/gallery-87.jpg" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                </div>
            </div>
        </div>
    )
}

export default Gallery