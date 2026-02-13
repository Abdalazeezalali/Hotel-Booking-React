import hotel_1 from "../assets/hotel_1.jpg"
import hotel_2 from "../assets/hotel_2.jpg"
import hotel_3 from "../assets/hotel_3.jpg"
import hotel_4 from "../assets/hotel_4.jpg"
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'
const HotelCard = () => {
    const hotels = [
        {
            name: "Hotel 1",
            location: "Location 1",
            price: "$100",
            rating: 4.5,
            image: hotel_1
        },
        {
            name: "Hotel 2",
            location: "Location 2",
            price: "$150",
            rating: 4.0,
            image: hotel_2
        },
        {
            name: "Hotel 3",
            location: "Location 3",
            price: "$200",
            rating: 4.8,
            image: hotel_3
        },
        {
            name: "Hotel 4",
            location: "Location 4",
            price: "$120",
            rating: 4.2,
            image: hotel_4
        }
    ]

    return (
        <section className='py-12 px-6'>
            <h2 className='text-3xl font-bold mb-10 text-center'>Featured Hotels</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {hotels.map((hotel, index) => (
                    <div key={index} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer '>
                        <img src={hotel.image} alt={hotel.name} className='w-full h-48 object-cover' />
                        <div className='p-4'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-lg text-[#e89755] '>{hotel.name}</h3>
                            </div>
                            <div className='flex items-center text-yellow-500 text-sm'>
                                <span className='mr-1'>{hotel.rating}</span>
                                <FaStar />
                            </div>

                            <div className='flex items-center text-gray-500 text-sm'>
                                <FaMapMarkerAlt className=' mr-2' />
                                <span >{hotel.location}</span>
                            </div>
                            <div className='flex justify-between items-center pt-2'>
                                <p className='font-bold text-[#e89755]'>
                                    {hotel.price}
                                </p>
                                <button className='mt-4'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HotelCard
