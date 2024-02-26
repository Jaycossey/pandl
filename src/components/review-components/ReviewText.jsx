const ReviewText = (props) => {
    return (
        <div className="relative 
                        w-full
                        h-content
                        p-2
                        text-center 
                        col-span-3
                        shadow-md
                        rounded-b-md
                        shadow-black">
                            {props.text}
        </div>
    );
}

export default ReviewText;