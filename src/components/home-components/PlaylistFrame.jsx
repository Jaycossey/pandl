import { useEffect, useRef } from "react";
import Text from "../Text";
import { Spotify } from "react-spotify-embed";

const PlaylistFrame = (props) => {
    const spotifyUrl = "https://open.spotify.com/playlist/3WARwjfWDCQHAHkjMNWinY?utm_source=generator";
    const spotRef = useRef(null);

    useEffect(() => {
        console.log(spotRef.current);
    })
            return (
        <>
            <Text text={props.text} />
            <Spotify ref={spotRef} link={spotifyUrl}/>
        </>
    );
}

export default PlaylistFrame;