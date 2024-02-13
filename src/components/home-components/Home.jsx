import Container from "../Container";
import PlaylistFrame from "./PlaylistFrame";

const Home = () => {
    const welcomeText = "P&L Tunes is a UK based alternative music website. We showcase live reviews and music releases from artists all over the world that come to perform in the UK.";
    const topPicks = "Top Picks from our writers!";

    return (
        <div className="bg-pandl 
                        overflow-hidden
                        pt-16">
            
                <Container content={welcomeText} />
                <Container content={<PlaylistFrame text={topPicks} />} />
        </div>
    );
}

export default Home;