import deleteIcon from "./img/delete-svgrepo-com.svg";
import editIcon from "./img/edit-svgrepo-com.svg";

const DOMManipulation = (() => {
    const _addBtn = document.querySelector(".add-task-btn");
    const _projContainer = document.querySelector(".project-container");
    const _sidebar = document.querySelector(".sidebar");
    const _contentContainer = document.querySelector(".content-container");

    function _displayTasks (projectName, tasks) {
        tasks.forEach((task, index) => {
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");
            taskCard.setAttribute("id", `${projectName}-${index}`);

            const taskHeaderDiv = document.createElement("div");
            taskHeaderDiv.classList.add("task-header");

            const taskTitle = document.createElement("h2");
            taskTitle.textContent = task.title;
            taskHeaderDiv.appendChild(taskTitle);

            const editBtn = _createActionBtn(editIcon, "edit-img");
            taskHeaderDiv.appendChild(editBtn);

            const deleteBtn = _createActionBtn(deleteIcon, "delete-img");
            taskHeaderDiv.appendChild(deleteBtn)

            taskCard.appendChild(taskHeaderDiv);

            const taksDueDate = document.createElement("div");
            taksDueDate.textContent = task.dueDate;

            taskCard.appendChild(taksDueDate);

            taskTitle.addEventListener("click", () => {
                if(taskCard.lastElementChild.textContent !== task.description) {
                    _showDetails(task, taskCard);
                } else {
                    _hideDetails(taskCard);
                }
            });

            _contentContainer.appendChild(taskCard);
        });
    };

    function _createActionBtn (image, ...imgClasses) {
        const btn = document.createElement("button");
        const img = new Image();
        img.src = image;
        img.classList.add(imgClasses);
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
        _projContainer.style.display = "none";
        _sidebar.style.width = "5vw";
        _sidebar.style.display = "block";
    };

    function showSidebar () {
        _addBtn.style.display = "inline-block";
        _projContainer.style.display = "inline-block";
        _sidebar.style.width = "20vw";
        _sidebar.style.display = "grid";
    };

    function displayProjects (projectList) {
        _projContainer.textContent = "Projects";

        projectList.forEach(proj => {
            const projDiv = document.createElement("div");
            projDiv.classList.add("proj-name");

            const projectName = proj.name;
            projDiv.textContent = _capitalizeFirstLetter(projectName);
            projDiv.addEventListener("click", () =>{
                _contentContainer.textContent = "";
                _displayTasks(proj.name, proj.tasks)
            });

            _projContainer.appendChild(projDiv);
        });
    }

    function _capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    function loadForm() {
        const formContainer = document.createElement("div");
        formContainer.classList.add("form-container");

        const formElement = document.createElement("form");

        formContainer.appendChild(formElement);

        const formLegend = document.createElement("legend");
        formLegend.textContent = "Add new task";
        formLegend.classList.add("legend");
        formElement.appendChild(formLegend);

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

        const addTaskBtn = _creatTextButton("Add task", true, "add-task");
        formElement.appendChild(addTaskBtn);

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

    return {hideSidebar, showSidebar, displayProjects, loadForm};
})();

export {DOMManipulation};