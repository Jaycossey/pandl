import Text from "../container-components/Text";
import { Spotify } from "react-spotify-embed";

const PlaylistFrame = (props) => {
    const spotifyUrl = "https://open.spotify.com/playlist/3WARwjfWDCQHAHkjMNWinY?utm_source=generator";

        return (
        <>
            <Text text={props.text} />
            <Spotify className="w-full" link={spotifyUrl}/>
        </>
    );
}

export default PlaylistFrame;