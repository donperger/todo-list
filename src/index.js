import { DOMManipulation } from "./dom.js";
import { Task } from "./task.js";


let task = new Task("Wash dishes", "Clean all the dirty dishes in the sink", "2022.04.18", "not important");

DOMManipulation.displayTask(task);

DOMManipulation.displayDate(task);