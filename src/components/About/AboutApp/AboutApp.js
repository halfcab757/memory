import classes from './AboutApp.module.css';

export default function AboutApp() {
    return (
        <div className={classes.about}>
            <h1>How I built this app!</h1>
            <p>I built this web app in April/May 2021 to practice my React.js skills. I chose this game because it is really interactive.</p>
            <p>At first, I made a sketch of a component tree and planned the state management. I kept it simple and used only local state.</p>
            <p>This game was my playground to experiment with animations using CSS as well as the package "React Fragment Group".</p>
            <p>I am happy with this app even though I know it is not perfect and that I can learn a lot more. I already have learned a lot by building this app and keep going. I learnt that creating an entire project can easily become challenging because of the many possibilities of what to do and how to do it and because of the many details to reason about.</p>
            <p>If you want, you can checkout the according code on <a target="_blank" rel='noreferrer' href="https://github.com/halfcab757/memory">my github-profile</a>.</p>
            <p>What do you think about this game? Feel free to let me know via <a href='https://www.linkedin.com/in/martin-hodsman/' target='_blank' rel='noreferrer'>LinkedIn</a>.</p>
        </div>
    );
}
