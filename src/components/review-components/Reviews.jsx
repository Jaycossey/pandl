import { useEffect, useState } from "react";
import Container from "../container-components/Container";
import Loading from "./Loading";
import ReviewDisp from "./ReviewDisp";
import ReviewGrid from "./ReviewGrid";
import BandCard from "./BandCard";
import fetchData from "../utils/fetchData";

const Reviews = () => {
    const [cards, setCards] = useState();
    const [singleReview, setSingleReview] = useState(<Loading />)
    const [data, setData] = useState(0);
    const [individualReviewToggle, setIndividualReviewToggle] = useState(false);

    // needs to handle the toggle of rendered data and 
    // pass data to individual review ONLY
    const handleClick = (index) => {
        console.log("click", index);
        setIndividualReviewToggle(true);
        // THIS IS THE HIGH LEVEL OF WHAT I NEED TO DO, BREAK IT DOWN!!!!!!!
        // setSingleReview(<ReviewDisp bandData={data[index]} onClick={setIndividualReviewToggle(false)} />)
    }

    // dont fuck with this
    const handleData = (data) => {
        let dataCopy = data;
        setData(dataCopy);
        // console.log(dataCopy);
        setCards(dataCopy.map((artist, i) => {
            return (<BandCard 
                key={i}
                name={artist.band}
                image={artist.image}
                album={artist.title}
                onClick={() => {handleClick(i)}}
                />
        )}))
        // console.log(cards);    
    }

    // dont fuck with this
    useEffect(() => {
        fetchData('./reviews.json')
            .then(res => res.reviews)
            .then((data) => {
                handleData(data)
            })
            .catch(err => console.error(err));
    }, [])

    if (!individualReviewToggle) {
        return (
            <div className="pt-16
                            pb-8
                            h-screen
                            bg-fixed
                            bg-gradient-to-r 
                            from-orange-500 
                            via-orange-300 
                            to-blue-400">

                {/* Review Select inst */}
                <Container content={"Our Staff have listened to some incredible bands, be that live or their studio work, browse our reviews below."} />
                <Container content={cards ? cards : <Loading />} />

            </div>
        );
    } else {
        return (
            <div className="pt-16
                            pb-8
                            h-screen
                            bg-fixed
                            bg-gradient-to-r 
                            from-orange-500 
                            via-orange-300 
                            to-blue-400">
                <Container content={singleReview} />
            </div>

        );
    }
}

export default Reviews;