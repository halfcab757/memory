import classes from './Navigation.module.css';

function Navigation(props) {

    return (
        <div
            className={classes.navigation}>
            <div>
                <div className={`${classes.navigation__link} ${classes.logo}`}
                onClick={props.onShowStart}>
                    Memory
                </div>
                <div
                    className={`${classes.navigation__link} ${classes.about}`}
                    onClick={props.onShowAbout}>
                    About this app
                </div>   
            </div>  
        </div>
    );
}

export default Navigation;