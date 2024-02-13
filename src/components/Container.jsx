const Container = (props) => {
    return (
        <div className="w-90 
                        h-content
                        m-8
                        p-8
                        flex
                        flex-col
                        items-center
                        justify-center
                        border-8
                        rounded-3xl
                        bg-white
                        bg-opacity-50">
            {props.content}
        </div>
    );
}

export default Container;