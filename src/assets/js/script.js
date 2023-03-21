const lbInput = document.querySelector('.InputTask');
const btnInput = document.querySelector('.btn');
const ul = document.querySelector('.ul');

// ESSA FUNÇÃO VAI CRIAR CADA TAREFA EM UMA TAG LI, PASSANDO O LABEL E COLOCANDO DENTRO DE LI
function CreateLi(label) {
	const li = document.createElement('li');
	li.innerHTML = label;
	return li;
}

// ESSA FUNÇÃO VAI CRIAR UM BOTÃO APAGAR CONCATENANDO COM NOSSO LI, FICANDO NA MESMA LINNHA E LI COMO PAI
function CriarBtnApagar(li) {
	li.innerText += ' ';
	const buttonApagar = document.createElement('button');
	buttonApagar.setAttribute('class', 'btnApagar');
	buttonApagar.innerText = 'apagar';
	li.appendChild(buttonApagar);
}

// LIMPA O LABEL E MANTEM ELE NO FOCO
function LimparInput() {
	lbInput.value = '';
	lbInput.focus();
}

// NOSSA FUNÇÃO PRINCIPAL QUE VAI CHAMAR AS FUNÇÕES E EXECUTALAS 
function CreateTask(label) {
	const li = CreateLi(label);
	CriarBtnApagar(li);
	ul.appendChild(li);
	LimparInput();
}

// VAI PEGAR O EVENTO DO ENTER DO TECLADO 
lbInput.addEventListener('keypress', function (e) {
	if (e.keyCode === 13) {
		if (!lbInput.value) {
			return;
		}
		CreateTask(lbInput.value);
	}
});

// VAI CHAMAR A FUNÇÃO PRINCIPAL ASSIM QUE FOI FEITO O EVENTO DE CLICK NO BOTÃO 
btnInput.addEventListener('click', function () {
	CreateTask(lbInput.value);
});

// FUNÇÃO DE APAGAR O ITEM DA LISTA 
document.addEventListener('click', function (e) {
	const tag = e.target; // PEGAMOS A TAG INTEIRA DO NOSSO EVENTO 
	const classtag = tag.classList.value; // AQUI COM O CLASSLIST.VALUE PEGAMOS A LISTA DA NOSSA CLASSE E O VALOR DELA 
	if (classtag == 'btnApagar'){ // FAZEMOS A COMPARAÇÃO 
		const btn = document.querySelector(`.${classtag}`); // E PEGAMOS O ELEMENTO DA CLASSE 
		btn.parentElement.remove(); // E REMOVEMOS O PAI DELA ASSIM REMOVENDO A TAREFA E O BOTÃO 
	}
 });