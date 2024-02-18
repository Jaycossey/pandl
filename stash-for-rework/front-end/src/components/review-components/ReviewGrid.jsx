import BandCard from "./BandCard";
import bandList from "../utils/bandList";

const ReviewGrid = () => {
    const bandArray = bandList;
    
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