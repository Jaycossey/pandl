import { useEffect, useState } from "react";
import Container from "../container-components/Container";
import Loading from "./Loading";
import ReviewDisp from "./ReviewDisp";
import BandCard from "./BandCard";
import fetchData from "../utils/fetchData";

const Reviews = () => {
    const [cards, setCards] = useState();
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [individualReviewToggle, setIndividualReviewToggle] = useState(false);

    // handles data selection and toggle state
    const handleClick = (index) => {
        setIndividualReviewToggle(true);
        setIndex(index);
    }

    // assigns data and sets all cards
    const handleData = (data) => {
        let dataCopy = data;
        setData(dataCopy);
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

    // fetch data on initial rendering of component
    useEffect(() => {
        fetchData('./reviews.json')
            .then(res => res.reviews)
            .then((data) => {
                handleData(data)
            })
            .catch(err => console.error(err));
    }, [])

    // render components based on user input
    if (!individualReviewToggle) {
        // All review cards
        return (
            <div className="pt-16
                            pb-8
                            h-max-content
                            sm:h-screen
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
        // individual reviews
        return (
            <div className="pt-16
                            pb-8
                            h-max-content
                            bg-fixed
                            bg-gradient-to-r 
                            from-orange-500 
                            via-orange-300 
                            to-blue-400">
                <Container content={<ReviewDisp bandData={data[index]} onClick={() => setIndividualReviewToggle(false)} />} />
            </div>

        );
    }
}

export default Reviews;