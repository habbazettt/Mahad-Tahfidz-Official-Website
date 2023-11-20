import Card from "../components/Card"
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const KegiatanKami = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="flex flex-col gap-10 w-full mt-0 md:mt-20">
            <h1 className="font-bold md:text-5xl text-3xl text-center" data-aos='fade-right' data-aos-duration='1500'><span className="text-blue-900">Kegiatan</span> Rutin</h1>

            <div className="flex flex-wrap gap-8">
                <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200' className="flex justify-center items-center mx-auto">
                    <Card
                        gambar="/public/sholat-jamaah.jpg"
                        judul="Sholat Berjamaah"
                        deskripsi="Di Ma'had Tahfidz UIN Sunan Gunung Djati Bandung, kegiatan shalat berjamaah menjadi inti spiritualitas para santri. Setiap hari, shalat Shubuh, Maghrib, dan Isya dilaksanakan di Gedung Moderasi Beragama, menciptakan suasana kekhusukan dan kebersamaan."
                    />
                </div>

                <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='250' className="flex justify-center items-center mx-auto">
                    <Card
                        gambar="/public/halaqoh-tasmi.jpg"
                        judul="Halaqoh Tahfidz"
                        deskripsi="Setiap pagi dan malam, Ma'had Tahfidz UIN Sunan Gunung Djati Bandung menyelenggarakan Halaqah Tahfidz. Para santri dengan penuh semangat menyetorkan hafalan ziyadah Al-Quran dan melakukan murojaah hafalan kepada mentor halaqah masing-masing."
                    />
                </div>

                <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300' className="flex justify-center items-center mx-auto">
                    <Card
                        gambar="/public/barzanji.JPG"
                        judul="Maulid Al-Barzanji"
                        deskripsi="Setiap malam Jum'at di Ma'had Tahfidz UIN Sunan Gunung Djati Bandung, santri mengisi waktu dengan kegiatan shalawatan mingguan atau Barzanji. Dalam ungkapan cinta kepada Nabi Muhammad SAW, melantunkan shalawat yang penuh kekhidmatan."
                    />
                </div>

                <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='400' className="flex justify-center items-center mx-auto">
                    <Card
                        gambar="/public/kajian-kitab.jpg"
                        judul="Kajian Kitab"
                        deskripsi="Setiap minggu, Ma'had Tahfidz UIN Sunan Gunung Djati Bandung menggelar kajian kitab sebagai bagian integral dari pembinaan keilmuan santri. Kajian melibatkan kitab-kitab penting seperti Tafsir, Ulumul Quran, dan Qiraah Sab'ah."
                    />
                </div>

                <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='450' className="flex justify-center items-center mx-auto">
                    <Card
                        gambar="/public/olahraga-2.JPG"
                        judul="Olahraga Weekend"
                        deskripsi="Di Ma'had Tahfidz UIN Sunan Gunung Djati Bandung, kegiatan olahraga mingguan menjadi bagian integral dari pola hidup sehat dan seimbang para santri. Setiap Minggu pagi, para santri bersemangat mengikuti sesi senam bersama untuk menjaga kebugaran tubuh."
                    />
                </div>

                <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='500' className="flex justify-center items-center mx-auto">
                    <Card
                        gambar="/public/moderasi-tasmi.jpg"
                        judul="Tasmi Bil Ghoib"
                        deskripsi="Simaan Al-Quran Bilghoib di Ma'had Tahfidz UIN Sunan Gunung Djati Bandung merupakan kegiatan unik di mana mahasantri membaca hafalan Al-Quran tanpa melihat naskah, secara langsung di mic."
                    />
                </div>
            </div>
        </div>
    )
}

export default KegiatanKami