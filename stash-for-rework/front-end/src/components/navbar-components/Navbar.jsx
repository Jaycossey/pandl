import { NavLink } from 'react-router-dom';
import BurgerBar from './BurgerBar';

const Navbar = () => {
    const handleBurger = () => {
        const width = window.screen.availWidth;
        console.log(width);

        if (width <= 600) {
            console.log("activate dropdown");
        }
    }

    return (
        <>
            <nav className='w-full
                            h-16 
                            absolute
                            border-b-4 
                            border-blue-900
                            flex 
                            p-2 
                            z-10
                            bg-gradient-to-br 
                            from-orange-600 
                            via-orange-800 
                            to-blue-500'>

                <ul className='w-screen
                            text-center
                            flex
                            items-center 
                            justify-around'>

                    {/* Hamburger bar, needs functionality but currently responsive to screensize */}
                    <BurgerBar onClick={handleBurger} />

                    <NavLink to="/"
                            className="navLink"
                            style={({ isActive, isPending, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "red" : "black",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}>
                                Home
                    </NavLink>
                    
                    
                    <NavLink to="/reviews"
                            className="navLink"
                            style={({ isActive, isPending, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "red" : "black",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}>
                                Reviews
                    </NavLink>
                    
                    <NavLink to="/staff"
                            className="navLink"
                            style={({ isActive, isPending, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "red" : "black",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}>
                                Staff
                    </NavLink>
                    
                    <NavLink to="/contact"
                            className="navLink"
                            style={({ isActive, isPending, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "red" : "black",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}>
                                Contact
                    </NavLink>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;