import Container from "../container-components/Container";
import StaffGrid from "./StaffGrid";

const Staff = (props) => {
    return (
        <div className="pt-16
                        md:h-full
                        pb-8
                        bg-gradient-to-t 
                        from-orange-500
                        via-orange-300 
                        to-blue-400">

            <Container content={"Our Staff and Writers"} />
            <Container content={<StaffGrid />} />
        </div>
    );
}

export default Staff;