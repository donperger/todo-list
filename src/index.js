import { DOMManipulation } from "./dom.js";
import { taskOperations } from "./task.js";
import GitHubIcon from './img/icons8-github.svg';
import "./img/menu-svgrepo-com.svg"
import "../src/styles/mian.css";

let isSidebarExpanded = true;

const sidebar = document.querySelector(".sidebar");
const menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", () => {
    if (isSidebarExpanded) {
        
        DOMManipulation.hideSidebar();
    } else {
        DOMManipulation.showSidebar();
    }

    isSidebarExpanded = !isSidebarExpanded;
});

DOMManipulation.displayProjects();

const general = [];

let task1 = taskOperations.createTask("Wash dishes", "Clean all the dirty dishes in the sink", "2022.04.18", "not important");
const task2 = taskOperations.createTask("Feed the dog", "The dog is really hungry,she need to eat two times a day", "2022.04.18", "important");

taskOperations.addTaskToArray(task1, general);
taskOperations.addTaskToArray(task2, general);

