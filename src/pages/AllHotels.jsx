import React from 'react'

import { useNavigate } from 'react-router-dom'
import { FaLocationArrow, FaStar } from 'react-icons/fa'
import roomsData from '../AllRooms'
const AllHotels = () => {
    const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
        return (
            <label className='gap-3 items-center flex cursor-pointer text-sm mt-2'>
                <input type="checkbox" checked={selected} onChange={(e) => (e.target.checked, label)} />
                <span className='font-light select-none'>{label}</span>
            </label>

        )
    }
    const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
        return (
            <label className='gap-3 items-center flex cursor-pointer text-sm mt-2'>
                <input type="radio" name='sortOptions' checked={selected} onChange={() => (label)} />
                <span className='font-light select-none'>{label}</span>
            </label>

        )
    }
    const navigate = useNavigate()
    const roomFilter = [
        "Single Room",
        "Double Room",
        "Swimming Pool",
        "Family Suite"
    ]
    const priceFilter = [
        "0 to 500",
        "500 to 1000",
        "1000 to 1500",
        "1500 to 2000",

    ]
    const sortOptions = [
        "Price: Low to High",
        "Price: High to Low",
        "Newest"
    ]
    const [openFilter, setOpenFilter] = React.useState(false)

    return (
        <div className='px-40 flex flex-col-reverse lg:flex-row justify-between pt-64 items-start'>
            <div>

                <div className='flex flex-col items-center text-left px-40'>
                    <h1 className='text-4xl text-[#e89755] md:text-2xl'>Hotel Room</h1>
                    <p className='text-gray-500 text-sm mt-2 md:text-base max-w-170 text-center'>
                        Welcome to our hotel booking website! We offer a wide selection of hotels worldwide, catering to all your travel needs. Whether you're looking for a luxurious stay, Start planning your next trip today!
                    </p>
                </div>
                {roomsData.map((room, index) => (
                    <div key={index} className='flex flex-col md:flex-row items-start py-10 gap-6 border-gray-300 border-b '>
                        <img onClick={() => navigate(`/rooms/${room._id}`)} src={room.images} alt={room.hotel} className=' max-h-65 rounded-xl shadow-lg object-cover  cursor-pointer' />
                        <div>
                            <p>{room.hotel}</p>
                            <p>{room.city}</p>
                            <div className='flex items-center mb-2 text-yellow-400'>
                                {[...Array(room.rating)].map((_, i) => (
                                    <span key={i}><FaStar /></span>
                                ))}
                            </div>
                            <div className='text-gray-500 flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>{room.address}</p>
                            </div>
                            <div className='mt-3'>
                                {room.amenities.map((amenity, index) => (
                                    <small className='p-2 rounded-lg bg-gray-200 mr-2'>{amenity}</small>
                                ))}
                            </div>
                            <p className='text-[#e89755] mt-3 font-bold'>{room.pricePerNight}$/Night</p>
                        </div>

                    </div>
                ))}
            </div>
            <div className='p-4 m-4 w-80 border  border-gray-300 text-gray-600'>
                <div className={`flex justify-between items-center px-5 border-b  border-gray-500 ${openFilter ? "border-b" : ""}`}>
                    <p>Filters</p>
                    <div>
                        <span onClick={() => setOpenFilter(!openFilter)} className='lg:hidden cursor-pointer'>{openFilter ? "Hide " : "Show "}</span>
                        <span className='hidden lg:block'>Clear</span>
                    </div>
                </div>
                <div className={` ${openFilter ? "h-auto" : "h-0   lg:h-auto"} overflow-hidden transition-all duration-700`}>
                    <div className='px-5 pt-6'>
                        <p className='text-gray-500 pb-2'>Popular Filters</p>
                        {roomFilter.map((room, index) => (
                            <CheckBox key={index} label={room} />
                        ))}
                    </div>
                    <div className='px-5 pt-6'>
                        <p className='text-gray-500 pb-2'>Price Range</p>
                        {priceFilter.map((price, index) => (
                            <CheckBox key={index} label={price} />
                        ))}
                    </div>
                    <div className='px-5 pt-6'>
                        <p className='text-gray-500 pb-2'>Sort By</p>
                        {sortOptions.map((sort, index) => (
                            <RadioButton key={index} label={sort} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllHotels
