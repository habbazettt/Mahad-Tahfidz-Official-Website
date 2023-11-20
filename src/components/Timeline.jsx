import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const Timeline = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="max-w-[1000px] mx-auto w-full grid grid-cols-7 px-6 py-7" data-aos='fade-up' data-aos-duration='1500' data-aos-delay='300'>
            {/* Stack 1 */}
            <div className="col-span-3 w-full h-full">
                <div className="w-full h-full bg-blue-800 rounded-md p-3 md:pl-4">
                    <h1 className="text-white text-lg font-medium py-2">03.30-04.00 WIB</h1>
                    <p className="text-gray-100 text-md sm:text-lg ">Qiyamul Lail Berjamaah</p>
                </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-blue-800"></div>
                <div className="absolute w-6 h-6 rounded-full bg-blue-800 z-10"></div>
            </div>
            <div className="col-span-3 w-full h-full"></div>

            {/* Stack 2 */}
            <div className="col-span-3 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-blue-800"></div>
                <div className="absolute w-6 h-6 rounded-full bg-blue-800 z-10"></div>
            </div>
            <div className="col-span-3 w-full h-full">
                <div className="w-full h-full bg-blue-800 rounded-md p-3 md:pl-4">
                    <h1 className="text-white text-lg font-medium py-2">04.00-04.30 WIB</h1>
                    <p className="text-gray-100 text-md sm:text-lg ">Sholat Shubuh Berjamaah</p>
                </div>
            </div>

            {/* Stack 3 */}
            <div className="col-span-3 w-full h-full">
                <div className="w-full h-full bg-blue-800 rounded-md p-3 md:pl-4">
                    <h1 className="text-white text-lg font-medium py-2">04.30-06.00 WIB</h1>
                    <p className="text-gray-100 text-md sm:text-lg ">Tasmi Shubuh</p>
                </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-blue-800"></div>
                <div className="absolute w-6 h-6 rounded-full bg-blue-800 z-10"></div>
            </div>
            <div className="col-span-3 w-full h-full"></div>

            {/* Stack 4 */}
            <div className="col-span-3 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-blue-800"></div>
                <div className="absolute w-6 h-6 rounded-full bg-blue-800 z-10"></div>
            </div>
            <div className="col-span-3 w-full h-full">
                <div className="w-full h-full bg-blue-800 rounded-md p-3 md:pl-4">
                    <h1 className="text-white text-lg font-medium py-2">06.00-06.30 WIB</h1>
                    <p className="text-gray-100 text-md sm:text-lg ">Persiapan kegiatan Perkuliahan</p>
                </div>
            </div>

            {/* Stack 5 */}
            <div className="col-span-3 w-full h-full">
                <div className="w-full h-full bg-blue-800 rounded-md p-3 md:pl-4">
                    <h1 className="text-white text-lg font-medium py-2">06.30-17.55 WIB</h1>
                    <p className="text-gray-100 text-md sm:text-lg ">Kegiatan Perkuliahan</p>
                </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-blue-800"></div>
                <div className="absolute w-6 h-6 rounded-full bg-blue-800 z-10"></div>
            </div>
            <div className="col-span-3 w-full h-full"></div>

            {/* Stack 6 */}
            <div className="col-span-3 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-blue-800"></div>
                <div className="absolute w-6 h-6 rounded-full bg-blue-800 z-10"></div>
            </div>
            <div className="col-span-3 w-full h-full">
                <div className="w-full h-full bg-blue-800 rounded-md p-3 md:pl-4">
                    <h1 className="text-white text-lg font-medium py-2">17.45-18.15 WIB</h1>
                    <p className="text-gray-100 text-md sm:text-lg ">Sholat Maghrib Berjamaah</p>
                </div>
            </div>

            {/* Stack 7 */}
            <div className="col-span-3 w-full h-full">
                <div className="w-full h-full bg-blue-800 rounded-md p-3 md:pl-4">
                    <h1 className="text-white text-lg font-medium py-2">18.15-19.00 WIB</h1>
                    <p className="text-gray-100 text-md sm:text-lg ">Istirahat dan Makan Malam</p>
                </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-blue-800"></div>
                <div className="absolute w-6 h-6 rounded-full bg-blue-800 z-10"></div>
            </div>
            <div className="col-span-3 w-full h-full"></div>

            {/* Stack 8 */}
            <div className="col-span-3 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-blue-800"></div>
                <div className="absolute w-6 h-6 rounded-full bg-blue-800 z-10"></div>
            </div>
            <div className="col-span-3 w-full h-full">
                <div className="w-full h-full bg-blue-800 rounded-md p-3 md:pl-4">
                    <h1 className="text-white text-lg font-medium py-2">19.00-19.30 WIB</h1>
                    <p className="text-gray-100 text-md sm:text-lg ">Sholat Isya Berjamaah</p>
                </div>
            </div>

            {/* Stack 9 */}
            <div className="col-span-3 w-full h-full">
                <div className="w-full h-full bg-blue-800 rounded-md p-3 md:p-4">
                    <h1 className="text-white text-lg font-medium py-2">19.30-21.00 WIB</h1>
                    <p className="text-gray-100 text-md sm:text-lg">Tasmi Malam/Kajian Kitab</p>
                </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-blue-800"></div>
                <div className="absolute w-6 h-6 rounded-full bg-blue-800 z-10"></div>
            </div>
            <div className="col-span-3 w-full h-full"></div>

            {/* Stack 10 */}
            <div className="col-span-3 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-blue-800"></div>
                <div className="absolute w-6 h-6 rounded-full bg-blue-800 z-10"></div>
            </div>
            <div className="col-span-3 w-full h-full">
                <div className="w-full h-full bg-blue-800 rounded-md p-3 md:pl-4">
                    <h1 className="text-white text-lg font-medium py-2">21.00-03.30 WIB</h1>
                    <p className="text-gray-100 text-md sm:text-lg ">Istirahat</p>
                </div>
            </div>
        </div>
    )
}

export default Timeline