const taskOperations = (() => {
    const createTask = (title, description, dueDate, priotiry) => {
        return { title, description, dueDate, priotiry }
    };

    function addTaskToArray (task, array) {
        array.push(task);
    }

    return {createTask,
    addTaskToArray};
})();



export { taskOperations };