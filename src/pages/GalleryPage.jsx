import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Gallery from "../sections/Gallery"

const GalleryPage = () => {
    return (
        <main className="relative w-full">
            <Navbar />

            <section className="xl:padding-1 wide:padding-r padding-b my-20">
                <Gallery />
            </section>

            <section className="bg-blue-950 padding-x padding-t pb-8 text-white">
                <Footer />
            </section>
        </main>
    )
}

export default GalleryPage