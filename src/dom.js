const DOMManipulation = (() => {
    const _addBtn = document.querySelector(".add-task-btn");
    const _projContainer = document.querySelector(".project-container");
    const _sidebar = document.querySelector(".sidebar");
    const _contentContainer = document.querySelector(".content-container");

    function displayTasks (tasks) {
        tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        const taskTitle = document.createElement("h2");
        taskTitle.textContent = task.title;

        taskCard.appendChild(taskTitle);

        const taskDescription = document.createElement("div");
        taskDescription.textContent = task.description;

        taskCard.appendChild(taskDescription);

        _contentContainer.appendChild(taskCard);
        })
    }

    function displayDate(task) {
        console.log(`${task.title}: ${task.dueDate}`);
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
                console.log(projectName)
                displayTasks(proj.tasks)
            })

            _projContainer.appendChild(projDiv);
        })
    }

    function _capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return {displayDate, displayTasks, hideSidebar, showSidebar, displayProjects}
})();

export {DOMManipulation};