const BandCard = (props) => {
    const {name, image, album, onClick} = props;

    return (
        <div className="w-60 
                        h-60
                        rounded-2xl
                        shadow-2xl
                        p-2
                        shadow-black
                        hover-anim"
                        onClick={onClick}>

            <img id={name} 
                src={image} 
                alt={name + " artwork"} 
                className="w-40 
                            h-40 
                            m-auto
                            rounded-md
                            shadow-lg
                            shadow-black
                            cursor-pointer"/>

            <p className="text-xl pt-2">{name}</p>
            <p className="text-sm">{album}</p>

        </div>
    );
}

export default BandCard;