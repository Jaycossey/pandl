import StaffCard from "../container-components/StaffCard";

const StaffGrid = (props) => {
    return (
        <div className="w-full
                        h-full
                        flex
                        flex-wrap
                        gap-10">
            
            <StaffCard name="Phil" job="Owner" profile="images/phil.png" />
            <StaffCard name="Kris" job="Reviewer" profile="images/kris.png" />
            <StaffCard name="Josi" job="Reviewer" profile="images/josi.png" />
        </div>
    );
}

export default StaffGrid;