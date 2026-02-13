import { FaBookOpenReader, FaDollarSign } from "react-icons/fa6";
const Dashboard = () => {
    const dashInfo =
    {
        totalBooking: "7",
        totalRevenue: "1500"
    }

    return (
        <div className='mt-4 p-4'>
            <h1 className='text-2xl font-bold mb-2'>Hotel Booking Dashboard</h1>
            <p className='text-gray-600'>
                Manage Hotel listings, add new bookings , and keep track of all your reservations in one place.
            </p>
            <div className='gap-4 flex my-8'>
                <div className='bg-amber-100 border border-amber-500 rounded flex p-5 gap-2 items-center'>
                    <FaBookOpenReader />
                    <div className='flex flex-col'>
                        <p>
                            Total Booking
                        </p>
                        <p className='font-bold text-center'>
                            {dashInfo.totalBooking} Bookings
                        </p>
                    </div>
                </div>
                <div className='bg-amber-100 border border-amber-500 rounded flex p-5 gap-2 items-center'>
                    <FaDollarSign />
                    <div className='flex flex-col'>
                        <p>
                            Total Booking
                        </p>
                        <p className='font-bold text-center'>
                            {dashInfo.totalRevenue} $
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard 
