import promtSync from 'prompt-sync';
import path from 'path';
import colors from 'colors';
import { add, subtract, multiply, divide } from './my_module/calculator.js';   
import { fileURLToPath } from 'url';

//get the file name

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

console.log(colors.black(`Running: ${__fileName}`));
console.log(colors.blue(`Directory: ${__dirName}`));

const prompt = promtSync();
console.log(colors.cyan('Welcome to the calculator app!'));

// user input

const a = Number(prompt(colors.green('Enter first number: ')));
const b = Number(prompt(colors.magenta('Enter second number: ')));

console.log(colors.green(`add: ${add(a, b)}`));
console.log(colors.blue(`subtract: ${subtract(a, b)}`));
console.log(colors.yellow(`multiply:  ${multiply(a, b)}`)); 
console.log(colors.cyan(`divide:  ${divide(a, b)}`)); 