// Seleciona elementos HTML da página
const task = document.querySelector('.tarefa');
const time = document.querySelector('.time');
const lista = document.querySelector('.lista-de-tarefas');
const btntarefas = document.querySelector('.btn');

// Salva as tarefas na localStorage
function salvartarefas() {
	const listastarefas = [];
	let litarefa = lista.querySelectorAll('li');

	for (let tarefa of litarefa) {
		listastarefas.push(tarefa.innerText.replace('Deletar', '').trim().toString());
	}

	const tarefaJson = JSON.stringify(listastarefas);''
	localStorage.setItem('tasks', tarefaJson);
}

// Adiciona as tarefas salvas na localStorage
function adicionatarefas() {
	const lista_de_itens = localStorage.getItem('tasks');
	let tarefas = JSON.parse(lista_de_itens);

	for (let i in tarefas) {
		console.log(tarefas[i]);
		criarlistatarefas(tarefas[i]);
	}
}

// Cria o botão de deletar tarefa
function criarbtndelete() {
	const btn = document.createElement('button');
	return btn;
}

// Cria o elemento de lista HTML
function criarLi() {
	const li = document.createElement('li');
	return li;
}

// Cria a lista de tarefas a partir de uma string passada por parâmetro
function criarlistatarefas(tasklist) {
	const li = criarLi();
	const btn = criarbtndelete();

	li.innerText = tasklist;
	btn.innerText = 'Deletar';
	li.appendChild(btn);
	lista.appendChild(li);

	// Salva a lista de tarefas e adiciona um evento de click para deletar tarefas
	salvartarefas();
	btn.addEventListener('click', function () {
		btn.parentElement.remove();
		salvartarefas();
	});

	// Limpa os campos de input
	task.value = '';
	time.value = '';
}

// Adiciona evento de click para adicionar tarefas na lista
btntarefas.addEventListener('click', function () {
	if (!task.value) return;
	criarlistatarefas(task.value + ' ' + time.value);
});

// Adiciona eventos de pressionar tecla Enter para adicionar tarefas na lista
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
