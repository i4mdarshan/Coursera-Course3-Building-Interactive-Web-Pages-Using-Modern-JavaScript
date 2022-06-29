import { sample } from './input.js';
import { transform } from './transformer.js';
import boardRenderer from './board-renderer.js';

boardRenderer(transform(sample)[0]);
console.log("Result is ", transform(sample)[0]);

