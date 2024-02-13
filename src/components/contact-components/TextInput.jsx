const TextInput = (props) => {
    return (
        <input type="text"
                placeholder={props.placeholder}
                className="rounded-lg
                            border-2
                            border-blue-900
                            text-center">
        </input>
    );
}

export default TextInput;