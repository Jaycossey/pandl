import { useState } from "react";
import ContactForm from "./ContactForm";
import Container from "../container-components/Container";
import Thankyou from "./Thankyou";

const Contact = (props) => {
    const [toggleThankyou, setToggleThankyou] = useState(false);

    let returnValue;
    if (!toggleThankyou) {
        returnValue = <ContactForm toggleThanks={setToggleThankyou} />
    } else {
        returnValue = <Thankyou />
    }
    return (
        <div className="pt-16
                    pb-8
                    min-h-screen
                    bg-gradient-to-l 
                    from-orange-500 
                    via-orange-300 
                    to-blue-400">

            <Container content={returnValue} />
        </div>
    );
}

export default Contact;