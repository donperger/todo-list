const taskOperations = (() => {
    const createTask = (title, description, dueDate, isImportant, isDone) => {
        return { title, description, dueDate, isImportant, isDone }
    };

    function getTaskData () {
        const titleInput = document.querySelector("#title").value;
        const descriptionInput = document.querySelector("#description").value;
        const dueDateInput = document.querySelector("#due_date").value;
        const isImportantInput = document.querySelector("#important").checked;

        if (titleInput) {
            return {titleInput, descriptionInput, dueDateInput, isImportantInput};
        } else {
            alert("You have to fill out all required fields!");
        }
    }

    return {createTask, getTaskData};
})();



export { taskOperations };