const Card = (props) => {
    console.log(props);

    return (
        <div className="w-60 
                        h-60 
                        border-2">
            <Text text={props.innerContent.band} />
            {/* Album Artwork */}
            <img src={props.innerContent} alt={`${props.innerContent.band}'s ${props.innerContent.type} Artwork`} />
            <Text text={props.innerContent.review} />
        </div>
    );
}

export default Card;