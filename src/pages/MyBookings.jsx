import img1 from "../assets/allrooms_3.jpg"
import img2 from "../assets/allrooms_2.jpg"
import { format } from "date-fns"
function MyBookings() {
    const userBookingsData = [
        {
            _id: "1234567890",
            user: "abd",
            hotel: "Grand Hotel",
            checkInDate: "2024-01-01",
            checkOutDate: "2024-01-05",
            totalPrice: 1000,
            guests: 4,
            status: "cancelled",
            isPaid: true,
            createdAt: "2024-01-01",
            updatedAt: "2024-01-02",
            paymentMethod: "Paypal",
            image: img1,
            __v: 0
        },
        {
            _id: "123456789assaas0",
            user: "abd2",
            hotel: "Grand Hotel",
            checkInDate: "2024-01-01",
            checkOutDate: "2024-01-05",
            totalPrice: 1000,
            guests: 4,
            status: "confirmed",
            isPaid: false,
            createdAt: "2024-01-01",
            updatedAt: "2024-01-02",
            paymentMethod: "Cash",
            image: img2,
            __v: 0
        }
    ]
    return (
        <div className='p-8 pt-60'>
            <h1 className='text-3xl font-bold mb-6 text-center'>My Bookings</h1>
            <div className='overflow-x-auto'>
                <table className='overflow-hidden min-w-full bg-white rounded-xl shadow-md'>
                    <thead className='bg-gray-100'>
                        <tr className='text-left text-gray-600 uppercase text-sm'>
                            <th className='py-3 px-4'>User</th>
                            <th className='py-3 px-4'>Hotel</th>
                            <th className='py-3 px-4'>Image</th>
                            <th className='py-3 px-4'>Guests</th>
                            <th className='py-3 px-4'>Check-In</th>
                            <th className='py-3 px-4'>Check-Out</th>
                            <th className='py-3 px-4'>Total Price</th>
                            <th className='py-3 px-4'>Status</th>
                            <th className='py-3 px-4'>Payment </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userBookingsData.map((booking) => (
                            <tr key={booking._id} className="border-t hover:bg-gray-400 transition duration-300">
                                <td className="py-3 px-4 font-medium">{booking.user}</td>
                                <td className="py-3 px-4 font-medium">{booking.hotel}</td>
                                <td className="py-3 px-4 font-medium"><img src={booking.image} className='w-20 h-16 rounded object-cover' /></td>
                                <td className="py-3 px-4 font-medium">{booking.guests}</td>
                                <td className="py-3 px-4 font-medium">{format(new Date(booking.checkInDate), "MM/dd/yyyy")}</td>
                                <td className="py-3 px-4 font-medium">{format(new Date(booking.checkOutDate), "MM/dd/yyyy")}</td>
                                <td className="py-3 px-4 font-medium" >${booking.totalPrice}</td>
                                <td className="py-3 px-4 font-medium">
                                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${booking.status === "cancelled" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                                        }`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4">
                                    {booking.isPaid ? (
                                        <span className="text-green-600">{booking.paymentMethod} (Paid)</span>
                                    ) : (
                                        <span className="text-red-600">{booking.paymentMethod} (Not Paid)</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyBookings
