const ReviewText = (props) => {
    return (
        <p className="relative 
                        w-full
                        h-content
                        text-center 
                        col-span-3
                        shadow-md
                        rounded-b-md
                        shadow-black">
                            {props.text}
        </p>
    );
}

export default ReviewText;