import { NavLink } from 'react-router-dom';
import BurgerBar from './BurgerBar';
import DropdownNav from './DropdownNav';
import { useState } from 'react';

const Navbar = () => {
    const [navRender, setNavRender] = useState(0);
    const handleBurger = () => {
        const width = window.screen.availWidth;

        if (width <= 600 && navRender == 0) {
            console.log("Active dd", navRender)
            setNavRender(1)
        }
        
        if (width <= 600 && navRender != 0) {
            console.log("remove dd", navRender);
            setNavRender(0);
            // UseRef to target the navbar children and remove the "display: none" properties
        }
    }

    return (
        <>
            <nav className='w-full
                            fixed
                            h-16 
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