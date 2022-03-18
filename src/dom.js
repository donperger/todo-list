

const DOMManipulation = (() => {
    function displayTask (task) {
        console.log(task.title, task.description);
    }

    function displayDate(task) {
        console.log(`${task.title}: ${task.dueDate}`);
    } 

    return {displayDate, displayTask}
})();

export {DOMManipulation};