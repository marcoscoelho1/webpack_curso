import Title from './components/title.js';
import Image from './components/image.js';
import Button from './components/button.js';
import Warning from './templates/warning.html';
import './styles/index.scss';

const title = new Title();
const image = new Image();
const button = new Button();

title.create("Primeira página");
image.inserImage();
button.create();

//Babel spread
const obj = {test1: 'test1', test2: 'test2', test3: 'test3'};

let {test1, ...rest} = obj

console.log(test1);
console.log(rest);

//import de HTML
document.body.innerHTML += Warning;