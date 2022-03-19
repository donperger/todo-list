import { DOMManipulation } from "./dom.js";
import { taskOperations } from "./task.js";
import {Project, projectList,createProject} from "./project.js";
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



const task1 = taskOperations.createTask("Wash dishes", "Clean all the dirty dishes in the sink", "2022.04.18", "not important");
const task2 = taskOperations.createTask("Feed the dog", "The dog is really hungry,she need to eat two times a day", "2022.04.18", "important");

const newProj = createProject("general");
console.log(newProj.tasks)
newProj.addTasks(task1);
newProj.addTasks(task2);

DOMManipulation.displayProjects(projectList);

