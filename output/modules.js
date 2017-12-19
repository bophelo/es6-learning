import TaskCollection, { foo } from './TaskCollection'; //importing the default as well as foo

console.log(foo);

new TaskCollection(['Prepare Resume', 'Finish Code Repo migration', 'Code some more']).dump();