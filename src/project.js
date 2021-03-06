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

    function deleteProjects (projects) {
        projects.forEach((project) => {
            if (project.isChecked) {
            localStorage.removeItem(project.name);
            }
        })

        if (!localStorage.getItem("general")) createProject("general");
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

    function getDeletFormData (projects) {
        const deleteFromData = [];

        projects.forEach((project) => {
            const projCheckboxId = project.toLowerCase().replaceAll(" ", "_");
            const projCheckboxValue = document.getElementById(projCheckboxId).checked;

            deleteFromData.push({name: project ,isChecked: projCheckboxValue});
        })

        return deleteFromData;
    }

    function sortTasksByPriority (projectName) {
        const importantTasks = JSON.parse(localStorage.getItem(projectName)).filter(task => task.isImportant);
        _sortTasksByDate(importantTasks);
        const notImportantTasks = JSON.parse(localStorage.getItem(projectName)).filter(task => !task.isImportant);
        _sortTasksByDate(notImportantTasks);
        const sortedTasks = importantTasks.concat(notImportantTasks);

        return sortedTasks;
    }

    function _sortTasksByDate (tasks) {
        tasks.sort((taksA, taksB) => taksA.dueDate > taksB.dueDate ? 1 : -1);

        return tasks
    }

    return {createProject, addTaskToProject, searchCurrentProject, deleteTaskFromProject, getTaskFromProject, updateTask, deleteProjects, getProjects, getTasks, 
            getDeletFormData, sortTasksByPriority}
})();

export {projectOperations};