import greeting from './sample_es5';
console.log(greeting('ES5'));

import Greeting from './sample_es6';
const g = new Greeting('ES6');
g.say();