const projectOperations = (() => {
    function createProject (projectName, ...tasks) {
        const tasksJSON = JSON.stringify(tasks);
        if (!localStorage.getItem(projectName)) localStorage.setItem(projectName, tasksJSON);
    }

    function addTaskToProject (projecName, task) {
        const storedTasks = JSON.parse(localStorage.getItem(projecName));

        if (storedTasks) {
            storedTasks.push(task); 
            localStorage.setItem(projecName, JSON.stringify(storedTasks));
        } else {
            createProject(projecName, task);
        }
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

    function getTaskFromProject(projectName, taskTitle) {
        const tasks = JSON.parse(localStorage.getItem(projectName));
        const task = tasks.filter((task) => task.title === taskTitle);

        return task[0];
    }

    function updateTask (projectName, oldTaskTitle, updatedTask) {

        let tasks = JSON.parse(localStorage.getItem(projectName));
        tasks = tasks.map((task) => {
            if (task.title === oldTaskTitle) {
                return updatedTask;
            } else {
                return task;
            }
        });

        localStorage.setItem(projectName, JSON.stringify(tasks));
    }

    function deleteProject (projecName) {
        localStorage.removeItem(projecName);
    }

    function getProjects () {
        const projects = [];

        for (let i = 0; i < localStorage.length; i++) {
            projects.push(localStorage.key(i));
        };

        return projects;
    }

    function getTasks(projectName) {
        return JSON.parse(localStorage.getItem(projectName));
    }

    return {createProject, addTaskToProject, searchCurrentProject, deleteTaskFromProject, getTaskFromProject, updateTask, deleteProject, getProjects, getTasks}
})();

export {projectOperations};