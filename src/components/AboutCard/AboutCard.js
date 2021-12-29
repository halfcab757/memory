import classes from './AboutCard.module.css';

export default function AboutCard(props) {
    return (
        <div
            className={classes.card}
            onClick={() => props.onMoreDetails(props.id)}>
            {props.children}
        </div>
    );
}
