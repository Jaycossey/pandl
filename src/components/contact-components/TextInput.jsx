// text input for contact form
const TextInput = (props) => {
    const register = props.register;
    const required = props.required;

    return (
        <input name={props.inputName}
                type={props.type}
                placeholder={props.placeholder}
                className="rounded-lg
                            border-2
                            border-blue-900
                            text-center
                            w-full
                            h-8"
                {...register(props.inputName, {required})}>
        </input>
    );
}

export default TextInput;