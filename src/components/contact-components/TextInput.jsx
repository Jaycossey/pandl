const TextInput = (props) => {

    return (
        <input type={props.type}
                placeholder={props.placeholder}
                className="rounded-lg
                            border-2
                            border-blue-900
                            text-center
                            w-full
                            h-8">
        </input>
    );
}

export default TextInput;