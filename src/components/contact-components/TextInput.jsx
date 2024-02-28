// text input for contact form
const TextInput = (props) => {

    return (
        <input name={props.inputName}
                value={value}
                type={props.type}
                placeholder={props.placeholder}
                className="rounded-lg
                            border-2
                            border-blue-900
                            text-center
                            w-full
                            h-8">
                                {value}
        </input>
    );
}

export default TextInput;