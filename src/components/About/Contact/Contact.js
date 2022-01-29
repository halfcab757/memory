import classes from './Contact.module.css';

export default function Contact() {
    return (
        <div>
            <h1>Let's get connected!</h1>
            <p>So far, I have been working on my own. I would like to change that by becoming part of a team.</p>
            <p>And I would like to hear to your feedback on this game. Contact me on LinkedIn.</p>
            <div className={classes.link}>
                <a href='https://www.linkedin.com/in/martin-hodsman/' target='_blank' rel='noreferrer'>My profile on LinkedIn</a>
            </div>
        </div>
    )
}
