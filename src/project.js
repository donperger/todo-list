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

const projectList = []

export {Project, projectList, createProject};