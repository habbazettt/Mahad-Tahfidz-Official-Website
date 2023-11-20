/* eslint-disable react/prop-types */
const Card = ({ gambar, judul, deskripsi }) => {
    return (
        <div className=" flex flex-col gap-4 bg-white rounded-md shadow-xl w-[340px] md:w-[340px] h-[480px] mx-auto">
            <img
                src={gambar}
                className="rounded-md rounded-b-none w-full max-h-[200px] object-cover bg-center"
            />

            <div className="px-3 mt-0 md:-mt-4 justify-start gap-4">
                <h2 className="font-semibold text-2xl text-center">{judul}</h2>
                <p className="text-sm font-light mt-1">{deskripsi}</p>
            </div>
        </div>
    )
}

export default Card