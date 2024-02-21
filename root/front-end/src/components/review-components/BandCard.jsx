import { forwardRef } from "react";

// forward ref to grandparent (reviews) to handle element targeting
const BandCard = forwardRef((props, ref) => {

    return (
        <div id={props.name}
                className="w-60 
                        h-60
                        rounded-2xl
                        shadow-2xl
                        p-2
                        shadow-black
                        hover-anim"
                ref={ref}>

            <img src={props.image} 
                alt={props.name + " artwork"} 
                className="w-40 
                            h-40 
                            m-auto
                            rounded-md
                            shadow-lg
                            shadow-black" />
            <p className="text-xl pt-2">{props.name}</p>
            <p className="text-sm">{props.album}</p>

        </div>
    );
});

export default BandCard;