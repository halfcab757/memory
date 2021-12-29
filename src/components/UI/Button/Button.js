import classes from './Button.module.css';

function Button(props) {
    const buttonCssClasses = `${classes.btn} ${props.look === 'RED' && classes.red}`;

    return (
        <button
            className={buttonCssClasses}
            onClick={props.clickHandler}
            type={props.type}>
            {props.children}
        </button>
    );
}

export default Button;