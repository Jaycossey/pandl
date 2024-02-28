import { NavLink } from 'react-router-dom';
import BurgerBar from './BurgerBar';
import { useState } from 'react';
import WideNav from './WideNav';
import DropNav from './DropNav';

const Navbar = () => {
    const [navRender, setNavRender] = useState(false);
    const handleBurger = () => {
        const width = window.screen.availWidth;

        if (width <= 600 && navRender == false) {
            console.log("Active dd", navRender)
            setNavRender(true);
        }
        
        if (width <= 600 && navRender == true) {
            console.log("remove dd", navRender);
            setNavRender(false);
            // UseRef to target the navbar children and remove the "display: none" properties
        }
    }

    if (navRender == false) {
        return (
            <WideNav onClick={handleBurger} />
        );
    } else {
        return (
            <DropNav onClick={handleBurger} />
        );
    }
}

export default Navbar;