const taskOperations = (() => {
    const createTask = (title, description, dueDate, priotiry) => {
        return { title, description, dueDate, priotiry }
    };

    function getTaskData () {
        const titleInput = document.querySelector("#title");
        const descriptionInput = document.querySelector("#description");
        const dueDateInput = document.querySelector("#due_date");
        const isImportantInput = document.querySelector("#important");

        console.log(titleInput, descriptionInput, dueDateInput, isImportantInput);
    }

    return {createTask, getTaskData};
})();



export { taskOperations };