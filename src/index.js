import { taskOperations } from "./task.js";
import TinyDatePicker from 'tiny-date-picker';
import {projectOperations} from "./project.js";
import format from "date-fns/format";

import GitHubIcon from './img/icons8-github.svg';
import deleteIcon from "./img/delete-svgrepo-com.svg";
import editIcon from "./img/edit-svgrepo-com.svg"
;
import "./img/menu-svgrepo-com.svg"
import "../src/styles/mian.css";
import "../src/styles/list.css";
import "../src/styles/tiny-date-picker.css";
import "../src/styles/toggle-checkbox-radio.css";

const DOMManipulation = (() => {
    const _addBtn = document.querySelector(".add-task-btn");
    const _deleteProjBtn = document.querySelector(".delete-project");
    const _projContainer = document.querySelector(".project-container");
    const _sidebar = document.querySelector(".sidebar");
    const _contentContainer = document.querySelector(".content-container");

    function displayTasks (projectName) {
        _contentContainer.textContent = "";

        const projectTitle = document.createElement("h1");
        projectTitle.textContent = _capitalizeFirstLetter(projectName);
        _contentContainer.appendChild(projectTitle);

        const importantDiv = _createContainerDiv("Importnat tasks")
        _contentContainer.appendChild(importantDiv);

        const tasksDiv = _createContainerDiv("Tasks");
        _contentContainer.appendChild(tasksDiv);

        const noDateDiv = _createContainerDiv("No due date");
        _contentContainer.appendChild(noDateDiv);

        const doneDiv = _createContainerDiv("Done");
        _contentContainer.appendChild(doneDiv);


        const tasks = projectOperations.sortTasksByPriority(projectName);

        tasks.forEach((task, index) => {
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");
            taskCard.setAttribute("id", `${projectName}-${index}`);

            const taskHeaderDiv = document.createElement("div");
            taskHeaderDiv.classList.add("task-header");

            const taskCheckbox = document.createElement("input");
            taskCheckbox.setAttribute("type", "checkbox");
            taskCheckbox.setAttribute("id", task.title.toLowerCase().replaceAll(" ", "-"));
            taskHeaderDiv.appendChild(taskCheckbox);

            const taskTitle = document.createElement("h2");
            taskTitle.textContent = task.title;
            taskHeaderDiv.appendChild(taskTitle);

            const editBtn = _createActionBtn(editIcon, "edit-img", "edit-btn");
            taskHeaderDiv.appendChild(editBtn);

            editBtn.addEventListener("click", () => {
                loadForm("Edit task");
                TinyDatePicker({ input: document.querySelector('#due_date'),
                    min: new Date(),
                    dayOffset: 1,
                });
                _fillOutForm(projectName, task.title);

                const editTaskBtn = document.querySelector(".edit-task");
                const cancelBtn = document.querySelector(".cancel-btn");
                const oldTaskTitle = document.querySelector("#title").value;

                editTaskBtn.addEventListener("click", () => {
                    const taskData = taskOperations.getTaskData();
                    const newTask = taskOperations.createTask(taskData.titleInput, taskData.descriptionInput, taskData.dueDateInput, taskData.isImportantInput);
                    projectOperations.updateTask(projectName, oldTaskTitle, newTask);

                    loadProject(projectName);
                });

                cancelBtn.addEventListener("click", () => loadProject(projectName));
            });

            const deleteBtn = _createActionBtn(deleteIcon, "delete-img", "delete-btn");
            taskHeaderDiv.appendChild(deleteBtn);

            deleteBtn.addEventListener("click", () => {
                _deleteTaskCard(`${projectName}-${index}`);
                projectOperations.deleteTaskFromProject(projectName, task.title);
            });

            taskCard.appendChild(taskHeaderDiv);

            const taksDueDate = document.createElement("div");
            if (task.dueDate) {
                const formattedDate = format(new Date(task.dueDate), 'do MMMM y')
                taksDueDate.textContent = `Due date: ${formattedDate}`;
            } else {
                taksDueDate.textContent = "No due date"
            }

            taskCard.appendChild(taksDueDate);

            taskTitle.addEventListener("click", () => {
                if(taskCard.lastElementChild.textContent !== task.description) {
                    _showDetails(task, taskCard);
                } else {
                    _hideDetails(taskCard);
                }
            });

            taskCheckbox.addEventListener("change", () => {
                if (taskCheckbox.checked) {
                    console.log(projectName, task.title)
                } else {
                    console.log("not checked")
                }
            })

            if (task.isDone) {
                doneDiv.appendChild(taskCard);
            } else if (!task.dueDate) {
                noDateDiv.appendChild(taskCard)
            } else if (task.isImportant) {
                importantDiv.appendChild(taskCard);
            } else {
                tasksDiv.appendChild(taskCard);
            }
        });
    };

    function _createContainerDiv (divTitle) {
        const div = document.createElement("div");
        const divClass = divTitle.toLowerCase().replaceAll(" ", "-");
        div.classList.add(`${divClass}-container`);
        const title = document.createElement("h2");
        title.textContent = divTitle;
        div.appendChild(title);

        return div;
    }

    function _createActionBtn (image, imgClass, btnClass) {
        const btn = document.createElement("button");
        btn.classList.add(btnClass);
        const img = new Image();
        img.src = image;
        img.classList.add(imgClass);
        btn.appendChild(img);

        return btn;
    };

    function _showDetails(task, taskCard) {
        const detailDiv = document.createElement("div");
        detailDiv.textContent = task.description;

        taskCard.appendChild(detailDiv);
    };

    function _hideDetails (taskCard) {
        taskCard.removeChild(taskCard.lastElementChild);
    };
    
    function hideSidebar () {
        _addBtn.style.display = "none";
        _deleteProjBtn.style.display = "none";
        _projContainer.style.display = "none";
        _sidebar.style.width = "5vw";
        _sidebar.style.display = "block";
    };

    function showSidebar () {
        _addBtn.style.display = "inline-block";
        _deleteProjBtn.style.display = "inline-block";
        _projContainer.style.display = "inline-block";
        _sidebar.style.width = "20vw";
        _sidebar.style.display = "grid";
    };

    function _deleteTaskCard(cardId) {
        document.getElementById(cardId).remove();
    }

    function displayProjects () {
        _projContainer.textContent = "Projects";
        const projects = projectOperations.getProjects();

        for (let i = 0; i < projects.length; i++) {
            const projDiv = document.createElement("div");
            projDiv.classList.add("proj-name");

            const projectName = projects[i];
            projDiv.textContent = _capitalizeFirstLetter(projectName);
            projDiv.addEventListener("click", () =>{
                _contentContainer.textContent = "";
                const projectTasks = projectOperations.getTasks(projectName); 
                displayTasks(projectName, projectTasks);
            });

            _projContainer.appendChild(projDiv);
        };
    }

    function _capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    function loadForm(formName) {
        const formContainer = document.createElement("div");
        formContainer.classList.add("form-container");

        const formElement = document.createElement("form");

        formContainer.appendChild(formElement);

        const formLegend = document.createElement("legend");
        formLegend.textContent = formName;
        formLegend.classList.add("legend");
        formElement.appendChild(formLegend);

        const projectInput = _creatTextInput("Project", "project", true, "General", "input-container", "project-input");
        formElement.appendChild(projectInput);

        const titleInput = _creatTextInput("Title", "title", true, "Wash dishes", "input-container", "title-input");
        formElement.appendChild(titleInput);

        const descriptionInput = _creatTextInput("Description", "description", false, "", "input-container", "description-input");
        formElement.appendChild(descriptionInput);

        const dateInput = _creatTextInput("Due date", "due_date", false, "", "input-container", "date-input");
        formElement.appendChild(dateInput);

        const importantToggleDiv = document.createElement("div");
        importantToggleDiv.classList.add("toggle-container");

        const importantToggleInput = document.createElement("input");
        importantToggleInput.setAttribute("type", "checkbox");
        importantToggleInput.setAttribute("class", "toggle");
        importantToggleInput.setAttribute("id", "important")
        importantToggleDiv.appendChild(importantToggleInput);
        
        const importantToggleLabel = document.createElement("label");
        importantToggleLabel.setAttribute("for", "important");
        importantToggleLabel.classList.add("toggle-label");
        importantToggleLabel.textContent = "Important";
        importantToggleDiv.appendChild(importantToggleLabel);
        formElement.appendChild(importantToggleDiv);

        const taskBtnClass = formName.toLowerCase().replaceAll(" ", "-");
        const taskBtn = _creatTextButton(formName, true, taskBtnClass);
        formElement.appendChild(taskBtn);

        const cancelBtn = _creatTextButton("Cancel", true, "cancel-btn");
        formElement.appendChild(cancelBtn);

        _contentContainer.textContent = "";
        _contentContainer.appendChild(formContainer);
    }

    function _creatTextInput (inputName, inptuId, required, placeholder, ...containerClasses) {
        const container = document.createElement("div");
        container.classList.add(containerClasses);
    
        const label = document.createElement("label");
        label.textContent = inputName;
        if ( required === true ) label.textContent = label.textContent + "*";
        label.setAttribute("for", inptuId);
        container.appendChild(label);
    
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", inptuId);
        input.setAttribute("placeholder", placeholder);

        input.required = required;

        container.appendChild(input);

        return container;
    }
    
    function _creatTextButton (textContent, isSimpleButton, ...btnClasses) {
        const btn = document.createElement("button");
        btn.classList.add(btnClasses);
        if (isSimpleButton) btn.setAttribute("type", "button");
        btn.textContent = textContent;

        return btn
    }

    function _fillOutForm(projecName, taskTitle) {
        const task = projectOperations.getTaskFromProject(projecName, taskTitle);

        const projectInput = document.querySelector("#project");
        projectInput.value = projecName;

        const titleInput = document.querySelector("#title");
        titleInput.value = task.title;

        const descriptionInput = document.querySelector("#description");
        descriptionInput.value = task.description;

        const dueDateInput = document.querySelector("#due_date");
        dueDateInput.value = task.dueDate;

        const importantToggleInput = document.querySelector("#important");
        importantToggleInput.checked = task.isImportant;
    }

    function loadProject (ProjectName) {
        let currentProjectTasks = projectOperations.searchCurrentProject(ProjectName);
        displayTasks(ProjectName, currentProjectTasks);
    }

    function loadDeletForm (projects) {
        const formContainer = document.createElement("div");
        formContainer.classList.add("form-container");

        const titleDiv = document.createElement("h2");
        titleDiv.textContent = "Delete projects";
        formContainer.appendChild(titleDiv);

        projects.forEach((project) => {
            const child = _createCheckbox(project);
            formContainer.appendChild(child);
        })

        const delBtn = _creatTextButton("Delete projects", true, "delete-proj-btn");
        formContainer.appendChild(delBtn);

        const cancelBtn = _creatTextButton("Cancel", true, "cancel-btn");
        formContainer.appendChild(cancelBtn);

        _contentContainer.textContent = "";
        _contentContainer.appendChild(formContainer);        
    }

    function _createCheckbox(checkboxLabel) {
        const idFor = checkboxLabel.toLowerCase().replaceAll(" ", "_");

        const checkboxDiv = document.createElement("div");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", idFor);
        checkbox.setAttribute("name", "project");
        checkbox.setAttribute("value", idFor);
        checkboxDiv.appendChild(checkbox);

        const label = document.createElement("label");
        label.setAttribute("for", idFor);
        label.textContent = checkboxLabel;
        checkboxDiv.appendChild(label);

        return checkboxDiv;
    }

    return {hideSidebar, showSidebar, displayProjects, displayTasks, loadForm, loadProject, loadDeletForm};
})();

