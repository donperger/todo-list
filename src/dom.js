const DOMManipulation = (() => {
    const _addBtn = document.querySelector(".add-task-btn");
    const _projContainer = document.querySelector(".project-container");
    const _sidebar = document.querySelector(".sidebar");
    const _contentContainer = document.querySelector(".content-container");

    function displayTasks (projectName, tasks) {
        tasks.forEach((task, index) => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        taskCard.setAttribute("id", `${projectName}-${index}`)

        const taskTitle = document.createElement("h2");
        taskTitle.textContent = task.title;

        taskCard.appendChild(taskTitle);

        const taksDueDate = document.createElement("div");
        taksDueDate.textContent = task.dueDate;

        taskCard.appendChild(taksDueDate);

        taskCard.addEventListener("click", () => {
            if(taskCard.lastElementChild.textContent !== task.description) {
                _showDetails(task, taskCard);
            } else {
                _hideDetails(taskCard);
            }
        });

        _contentContainer.appendChild(taskCard);
        })
    }

    function _showDetails(task, taskCard) {
        const detailDiv = document.createElement("div");
        detailDiv.textContent = task.description;

        taskCard.appendChild(detailDiv);
    }

    function _hideDetails (taskCard) {
        taskCard.removeChild(taskCard.lastElementChild);
    }
    
    function hideSidebar () {
        _addBtn.style.display = "none";
        _projContainer.style.display = "none";
        _sidebar.style.width = "5vw";
        _sidebar.style.display = "block";
    }

    function showSidebar () {
        _addBtn.style.display = "inline-block";
        _projContainer.style.display = "inline-block";
        _sidebar.style.width = "20vw";
        _sidebar.style.display = "grid";
    }

    function displayProjects (projectList) {
        projectList.forEach(proj => {
            const projDiv = document.createElement("div");
            projDiv.classList.add("proj-name");

            const projectName = proj.name;
            projDiv.textContent = _capitalizeFirstLetter(projectName);
            projDiv.addEventListener("click", () =>{
                displayTasks(proj.name, proj.tasks)
            })

            _projContainer.appendChild(projDiv);
        })
    }

    function _capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return {displayTasks, hideSidebar, showSidebar, displayProjects}
})();

export {DOMManipulation};