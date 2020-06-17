import foods from './foods';
import { remove, choice } from './helpers';

let fruits = choice(foods);

console.log(`I'd like one ${fruits}, please`);
console.log(`Here you go: ${fruits}`);
console.log(`Delicious! May I have another?`);

let remaining = remove(fruits, foods);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left`);
