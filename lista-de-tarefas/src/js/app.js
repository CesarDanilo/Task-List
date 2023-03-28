const task = document.querySelector('.tarefa');
const time = document.querySelector('.time');
const lista = document.querySelector('.lista-de-tarefas');
const btntarefas = document.querySelector('.btn');

function criarLi() {
	const li = document.createElement('li');
	return li;
}

function criarlistatarefas(tasklist) {
	const li = criarLi();
	li.innerText = tasklist;
	lista.appendChild(li);
}

btntarefas.addEventListener('click', function () {
	if (!task.value) return;
	criarlistatarefas(task.value +' '+ time.value);
});