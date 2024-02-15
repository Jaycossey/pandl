const ReviewDisp = (props) => {
    console.log(props)
    const { name, review, subName, type, image } = props.band;

    return (
        <div className="p-2 
                        w-full 
                        flex 
                        flex-col 
                        items-center 
                        shadow-2xl 
                        shadow-black">

            <img src={image} 
                alt={name + ' artwork'}
                className="w-60 
                            h-60
                            col-span-2
                            row-span-2
                            rounded-md
                            relative
                            ml-0" />
            
            <p className="relative
                            w-full
                            h-8
                            col-span-3
                            row-span-1
                            border-2">
                                {name}
            </p>
            <p className="relative
                            w-full
                            h-8
                            col-span-1
                            row-span-1
                            border-2">
                                {subName}
            </p>
            <p className="relative w-content col-span-3
                        row-span-2 border-2">
                            {review}
            </p>
            <p className="relative
                            w-full
                            h-8
                            col-span-3
                            col-start-3
                            row-start-5
                            row-span-1
                            border-2">
                                "Writer Name HERE!!!"
            </p>
        </div>
    );
}

export default ReviewDisp;