import StaffCard from "../container-components/StaffCard";

const StaffGrid = (props) => {
    return (
        <div className="w-full
                        h-full
                        flex
                        flex-wrap
                        gap-10">
            
            <StaffCard name="Phil" job="Owner" profile="images/phil.png" genre="Tech-Metal & Pop Punk" />
            <StaffCard name="Laura" job="Co-Owner & Reviewer" profile="images/laura.png" genre="Alternative & Pop Punk" />
            <StaffCard name="Kris" job="Reviewer" profile="images/kris.png" genre="Alternative, Indie, Rock & Metal" />
            <StaffCard name="Josi" job="Reviewer" profile="images/josi.png" genre="Metalcore & Pop Punk" />
        </div>
    );
}

export default StaffGrid;