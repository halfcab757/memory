import portrait from '../../../assets/martin-hodsman-2020.jpg';

import classes from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <div>
            <div className={classes['image-container']}>
                <img 
                    src={portrait} 
                    alt="Martin Hodsman in 2020" />
            </div>
            <div>
                <h1>Hello, it's me!</h1>
                <p>My name is Martin and I am a passionate guy who loves to learn.</p>
                <p>After working many years in online marketing, I got into coding. Currently I am looking to find my first job as webdeveloper / software engineer.</p>
                <p>I am 36 years old and I live in Bonn, Germany.</p>
            </div>
        </div>
    );
}
