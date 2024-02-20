import BandCard from "./BandCard";
import fetchData from "../utils/fetchData";

const ReviewGrid = () => {
    const bandArray = fetchData('reviews/all');
    console.log("array: ", bandArray);
    
    return (
        <>
            {bandArray.map((artist) => {
                return ( 
                    <BandCard name={artist.name} image={artist.image} album={artist.subName} />
                );
            })}
        </>
    );
}

export default ReviewGrid;