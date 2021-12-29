import React, { useState } from 'react';
import classes from './About.module.css';

import Button from '../../components/UI/Button/Button';
import AboutCard from '../../components/AboutCard/AboutCard';
import DetailCard from '../../components/DetailCard/DetailCard';
import Backdrop from '../../components/Backdrop/Backdrop';

export default function About(props) {
    const [ detail, setDetail ] = useState();

    function setDetailHandler(topic) {
        setDetail(topic);
    }

    function closeDetailCard() {
        setDetail(null);
    }

    return (
        <div className={classes.about}>
            {/* <div className={classes.introduction}>
                <p>Thank you very much for taking a look at my app. I appreciate that!</p>
            </div> */}
            <div className={classes.container}>
                <AboutCard
                    onMoreDetails={() => setDetailHandler('aboutMe')}>
                    Hello, it's me!
                </AboutCard>
                <AboutCard
                    onMoreDetails={() => setDetailHandler('techstack')}>
                    That's my tech stack!
                </AboutCard>
                <AboutCard
                    onMoreDetails={() => setDetailHandler('aboutApp')}>
                    How I built this app!
                </AboutCard>
                <AboutCard
                    onMoreDetails={() => setDetailHandler('contact')}>
                    Let's get connected!
                </AboutCard>
            </div>
            <div className={classes.buttons}>
                <Button
                    look="music"
                    type="button"
                    clickHandler={props.onCloseAboutAndReset}>RETURN HOME</Button>
                {props.gameIsRunning && <Button
                    look="literature"
                    type="button"
                    clickHandler={props.onCloseAbout}>CONTINUE YOUR GAME</Button>}
            </div>
            {detail && <Backdrop show/>}
            {detail && <DetailCard 
                topic={detail}
                closeCard={closeDetailCard}/>}
        </div>
    )
};
