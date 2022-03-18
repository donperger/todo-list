const DOMManipulation = (() => {
    const _projList = ["general"]

    const _addBtn = document.querySelector(".add-task-btn");
    const _projContainer = document.querySelector(".project-container");
    const _sidebar = document.querySelector(".sidebar");

    function displayTask (task) {
        console.log(task.title, task.description);
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

    function displayProjects () {
        _projList.forEach(proj => {
            const projDiv = document.createElement("div");
            projDiv.classList.add("proj-name");
            projDiv.textContent = _capitalizeFirstLetter(proj);

            _projContainer.appendChild(projDiv);
        })
    }

    function _capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return {displayDate, displayTask, hideSidebar, showSidebar, displayProjects}
})();

export {DOMManipulation};