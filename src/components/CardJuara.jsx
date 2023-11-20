/* eslint-disable react/prop-types */
const CardJuara = ({ gambar, judul, judul2, deskripsi, deskripsi2 }) => {
    return (
        <div className=" flex flex-col gap-4 bg-white rounded-md shadow-xl w-[300px] md:w-[340px] h-[660px] mx-auto">
            <img
                src={gambar}
                className="rounded-md rounded-b-none w-full max-h-[360px] object-cover bg-center "
            />

            <div className="px-3 mt-0 md:-mt-4 justify-start">
                <h2 className="font-semibold text-2xl text-center">{judul}</h2>
                <h2 className="font-semibold text-lg text-center mb-1">{judul2}</h2>
                <p className="text-xl font-light my-2 text-center">{deskripsi}</p>
                <p className="text-md font-light text-center">{deskripsi2}</p>
            </div>
        </div>
    )
}

export default CardJuara