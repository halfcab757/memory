import Button from '../../components/UI/Button/Button';
import AboutMe from '../About/AboutMe/AboutMe';
import TechStack from '../About/TechStack/TechStack';
import AboutApp from '../About/AboutApp/AboutApp';
import Contact from '../About/Contact/Contact';

import classes from './DetailCard.module.css';

export default function DetailCard(props) {
    let content;

    switch(props.topic) {
        case ('aboutMe'): 
        content = <AboutMe/>;
        break;
        case ('techstack'):
        content = <TechStack/>
        break;
        case ('aboutApp'):
        content = <AboutApp/>
        break;
        case('contact'):
        console.log('CONTACT');
        content = <Contact/>
        break;
        default: 
        content = null;
    }
   
    return (
        <div
            className={classes.DetailCard}>
            <div
                className={classes.Content}>
                {content && content}
            </div>
            <div
                className={classes['button-container']}>
                <Button
                    type="button"
                    look="music"
                    clickHandler={props.closeCard}>CLOSE</Button>
            </div>
        </div>
    );
}
