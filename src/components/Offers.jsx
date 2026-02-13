import hotel_1 from '../assets/offer_1.jpg'
import hotel_2 from '../assets/offer_2.jpg'
import hotel_3 from '../assets/offer_3.jpg'
import hotel_4 from '../assets/offer_4.jpg'
const Offers = () => {
    const oofers = [
        {
            id: 1,
            title: 'Special Offer 1',
            description: 'Get 20% off on your next booking!',
            priceOff: '20%',
            expiryDate: '2024-12-31',
            image: hotel_1
        },
        {
            id: 2,
            title: 'Special Offer 2',
            description: 'Book now and get a free breakfast!',
            priceOff: 'Free Breakfast',
            expiryDate: '2024-11-30',
            image: hotel_2
        },
        {
            id: 3,
            title: 'Special Offer 3',
            description: 'Get a free room upgrade when booking 2 rooms!',
            priceOff: 'Free Room Upgrade',
            expiryDate: '2024-10-31',
            image: hotel_3
        },
        {
            id: 4,
            title: 'Special Offer 4',
            description: 'Book a stay of 3 nights and get the 4th night free!',
            priceOff: '4th Night Free',
            expiryDate: '2024-09-30',
            image: hotel_4
        }
    ]
    return (
        <section className='py-12 px-6'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-bold'>Special Offers</h2>
                <p className='text-gray-600 mt-2 text-lg max-w-xl mx-auto mb-5'>Don't miss out on our exclusive deals!</p>
                <div className='grid sm:grid-cols-1 md:grid-cols-4  gap-6'>
                    {oofers.map(offer => (
                        <div key={offer.id} className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer p-4'>
                            <img src={offer.image} alt={offer.title} className='w-full h-48 object-cover' />
                            <div className='p-5'>
                                <h3 className='text-lg font-semibold mb-2 text-[#e89755]'>{offer.title}</h3>
                                <p className='text-gray-600 mb-4 text-sm'>{offer.description}</p>
                            </div>
                            <p className='text-xl text-gray-500 mt-2'>
                                Offer expires on: {offer.expiryDate}
                            </p>
                            <div className='flex items-center justify-between pt-4'>
                                <span className=' font-bold '>Save  {offer.priceOff} % today</span>
                                <button>View Offer</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Offers
