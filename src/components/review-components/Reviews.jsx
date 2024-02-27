import { useEffect, useState } from "react";
import Container from "../container-components/Container";
import Loading from "./Loading";
import ReviewDisp from "./ReviewDisp";
import ReviewGrid from "./ReviewGrid";
import BandCard from "./BandCard";
import fetchData from "../utils/fetchData";

const Reviews = () => {
    const [cards, setCards] = useState();

    const handleClick = (index) => {
        console.log("click", index);
    }

    const handleData = (data) => {
        let dataCopy = data;
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

    useEffect(() => {
        fetchData('./reviews.json')
            .then(res => res.reviews)
            .then((data) => {
                handleData(data)
            })
            .catch(err => console.error(err));
    }, [])

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
}

export default Reviews;