import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen((prev) => !prev)
    }

    return (
        <nav className='bg-blue-900 shadow-lg fixed top-0 left-0 w-full z-50'>
            <div className='mx-auto px-4 sm:px-5 lg:px-7 py-2'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-end gap-2 md:gap-4'>
                        <img
                            src='../../public/logo.svg'
                            width={46}
                        />
                        <h1 className="text-white font-light text-[14px] md:text-[18px] leading-normal">Website Resmi <br />Mahad Tahfidz Al-Quran</h1>
                    </div>

                    {/* Navlinks */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            {navLinks.map((link, index) => (
                                <a key={index} className='text-white px-3 py-2 duration-200 ease-in hover:bg-blue-800 rounded-md'><Link to={link.link}>{link.title}</Link></a>
                            ))}
                        </div>
                    </div>
                    {/* Hamburger */}
                    <div className='mr-[2px] flex md:hidden'>
                        <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-white text-xl hover:text-blue-900 hover:bg-white focus:outline-none focus-within: ring-2 focus-within:ring-offset-1 focus:ring-offset-blue-900 focus:ring-gray-400 ease-in-out duration-300'>
                            <span className='sr-only'>Open Main Menu</span>
                            {open == true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                open ? (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            {navLinks.map((link, index) => (
                                <a key={index} className='text-white block px-3 py-2 rounded-md text-base duration-500 ease-in-out hover:bg-blue-800 hover:font-medium'><Link to={link.link}>{link.title}</Link></a>
                            ))}
                        </div>
                    </div>
                ) : null
            }
        </nav >
    )
}

export default Navbar