const taskOperations = (() => {
    const createTask = (title, description, dueDate, priotiry) => {
        return { title, description, dueDate, priotiry }
    };

    return {createTask};
})();



export { taskOperations };