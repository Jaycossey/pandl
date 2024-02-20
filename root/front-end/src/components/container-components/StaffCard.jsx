const StaffCard = (props) => {
    const { name, profile, job } = props;

    return (
        <div className="w-60 
                        h-conent 
                        flex 
                        flex-col 
                        items-center
                        m-auto
                        rounded-2xl
                        p-4
                        shadow-2xl
                        shadow-black
                        hover-anim">

            <img className="w-40 
                            h-40 
                            rounded-md
                            mb-2" src={profile} alt={`${name} - ${job}`} />
            
            <p className="text-xl 
                        drop-shadow-lg 
                        0shadow-black">
                            {name}
            </p>

            <p className="text-sm">{job}</p>
            
            <p>
                Favourite genres: <br/>{props.genre}
            </p>
        </div>
    )
}

export default StaffCard;