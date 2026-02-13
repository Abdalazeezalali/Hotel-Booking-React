import { FaStar } from 'react-icons/fa'
import test1 from '../assets/testimonial_1.jpg'
import test2 from '../assets/testimonial_2.png'
import test3 from '../assets/testimonial_3.jpg'
const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            review: "Amazing experience! The hotel was beautiful and the staff were incredibly friendly. Highly recommend!",
            address: "New York, USA",
            rating: 5,
            image: test1
        },
        {
            id: 2,
            name: "Jane Smith",
            review: "Had a wonderful stay! The amenities were top-notch and the location was perfect for exploring the city.",
            address: "London, UK",
            rating: 4,
            image: test2
        },
        {
            id: 3,
            name: "Michael Johnson",
            review: "The hotel exceeded my expectations! The rooms were spacious and the service was exceptional. Will definitely return!",
            address: "Sydney, Australia",
            rating: 5,
            image: test3
        },
        {
            id: 4,
            name: "Emily Davis",
            review: "A fantastic stay! The hotel had a great atmosphere and the staff went above and beyond to make our visit memorable.",
            address: "Toronto, Canada",
            rating: 4,
            image: test1
        }
    ]
    return (
        <section className='py-16 bg-gray-50'>
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-[#e89755]">What Our Guests Say</h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    Real reviews from our satisfied customers. We take pride in providing exceptional service and unforgettable experiences. Hear what our guests have to say about their stay with us!
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                            <div className="flex items-center mb-4 gap-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-[#e89755]">{testimonial.name}</h3>
                                    <p className="text-gray-500 text-sm">{testimonial.address}</p>
                                </div>
                            </div>
                            <div className='flex items-center mb-2 text-yellow-400'>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i}><FaStar /></span>
                                ))}
                            </div>
                            <p className="text-gray-600 mt-4 text-sm">{testimonial.review}</p>
                        </div>
                    )
                    )
                    }
                </div>

            </div>
        </section>
    )
}

export default Testimonials
