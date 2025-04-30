import path from 'path';
import colors from 'colors';
import { add, subtract, multiply, divide } from './my_module/calculator.js';   
import { fileURLToPath } from 'url';

//get the file name

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

console.log(colors.black(`Running: ${__fileName}`));
console.log(colors.blue(`Directory: ${__dirName}`));
console.log(__dirName);

const a = 10;
const b = 6;

console.log(colors.green(`add: ${add(a, b)}`));
console.log(colors.blue(`subtract: ${subtract(a, b)}`));
console.log(colors.yellow(`multiply:  ${multiply(a, b)}`)); 
console.log(colors.cyan(`divide:  ${divide(a, b)}`)); 