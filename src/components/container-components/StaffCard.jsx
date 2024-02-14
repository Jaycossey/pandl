const StaffCard = (props) => {
    const { name, profile, job } = props;

    return (
        <div className="w-60 
                        h-60 
                        flex 
                        flex-col 
                        items-center
                        m-auto
                        rounded-2xl
                        p-2
                        shadow-2xl
                        shadow-black
                        hover-anim">

            <img className="w-40 
                            h-40 
                            rounded-md
                            mb-2" src={profile} alt={`${name} - ${job}`} />
            <p>{name}</p>
            <p>{job}</p>
        </div>
    )
}

export default StaffCard;