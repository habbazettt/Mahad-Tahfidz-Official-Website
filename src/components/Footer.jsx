import { FaArrowUp, FaGithub, FaGoogleDrive, FaHouseUser, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

const navLinks = [
    {
        title: "Beranda",
        link: "/",
    },
    {
        title: "Tentang Kami",
        link: "/about",
    },
    {
        title: "Galeri",
        link: "/gallery",
    },
    {
        title: "Kontak",
        link: "/contact",
    }
]

const Footer = () => {
    return (
        <div>
            <ScrollToTop smooth className='flex justify-center items-center bg-blue-800 hover:bg-blue-900 duration-300 ease-in' component={<FaArrowUp />} />
            <div className='max-w-[1300px] mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 text-white justify-between'>
                <div className='gap-5'>
                    <div className='flex gap-3 items-center'>
                        <img
                            src='../../public/logo.svg'
                            width={54}
                        />
                        <h1 className="text-white text-[17px] md:text-[20px] leading-normal">Website Resmi <br />Mahad Tahfidz Al-Quran</h1>
                    </div>

                    <p className='py-3 font-extralight text-md'>Mahad Tahfidz Al-Qur`an UIN Sunan Gunung Djati Bandung adalah sebuah lembaga pendidikan yang berfokus pada pengembangan kemampuan menghafal dan memahami Al-Qur’an bagi mahasiswa UIN Bandung.</p>

                    <div className='flex justify-between md:w-[75%] cursor-pointer'>
                        <div className='p-3 bg-blue-800 hover:bg-transparent hover:border-white hover:ring-2 duration-300 ease-in rounded-lg'>
                            <a href='https://www.instagram.com/mahadtahfidz.uinbdg_/'><FaInstagram size={26} /></a>
                        </div>

                        <div className='p-3 bg-blue-800 hover:bg-transparent hover:border-white hover:ring-2 duration-300 ease-in rounded-lg'>
                            <a href='https://www.tiktok.com/@mtauinsgd'><FaTiktok size={26} /></a>
                        </div>

                        <div className='p-3 bg-blue-800 hover:bg-transparent hover:border-white hover:ring-2 duration-300 ease-in rounded-lg'>
                            <a href='https://drive.google.com/drive/folders/1Mnmb3QBruLhqTkJ1D4xWe0nDBZXUnrIU?usp=sharing' target='_blank' rel='noreferrer'><FaGoogleDrive size={26} /></a>
                        </div>

                        <div className='p-3 bg-blue-800 hover:bg-transparent hover:border-white hover:ring-2 duration-300 ease-in rounded-lg'>
                            <a href='https://github.com/habbazettt/Mahad-Tahfidz-Official-Website' target='_blank' rel='noreferrer'><FaGithub size={26} /></a>
                        </div>
                    </div>
                </div>

                <div className='ml-0 xl:ml-20 mb-10'>
                    <h6 className='font-medium text-3xl mb-2'>Menu</h6>
                    <ul>
                        {navLinks.map((link, index) => (
                            <a key={index} className='text-white block px-3 py-2 pl-0 rounded-md text-base'><Link to={link.link}>{link.title}</Link></a>
                        ))}
                    </ul>
                </div>
                <div className=' flex flex-col gap-5 -mt-8 items-center'>
                    <img
                        src='/public/mahadFullColor.svg'
                        width={200}
                    />

                    <h1 className='text-center clear-left text-xl font-bold'>Mahad Tahfidz Al-Quran <br />UIN Sunan Gunung Djati Bandung</h1>
                    <div className='flex flex-col items-start'>
                        <div className='flex items-center justify-center gap-4 mb-2'>
                            <FaHouseUser className='w-[50px] h-[50px] md:w-[36px] md:h-[36px]' />
                            <h1 className='text-sm'>Jl. Raya Cileunyi, RT.1/RW.21, Cileunyi Wetan, Cileunyi, Kab. Bandung</h1>
                        </div>
                        <div className='flex items-center justify-start gap-3 mb-2'>
                            <FaWhatsapp size={24} />
                            <h1>- (Ikhwan)</h1>
                        </div>
                        <div className='flex items-center justify-center gap-3 mb-2'>
                            <FaWhatsapp size={24} />
                            <h1> - (Akhwat)</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-[1px] w-[95%] bg-white/40 flex mx-auto rounded-full' />

            <div className='mt-5 flex flex-col md:flex-row justify-between text-center gap-2 font-extralight px-0 md:px-5'>
                <h1>Copyright 2023, All Rights Reserved</h1>
                <h1>Mahad Tahfidz Al-Quran UIN Bandung</h1>
            </div>

        </div >
    )
}

export default Footer