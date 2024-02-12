const BurgerBar = (props) => {
    return (
        <div className="burgerBar" onClick={props.onClick}>
            <img src="images/pandl-black.PNG" alt="Logo for P&L Tunes" />
        </div>
    );
}

export default BurgerBar;