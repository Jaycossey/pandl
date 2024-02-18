const Container = (props) => {
    return (
        <div className="w-90 
                        h-content
                        m-8
                        p-8
                        gap-6
                        flex
                        flex-row
                        flex-wrap
                        items-center
                        justify-center
                        text-center
                        rounded-2xl
                        text-slate-900
                        border-2
                        shadow-2xl
                        shadow-black
                        bg-white
                        bg-opacity-50">
            {props.content}
        </div>
    );
}

export default Container;