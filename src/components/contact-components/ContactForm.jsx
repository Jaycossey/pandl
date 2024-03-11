import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import FormSelect from './FormSelect';
import TextInput from './TextInput';

const ContactForm = (props) => {
    // form validation
    const { register, handleSubmit } = useForm();
    const formRef = useRef();

    // onSubmit function
    const onSubmit = () => {
        event.preventDefault();
        // toggle thankyou page;
        emailjs.sendForm('service_b5ya2dk', 'contact_form', formRef.current, {
            publicKey: '-SRQAMIz1FV5nSatx'
        })
        .then(() => {
            console.log('Success!');
            props.toggleThanks(true);
        },
        (err) => {
                console.error(err.text)
            }
        );
    }

    return (
        <form ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className='flex
                        flex-col
                        p-8
                        gap-6
                        items-center'>
            
            <p className='text-lg'>Contact Us for a Review of your Music!</p>

            <p className='-mb-2'>Follow the prompts below</p>
            <TextInput inputName="bandName" placeholder="Band Name" type="text" register={register} required></TextInput>
            <TextInput inputName="email" placeholder="Email" type="email" register={register} required></TextInput>
            <TextInput inputName="bandLocation" placeholder="Location" type="text" register={register} required></TextInput>
            
            <p>Please Select Your Genre</p>
            <FormSelect register={register} required />

            <TextInput inputName="url" type="url" placeholder="Website URL" register={register} required />
            <TextInput inputName="musicUrl" type="url" placeholder="Music URL" register={register} required />

            <textarea 
                name="otherInfo" 
                type="text" 
                className="w-full 
                            h-20 
                            p-2 
                            text-center 
                            rounded-lg 
                            border-2" 
                placeholder="Other Information" required />

            <button
                className="w-full 
                        h-16 
                        bg-blue-600 
                        bg-opacity-60 
                        border-2 
                        border-blue-900
                        rounded-lg 
                        cursor-pointer" 
                type="submit">
                    Submit
            </button>
        
        </form>
    );
}

export default ContactForm;