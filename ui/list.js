var list = document.querySelector('.list');

WeDeploy
    .data('db-noticiasleganes.wedeploy.io')
    .orderBy('id', 'desc')
    .limit(5)
    .get('tasks')
    .then(function(response) {
        appendTasks(response);
    })
    .catch(function(error) {
        console.error(error);
    });

function appendTasks(tasks) {
	var taskList = '';

	tasks.forEach(function(task) {
		taskList += `<input type="text" value="${task.name}" readonly>`;
	});

	list.innerHTML = taskList;
}
