import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ReviewText from "./ReviewText";

const ReviewDisp = (props) => {
    const {image, band, title, reviewType, writer, review} = props.bandData;
    const onClick = props.onClick;

    let writerCopy = writer;

    if (!writerCopy) {
        writerCopy = "P&L Tunes"
    }

    return (
        // this whole section needs reworking, I want to think how to store the data, would be best to 
        // work with JSON to target as best practice, this will allow the addition of new reviews via the 
        // server
        <>
            <div className="p-2 
                    w-full 
                    flex 
                    flex-col 
                    items-center 
                    shadow-2xl 
                    rounded-md
                    shadow-black">

                <p className="text-lg">{band}</p>
                <p>{title}</p>
                <p>{reviewType}</p>

                <img className="w-60
                                h-60
                                shadow-2xl 
                                rounded-md
                                shadow-black
                                mb-10
                                mt-5"
                    src={image} 
                    alt={`${band} ${reviewType} image`} />

                {/* NEED TO WRITE FETCH CALL FOR THIS DATA!!!!! will 
                rework backend ASAP after front end MVP */}
                <ReviewText text={review} />

                <p>Review written by: {writerCopy}</p>
            </div>

            <FontAwesomeIcon icon={faCircleXmark}
                            onClick={onClick}
                            className="absolute
                                        w-16
                                        p-1
                                        bg-gradient-to-t
                                        from-blue-500
                                        via-blue-200
                                        to-blue-300
                                        text-blue-500
                                        bottom-16
                                        text-3xl
                                        rounded-full
                                        shadow-xl
                                        shadow-black
                                        hover:scale-105
                                        hover:text-blue-900
                                        transition-smooth
                                        cursor-pointer" />
        </>
    );
}

export default ReviewDisp;