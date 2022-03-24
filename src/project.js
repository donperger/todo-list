const projectOperations = (() => {
    function createProject (projectName) {
       if (!localStorage.getItem(projectName)) localStorage.setItem(projectName, "[]");
    }

    function addTaskToProject (projecName, task) {
        const storedTasks = JSON.parse(localStorage.getItem(projecName));
        storedTasks.push(task);
        localStorage.setItem(projecName, JSON.stringify(storedTasks));
    }

    function searchCurrentProject (currentProjectName) {
        const currentProjectTasks = JSON.parse(localStorage.getItem(currentProjectName));

        return currentProjectTasks;
    }

    function deleteTaskFromProject(projectName, taskTitle) {
        let tasks = JSON.parse(localStorage.getItem(projectName));
        tasks = tasks.filter((task) => task.title !== taskTitle);
        tasks = JSON.stringify(tasks)
        localStorage.setItem(projectName, tasks);
    }

    return {createProject, addTaskToProject, searchCurrentProject, deleteTaskFromProject}
})();

export {projectOperations};