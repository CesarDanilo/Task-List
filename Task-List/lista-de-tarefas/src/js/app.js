const task = document.querySelector('.tarefa');
const time = document.querySelector('.time');
const lista = document.querySelector('.lista-de-tarefas');
const btntarefas = document.querySelector('.btn');



function salvartarefas() {
	let litarefa = lista.querySelectorAll('li');
	const listastarefas = [];

	for (let tarefa of litarefa) {
		listastarefas.push(tarefa.innerText.replace('Deletar', '').trim());
	}
	const tarefaJson = JSON.stringify(listastarefas);
	localStorage.setItem('tarefas', listastarefas);
}


function criarbtndelete() {
	const btn = document.createElement('button');
	return btn;
}

function criarLi() {
	const li = document.createElement('li');
	return li;
}

function criarlistatarefas(tasklist) {
	const li = criarLi();
	const btn = criarbtndelete();

	li.innerText = tasklist;
	btn.innerText = 'Deletar';
	li.appendChild(btn);
	lista.appendChild(li);

	salvartarefas();
	btn.addEventListener('click', function () {
		btn.parentElement.remove();
		salvartarefas();
	});

	task.value = '';
	time.value = '';
}

btntarefas.addEventListener('click', function () {
	if (!task.value) return;
	criarlistatarefas(task.value + ' ' + time.value);
});

task.addEventListener('keypress', function (e) {
	if (e.key == "Enter") {
		criarlistatarefas(task.value + ' ' + time.value);
	}
});

time.addEventListener('keypress', function (e) {
	if (e.key == "Enter") {
		criarlistatarefas(task.value + ' ' + time.value);
	}
});

// RESOLVER AQUE ESTA EM BAIXO
function adicionatarefas() {
	const tarefas = localStorage.getItem('tarefas');
	const listaTarefas = JSON.parse(tarefas);

	for (let tarefa of listaTarefas) {
		criarlistatarefas(tarefa);
	};
}

adicionatarefas();