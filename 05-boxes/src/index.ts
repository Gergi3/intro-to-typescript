import { Box } from "./Models/Box.js";

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
box.add("Gosho");
box.add("Gosho");
box.add("Gosho");

console.log(box.count);
console.log(box.count);
console.log(box.count);

box.remove();
console.log(box.count);

console.log(box.count);
