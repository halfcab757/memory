import Button from '../UI/Button/Button';

import classes from './Modal.module.css';

function Modal(props) {
    return <div
        className={classes.modal}
        onClick={props.closeModal}>
            <h2>{props.title}</h2>
            {props.message && <p>{props.message}</p>}
            <Button
                type="button"
                clickHandler={props.clickHandler}>
                {props.btnText}
            </Button>
        </div>;
}

export default Modal;