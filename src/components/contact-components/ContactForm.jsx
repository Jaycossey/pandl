import FormSelect from './FormSelect';
import TextInput from './TextInput';

const ContactForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Hello Submit");
    }

    return (
        <form action="URL_HERE" method="POST" 
                className='flex
                            flex-col
                            p-8
                            gap-6
                            items-center'>
            
            <p className='text-lg'>Contact Us for a Review of your Music!</p>

            <p className='-mb-2'>Follow the prompts below</p>
            <TextInput name="bandName" placeholder="Band Name" type="text"></TextInput>
            <TextInput name="email" placeholder="Email" type="text"></TextInput>
            <TextInput name="bandLoc" placeholder="Location" type="text"></TextInput>
            
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
                className="w-full h-8 bg-slate-500 bg-opacity-60 border-2 rounded-lg" 
                type="button" 
                onClick={handleSubmit}>
                    Submit
            </button>
        
        </form>
    );
}

export default ContactForm;