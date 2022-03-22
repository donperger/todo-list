class Project {
    constructor (name) {
        this._name = name;
        this._tasks = [];
    }

    get name() {
        return this._name;
    }

    get tasks() {
        return this._tasks;
    }

    addTasks(task) {
        this._tasks.push(task);
    }
}

function createProject (projectName) {
    const newProject = new Project(projectName);
    projectList.push(newProject);

    return newProject;
}

function searchCurrentProject (currentProjectName) {
    const currentProject = projectList.find(project => project.name === currentProjectName ? true : false);

    return currentProject;
}

const projectList = []

export {Project, projectList, createProject, searchCurrentProject};