import ReviewText from "./ReviewText";

const ReviewDisp = (props) => {
    console.log(props)
    const { name, review, subName, type, image } = props.band;

    return (
        <div className="p-2 
                        w-full 
                        flex 
                        flex-col 
                        items-center 
                        shadow-2xl 
                        shadow-black">

            <img src={image} 
                alt={name + ' artwork'}
                className="w-40 
                            h-40
                            md:h-60
                            md:w-60
                            col-span-2
                            row-span-2
                            rounded-md
                            relative
                            ml-0" />
            
            <ReviewText text={name} />
            <ReviewText text={subName} />
            <ReviewText text={review} />
            <ReviewText text={"writer"} />
        </div>
    );
}

export default ReviewDisp;