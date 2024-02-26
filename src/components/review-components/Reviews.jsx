import Container from "../container-components/Container";
import ReviewGrid from './ReviewGrid';

const Reviews = () => {

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
            <Container content={<ReviewGrid />} />

        </div>
    );
}

export default Reviews;