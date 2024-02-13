import Card from '../Card';
import Container from "../Container";

const Reviews = (props) => {
    const reviewArr = [
        {
            band: "lune",
            type: "album",
            artwork: "images/lune.png",
            review: "Good shit"
        },
        {
            band: "broadside",
            type: "album",
            artwork: "images/broadside.png",
            review: "saight 9/10 would listen again"
        }
    ];
    

    return (
        <div className="pt-2
                        h-screen
                        bg-gradient-to-r 
                        from-orange-400 
                        via-orange-600 
                        to-blue-500">

            {/* Review Select inst */}
            <Container content={"Our Staff have listened to some incredible bands, be that live or their studio work, browse our reviews below."} />

            {/* Container for review cards */}
            {/* <Container content={reviewArr.map((review) => {
                <Card innerContent={review} />
            })} /> */}

        </div>
    );
}

export default Reviews;