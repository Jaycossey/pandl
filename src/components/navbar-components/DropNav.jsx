import { NavLink } from "react-router-dom";
import BurgerBar from "./BurgerBar";

const DropNav = (props) => {
    return (
        <nav className='w-full
        fixed
        h-max-content
        border-b-4 
        border-blue-900
        flex 
        p-2 
        z-10
        bg-gradient-to-br 
        from-orange-600 
        via-orange-800 
        to-blue-500'
        onClick={props.onClick}>

            <ul className='w-screen
                    text-center
                    flex
                    flex-col
                    items-center
                    h-content'>

                {/* Hamburger bar, needs functionality but currently responsive to screensize */}
                <BurgerBar onClick={props.onClick} />
                
                <li className="p-2 fadeIn">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="p-2 fadeIn">
                    <NavLink to="/reviews">Reviews</NavLink>
                </li>
                <li className="p-2 fadeIn">
                    <NavLink to="/staff">Staff</NavLink>
                </li>
                <li className="p-2 fadeIn">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default DropNav;