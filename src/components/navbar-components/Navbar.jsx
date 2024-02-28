import { NavLink } from 'react-router-dom';
import BurgerBar from './BurgerBar';
import { useState } from 'react';
import WideNav from './WideNav';
import DropNav from './DropNav';

const Navbar = () => {
    // set dropdown render toggle
    const [navRender, setNavRender] = useState(false);
    
    // if small screens, toggle which navbar to display
    const handleBurger = () => {
        const width = window.screen.availWidth;

        if (width <= 600 && navRender == false) {
            setNavRender(true);
        }
        
        if (width <= 600 && navRender == true) {
            setNavRender(false);
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