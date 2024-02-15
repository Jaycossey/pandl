import { Spotify } from "react-spotify-embed";

const PlaylistFrame = (props) => {
    const spotifyUrl = "https://open.spotify.com/playlist/3WARwjfWDCQHAHkjMNWinY?utm_source=generator";

        return (
        <>
            <p className="text-lg drop-shadow-md shadow-black">{props.text}</p>
            <Spotify className="w-full" link={spotifyUrl}/>
        </>
    );
}

export default PlaylistFrame;