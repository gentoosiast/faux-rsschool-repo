import './styles/global.scss';
import styles from './styles/something.module.scss';

console.log('Hello world!');

const divElem = document.createElement('div');
divElem.classList.add(styles.divSettings);

document.body.append(divElem);
