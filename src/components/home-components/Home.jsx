import Container from "../container-components/Container";
import PlaylistFrame from "./PlaylistFrame";

const Home = () => {
    const welcomeText = "P&L Tunes is a UK based alternative music website. We showcase live reviews and music releases from artists all over the world that come to perform in the UK.";
    const topPicks = "Top Picks from our writers!";

    return (
        <div className="bg-pandl 
                        overflow-auto
                        pt-16">
                
                <img className="w-40 
                                m-auto 
                                h-40
                                drop-shad" 
                    src={"images/pandl-black.PNG"} />
                
                <Container content={welcomeText} />
                <Container content={<PlaylistFrame text={topPicks} />} />
        </div>
    );
}

export default Home;