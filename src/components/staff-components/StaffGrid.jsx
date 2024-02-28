import StaffCard from "../container-components/StaffCard";

/**
 * IMPORTANT!!!!!!!!!!!!!!!!!!!! THIS WILL NEED CHANGING ASAP
 * 
 * I need to remember now that the data structure has changed
 * I need to get the staff data from the reviews.json file,
 * I need to update the values of props for the staff cards
 * I need to add an onclick for the grid
 * I need to render a dropdown for the reviews they wrote on click
 * I need to ensure that the links target the data by staff name.
 */

const StaffGrid = (props) => {
    return (
        <div className="w-full
                        h-full
                        flex
                        flex-wrap
                        gap-10">
            
            {/* Currrently just has small hover animation
            want to add in feature which renders band review cards by that staff member. it should then 
            take you to that review on the band page when clicked*/}
            <StaffCard name="Phil" job="Owner" profile="images/phil.png" genre="Tech-Metal & Pop Punk" />
            <StaffCard name="Laura" job="Co-Owner & Editor" profile="images/laura.png" genre="Alternative & Pop Punk" />
            <StaffCard name="Kris" job="Reviewer" profile="images/kris.png" genre="Alternative, Indie, Rock & Metal" />
            <StaffCard name="Josi" job="Reviewer" profile="images/josi.png" genre="Metalcore & Pop Punk" />
        </div>
    );
}

export default StaffGrid;