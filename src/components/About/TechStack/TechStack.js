import { techStackItems } from '../../../data/about';

import classes from './TechStack.module.css';

export default function TechStack() {
    return (
        <div>
            <h1>My tech stack</h1>
            <ul
                className={classes.list}>
                { techStackItems.map(item => {
                return (
                <li
                    key={item.title}
                    className={classes.list__item}
                    style={{width: item.level}}>
                    <span>{item.title}</span>
                </li>
                );
            })}
            </ul>
        </div>
    );
}
