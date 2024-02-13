import TextInput from './TextInput';

const ContactForm = (props) => {

    return (
        <form className='flex
                        flex-col
                        p-2
                        gap-6
                        items-center'>
            <p>Contact Us for a Review of your Music!</p>
            <TextInput placeholder="Band Name"></TextInput>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Location"></TextInput>
            <TextInput placeholder="Genre"></TextInput>
            <TextInput placeholder="Website"></TextInput>
        </form>
    );
}

export default ContactForm;