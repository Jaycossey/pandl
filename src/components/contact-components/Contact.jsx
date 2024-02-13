import ContactForm from "./ContactForm";
import Container from "../Container";

const Contact = (props) => {
    return (
        <div className="pt-2
        h-screen
        bg-gradient-to-r 
        from-orange-500 
        via-orange-300 
        to-blue-400">

            <Container content={<ContactForm />} />
        </div>
    );
}

export default Contact;