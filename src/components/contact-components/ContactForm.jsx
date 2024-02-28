import FormSelect from './FormSelect';
import TextInput from './TextInput';

const ContactForm = () => {

    // using formSubmit for this for now, enables easy posting for emails
    return (
        <form action="https://formsubmit.co/pandltunes@gmail.com" method="POST" 
                className='flex
                            flex-col
                            p-8
                            gap-6
                            items-center'>
            
            <p className='text-lg'>Contact Us for a Review of your Music!</p>

            <p className='-mb-2'>Follow the prompts below</p>
            <TextInput name="bandName" placeholder="Band Name" type="text"></TextInput>
            <TextInput name="email" placeholder="Email" type="text"></TextInput>
            <TextInput name="bandLocation" placeholder="Location" type="text"></TextInput>
            
            <p>Please Select Your Genre</p>
            <FormSelect />

            <TextInput name="url" type="url" placeholder="Website URL" />
            <TextInput name="musicUrl" type="url" placeholder="Music URL" />

            <textarea 
                name="otherInfo" 
                type="text" 
                className="w-full 
                            h-40 
                            p-2 
                            text-center 
                            rounded-lg 
                            border-2" 
                placeholder="Other Information" />

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