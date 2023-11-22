import CardJuara from "../components/CardJuara"
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const Prestasi = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="flex flex-col gap-10 w-full mt-0 md:mt-20">
            <h1 className="font-bold md:text-5xl text-3xl text-center" data-aos='fade-up' data-aos-duration='1500'><span className="text-blue-900">Prestasi</span> Santri</h1>

            <div className="flex flex-wrap gap-8">
                <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='200' className="flex justify-center items-center mx-auto">
                    <CardJuara
                        gambar="/royan.jpeg"
                        judul="Juara 1"
                        judul2="Cabang Tahfidz 10 Juz Putra"
                        deskripsi="(Muhammad Royan)"
                        deskripsi2="STQH ke-38 Kota Bandung 2022"
                    />
                </div>

                <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='250' className="flex justify-center items-center mx-auto">
                    <CardJuara
                        gambar="/aziz-1.jpg"
                        judul="Juara 2"
                        judul2="Cabang Tahfidz 10 Juz Putra"
                        deskripsi="(Muhammad Abdul Aziz)"
                        deskripsi2="STQH ke-38 Kota Bandung 2022"
                    />
                </div>

                <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='300' className="flex justify-center items-center mx-auto">
                    <CardJuara
                        gambar="/tamreis-1.jpeg"
                        judul="Juara 2"
                        judul2="Cabang Tahfidz 10 Juz Putra"
                        deskripsi="(Muhammad Syamsuttamreis)"
                        deskripsi2="STQH ke-38 Kota Bandung 2022"
                    />
                </div>

                <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='350' className="flex justify-center items-center mx-auto">
                    <CardJuara
                        gambar="/aziz-duta.jpg"
                        judul="Duta Tahfidz Putra"
                        judul2="UIN Sunan Gunung Djati Bandung"
                        deskripsi="(Muhammad Abdul Aziz)"
                        deskripsi2="Tahun 2023"
                    />
                </div>

                <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='400' className="flex justify-center items-center mx-auto">
                    <CardJuara
                        gambar="/ilman-2.jpg"
                        judul="Finalis Duta Santri Nasional"
                        judul2="Tahun 2023"
                        deskripsi="(Ilman Ardiansyah)"
                    />
                </div>

                <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='450' className="flex justify-center items-center mx-auto">
                    <CardJuara
                        gambar="/tamreis-2.png"
                        judul="Medali Emas"
                        judul2="Cabang Lomba MHQ 10 Juz"
                        deskripsi="(Muhammad Syamsuttamreis)"
                        deskripsi2="Pekan Olahraga Seni dan Ilmiah Se-Jawa Madura 1 PTKIN 2023"
                    />
                </div>
            </div>
        </div>
    )
}

export default Prestasi