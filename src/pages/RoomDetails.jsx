import { useParams } from "react-router-dom"
import roomsData from '../AllRooms'
import { FaLocationArrow, FaStar } from 'react-icons/fa'
const RoomDetails = () => {
    const { id } = useParams()
    const hotel = roomsData.find(room => room._id === id)
    if (!hotel) {
        return <div className='px-40 pt-60 text-center text-gray-500'>Hotel not found</div>
    }
    return (
        <div className='px-4 pt-60 max-w-5xl mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold mb-4 text-3xl '>{hotel.hotel}</h1>
                <p className='mb-2'>{hotel.city}</p>
                <p className='text-gray-600 mb-2 flex items-center gap-2 justify-center'>
                    <FaLocationArrow /> {hotel.address} , {hotel.city}
                </p>
                <img className='w-full h-96 object-cover rounded-xl shadow-md mb-6' src={hotel.images} />
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2'>
                <div>
                    <h2 className='font-bold '>Room Type</h2>
                    <p className='text-gray-500'>{hotel.roomType}</p>
                    <h2 className='font-bold mt-3'>Amenities </h2>
                    <ul className='list-inside list-disc text-gray-500'>
                        {hotel.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold '>Price Per Night </h2>
                    <p className='text-gray-500'>{hotel.pricePerNight}</p>
                    <h2 className='font-semibold mt-4  mb-2 '>Rating </h2>
                    <div className='flex items-center mb-2 text-yellow-400'>
                        {[...Array(hotel.rating)].map((_, i) => (
                            <span key={i}><FaStar /></span>
                        ))}
                    </div>
                    <h2 className='font-bold mt-3'>Availability :</h2>
                    <p className={hotel.isAvailable ? "text-green-500" : "text-red-500"}>
                        {hotel.isAvailable ? "Available" : "Not Available"}
                    </p>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='mb-2 text-xl font-semibold'>Location</h2>
                <iframe title='map' src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.address)}&output=embed`} width="100%" height="450px" className='rounded-md shadow' loading='lazy'>

                </iframe>
            </div>
        </div>
    )
}

export default RoomDetails
