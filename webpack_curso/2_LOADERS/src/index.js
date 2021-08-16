import Title from './components/title.js';
import Image from './components/image.js';
import Button from './components/button.js';

const title = new Title();
const image = new Image();
const button = new Button();

title.create("Primeira página");
image.inserImage();
button.create();

const obj = {test1: 'test1', test2: 'test2', test3: 'test3'};

let {test1, ...rest} = obj

console.log(test1);
console.log(rest);