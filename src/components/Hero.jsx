import hotel2 from "../../src/assets/hotel_5.jpg"
function Hero() {
    const cities = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Miami",
        "San Francisco",
        "Las Vegas",
    ]
    return (
        <div className='relative  flex flex-col items-center justify-center p-10  text-white  bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url(${hotel2})` }}>
            <div className='bg-black opacity-60 absolute inset-0'></div>
            <div className='relative z-10 mt-36'>
                <div className='text-center mb-6'>
                    <h2 className='text-[#e89755] mb-3 font-bold text-4xl'>
                        Discover Your Perfect Stay: Book Hotels with Ease!
                    </h2>
                    <p className='text-2xl'>
                        Find and book the best hotels worldwide at unbeatable prices.
                    </p>
                    <button className='mt-5'>Book Now</button>
                </div>
                <section className='p-6 bg-white mx-auto max-w-xl shadow-lg rounded-2xl'>


                    <h2 class="text-2xl font-bold text-gray-800 ">
                        Book Your Stay
                    </h2>



                    <form className="space-y-4">
                        <div>
                            <label htmlFor='destination' className="text-sm block font-medium text-gray-700 ">Destination</label>
                            <input
                                list='destination'
                                type="text"
                                name='destination'
                                placeholder="e.g., New York, Paris..."
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black "
                            />
                            <datalist id='destination'>
                                {cities.map((city, index) => (
                                    <option value={city} key={index} />
                                ))}
                            </datalist>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor='checkin' className="text-sm block font-medium text-gray-700 ">Check-in</label>
                                <input
                                    type="date"
                                    id='checkin'
                                    name='checkin'
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                />
                            </div>
                            <div>
                                <label htmlFor='checkout' className="text-sm block font-medium text-gray-700 ">Check-out</label>
                                <input
                                    type="date"
                                    id='checkout'
                                    name='checkout'
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                />
                            </div>
                        </div>



                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor='guests' className="text-sm block font-medium text-gray-700 ">Guests</label>
                                <input
                                    type="number"
                                    min={1}
                                    value={1}
                                    max={10}
                                    id='guests'
                                    name='guests'
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                />
                            </div>
                            <div>
                                <label htmlFor='rooms' className="text-sm block font-medium text-gray-700 ">Rooms</label>
                                <input
                                    type="number"
                                    min={1}
                                    value={1}
                                    max={5}
                                    id='rooms'
                                    name='rooms'
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                />
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='mt-3' type='submit'>
                                Search Hotels
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Hero
