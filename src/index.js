import { DOMManipulation } from "./dom.js";
import { taskOperations } from "./task.js";
import GitHubIcon from './img/icons8-github.svg';
import "../src/styles/mian.css";

const general = [];

let task1 = taskOperations.createTask("Wash dishes", "Clean all the dirty dishes in the sink", "2022.04.18", "not important");

taskOperations.addTaskToArray(task1, general);
console.log(general);

DOMManipulation.displayTask(task1);

DOMManipulation.displayDate(task1);
