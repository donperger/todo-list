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

    function _saveProject (project) {
        localStorage.setItem(project.name, project.task)  
    }

    function loadProjects() {
        for (let i = 0; i < localStorage.length; i++) {
            
        }
    }

    return {createProject, addTaskToProject, searchCurrentProject}
})();

export {projectOperations};