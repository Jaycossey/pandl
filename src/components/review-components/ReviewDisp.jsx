import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ReviewText from "./ReviewText";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const ReviewDisp = (props) => {
    const {image, band, title, reviewType, writer, review} = props.bandData;
    const onClick = props.onClick;
    const [reviewText, setReviewText] = useState(<Loading />);

    useEffect(() => {
        fetch(review)
            .then((res) => res.text())
            .then((data) => {
                setReviewText(data);
            })
            .catch(err => console.error(err));
        }, []);

    let writerCopy = writer;

    if (!writerCopy) {
        writerCopy = "P&L Tunes";
    }


    return (
        <>
            <div className="p-2 
                    w-full 
                    h-max-content
                    flex 
                    flex-col 
                    items-center 
                    shadow-2xl 
                    rounded-md
                    shadow-black">

                <p className="text-lg">{band}</p>
                <p>{title}</p>
                <p>{reviewType}</p>

                <img className="w-40
                                h-40
                                shadow-2xl 
                                rounded-md
                                shadow-black
                                mb-10
                                mt-5"
                    src={image} 
                    alt={`${band} ${reviewType} image`} />

                {/* NEED TO WRITE FETCH CALL FOR THIS DATA!!!!! will 
                rework backend ASAP after front end MVP */}
                <ReviewText text={reviewText} />

                <p>Review written by: {writerCopy}</p>
            </div>

            <FontAwesomeIcon icon={faCircleXmark}
                            onClick={onClick}
                            className="relative
                                        mt-8
                                        w-16
                                        p-1
                                        bg-gradient-to-t
                                        from-blue-500
                                        via-blue-200
                                        to-blue-300
                                        text-blue-500
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