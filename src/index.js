import { DOMManipulation } from "./dom.js";
import { taskOperations } from "./task.js";
import tinyDatePicker from 'tiny-date-picker';
import {projectOperations} from "./project.js";
import GitHubIcon from './img/icons8-github.svg';
import "./img/menu-svgrepo-com.svg"
import "../src/styles/mian.css";
import "../src/styles/list.css";
import "../src/styles/tiny-date-picker.css";
import "../src/styles/toggle-checkbox-radio.css"

let isSidebarExpanded = true;
let currentProjectName = "general";

const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");
const addBtn = document.querySelector(".add-task-btn");

addBtn.addEventListener("click", () => {
    DOMManipulation.loadForm("Add task");
    tinyDatePicker({ input: document.querySelector('#due_date') });

    const addTaskBtn = document.querySelector(".add-task");
    const cancelBtn = document.querySelector(".cancel-btn");

    addTaskBtn.addEventListener("click", () =>{
        const newTaskData = taskOperations.getTaskData();
        const newTasksProject = document.querySelector("#project").value.toLowerCase();

        if (newTaskData) {
            const newTask = taskOperations.createTask(newTaskData.titleInput, newTaskData.descriptionInput, newTaskData.dueDateInput, newTaskData.isImportantInput);
            projectOperations.addTaskToProject(newTasksProject, newTask);

            DOMManipulation.displayProjects();
            DOMManipulation.loadProject( newTasksProject );
        }
    });
    
    cancelBtn.addEventListener("click",() => DOMManipulation.loadProject(currentProjectName))
})

menuBtn.addEventListener("click", () => {
    if (isSidebarExpanded) {
        
        DOMManipulation.hideSidebar();
    } else {
        DOMManipulation.showSidebar();
    }

    isSidebarExpanded = !isSidebarExpanded;
});

const task1 = taskOperations.createTask("Wash dishes", "Clean all the dirty dishes in the sink", "4/18/2022", false);
const task2 = taskOperations.createTask("Feed the dog", "The dog is really hungry,she need to eat two times a day", "4/18/2022", true);

projectOperations.createProject("general");

DOMManipulation.displayProjects();

