import ContactForm from "./ContactForm";
import Container from "../container-components/Container";

const Contact = (props) => {
    return (
        <div className="pt-16
                    pb-8
                    h-content
                    bg-gradient-to-l 
                    from-orange-500 
                    via-orange-300 
                    to-blue-400">

            <Container content={<ContactForm />} />
        </div>
    );
}

export default Contact;