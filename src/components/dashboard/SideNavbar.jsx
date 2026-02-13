import { NavLink } from 'react-router-dom'

const SideNavbar = () => {
    const sideNavbarLinks = [
        {
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            name: "Add Hotel",
            path: "/dashboard/add-hotel"
        },
        {
            name: "Hotel List",
            path: "/dashboard/hotel-list"
        }
    ]
    return (
        <div className='w-16 md:w-65 border-r h-full text-base border-gray-300 pt-5 flex flex-col transition-all duration-500'>
            {sideNavbarLinks.map((link, i) => (
                <NavLink className={({ isActive }) => `
            hidden md:block text-center  px-4  py-2  transition-all duration-300
            ${isActive ? "bg-[#f9db98] text-black font-semibold" : "text-gray-600"}`} end={link.path === "/dashboard"} to={link.path}>
                    <p key={i} className=''>
                        {link.name}
                    </p>
                </NavLink>
            ))}
        </div>
    )
}

export default SideNavbar
