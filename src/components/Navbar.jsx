import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='w-screen h-16 fixed border-b-4 flex justify-around p-2 bg-gradient-to-br from-orange-600 via-orange-800 to-blue-500'>
                <ul>
                    <NavLink to="/"
                            className={({ isActive, isPending }) => {
                                isActive ? "active" : isPending ? "isPending" : "navLink"
                            }}>
                                Home
                    </NavLink>
                    
                    
                    <NavLink to="/reviews"
                            className={({ isActive, isPending }) => {
                                isActive ? "active" : isPending ? "isPending" : "navLink"
                            }}>
                                Reviews
                    </NavLink>
                    
                    <NavLink to="/staff"
                            className={({ isActive, isPending }) => {
                                isActive ? "active" : isPending ? "isPending" : "navLink"
                            }}>
                                Staff
                    </NavLink>
                    
                    <NavLink to="/contact"
                            className={({ isActive, isPending }) => {
                                isActive ? "active" : isPending ? "isPending" : "navLink"
                            }}>
                                Contact
                    </NavLink>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;