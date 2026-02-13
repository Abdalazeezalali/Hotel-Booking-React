import Navbar from '../../components/dashboard/Navbar'
import SideNavbar from '../../components/dashboard/SideNavbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='h-full flex'>
                <SideNavbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