let isSidebarExpanded = true;
let currentProjectName = "general";

const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");
const addBtn = document.querySelector(".add-task-btn");
const delProjBtn = document.querySelector(".delete-project");

addBtn.addEventListener("click", () => {
    DOMManipulation.loadForm("Add task");
    TinyDatePicker({ input: document.querySelector('#due_date'),
      min: new Date(),
      dayOffset: 1,
    });

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

delProjBtn.addEventListener("click", () => {
    const projects = projectOperations.getProjects();
    DOMManipulation.loadDeletForm(projects);

    const formDelProjBtn = document.querySelector(".delete-proj-btn");
    const cancelBtn = document.querySelector(".cancel-btn");

    formDelProjBtn.addEventListener("click", () => {
        console.log(projects)
        const formData = projectOperations.getDeletFormData(projects);
        projectOperations.deleteProjects(formData);

        DOMManipulation.displayProjects();
        DOMManipulation.loadProject( currentProjectName );        
    });

    cancelBtn.addEventListener("click", () => DOMManipulation.loadProject(currentProjectName));
})

menuBtn.addEventListener("click", () => {
    if (isSidebarExpanded) {
        
        DOMManipulation.hideSidebar();
    } else {
        DOMManipulation.showSidebar();
    }

    isSidebarExpanded = !isSidebarExpanded;
});

projectOperations.createProject("general");

DOMManipulation.displayProjects();
DOMManipulation.displayTasks("general");

