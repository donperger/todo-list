import { DOMManipulation } from "./dom.js";
import { task } from "./task.js";

const general = [];

let task1 = task("Wash dishes", "Clean all the dirty dishes in the sink", "2022.04.18", "not important");

DOMManipulation.displayTask(task1);

DOMManipulation.displayDate(task1);
