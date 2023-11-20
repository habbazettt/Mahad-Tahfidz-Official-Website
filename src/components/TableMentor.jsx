import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const TableMentor = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="px-2 py-7 flex flex-col items-center mb-10">
            <h1 className="font-semibold md:text-5xl text-3xl text-center mb-5" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='500'><span className="text-blue-900">Pengurus</span> Harian</h1>

            <table data-aos='fade-right' data-aos-duration='1500' data-aos-delay='600'>
                <thead>
                    <tr className="text-xs md:text-lg">
                        <th>Ikhwan</th>
                        <th>Akhwat</th>
                    </tr>
                </thead>
                <tbody className="text-xs md:text-lg">
                    <tr>
                        <td className="px-2 py-2 bg-blue-200">Ust. Muhammad Nafi&apos; Lil Alamin, S.Sos</td>
                        <td className="px-2 py-2 bg-blue-200">Usth. Ro&apos;yu Nahriya, M.E</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 bg-blue-200/40">Ust. Ara Farhanul Ibad</td>
                        <td className="px-2 py-2 bg-blue-200/40">Usth. HJ. Ulfiyaturrohmah Azizah, S.Hum.</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 bg-blue-200">Ust. Ahmad Satria</td>
                        <td className="px-2 py-2 bg-blue-200">Usth. Adzah Labibah Amaliyah, S.Ag</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 bg-blue-200/40">Ust. Ahmad Muzayyin</td>
                        <td className="px-2 py-2 bg-blue-200/40">Usth. Nurul Hidayah</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 bg-blue-200">Ust. Muhammad Syamsuttamreis</td>
                        <td className="px-2 py-2 bg-blue-200">Usth. Makhyatul Fikriyah</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 bg-blue-200/40">Ust. Muhammad Ilyas</td>
                        <td className="px-2 py-2 bg-blue-200/40">Usth. Ade Nurmaliyani</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 bg-blue-200">Ust. Muhammad Fitrian Noor</td>
                        <td className="px-2 py-2 bg-blue-200">Usth. Ayang Sinta Patimah</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="px-2 py-2 bg-blue-200/40">Usth. Ulya Qonita</td>
                    </tr>
                    <tr>
                        <td ></td>
                        <td className="px-2 py-2 bg-blue-200">Usth. Aulia Rahmani</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableMentor