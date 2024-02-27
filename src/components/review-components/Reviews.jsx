import { useEffect, useState } from "react";
import Container from "../container-components/Container";
import Loading from "./Loading";
import ReviewDisp from "./ReviewDisp";
import ReviewGrid from "./ReviewGrid";
import BandCard from "./BandCard";
import fetchData from "../utils/fetchData";

const Reviews = () => {
    const [renderedState, setRenderedState] = useState(<Loading />);
    const [fetchResults, setFetchResults] = useState();
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetchData('./reviews.json')
            .then(res => setFetchResults(res.reviews))
            .catch(err => console.error(err));
    }, [])

    useEffect(() => {
        console.log("Fetch assign successful:", fetchResults);
        // setAllReviews(fetchResults.map((artist, i) => {
        //     <BandCard
        //         key={i}
        //         name={artist.band}
        //         image={artist.image}
        //         album={artist.title}
        //         onClick={() => {console.log("Click", i)}}
        //         />
        // }))
        console.log(allReviews);
        // setRenderedState(allReviews);
    }, [fetchResults])
    
    // const handleClose = () => {
    //     console.log(allReviews);
    //     setRenderCount(renderCount + 1);
    //     setRenderedState(allReviews);
    // }
    
    // const handleClick = (index) => {
    //     console.log("Click", index);
    //     // console.log(fetchResults[index]);
    //     // console.log(allReviews);
    //     // setRenderedState(<ReviewDisp bandData={fetchResults[index]} onClick={handleClose} />)
    //     // setRenderCount(renderCount + 1);
    // }
    
    // {
    //     setFetchResults(data.reviews);
    //     setAllReviews(data.reviews.map((artist, i) =>
    //     <BandCard
    //         key={i}
    //         name={artist.band} 
    //         image={artist.image} 
    //         album={artist.title}
    //         onClick={() => handleClick(i)}
    //         />
    // ))
    // setRenderedState(allReviews)}
    // useEffect(() => {
    //     fetch('./reviews.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.error(err));
        
    // }, [])


    
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
            <Container content={renderedState} />

        </div>
    );
}

export default Reviews;