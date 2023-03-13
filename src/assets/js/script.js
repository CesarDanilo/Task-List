const lbInput = document.querySelector('.InputTask');
const btnInput = document.querySelector('.btn');
const ul = document.querySelector('.ul');

function CreateLi(label) {
	const li = document.createElement('li');
	li.innerHTML = label;
	return li;
}

function CriarBtnApagar(li) {
	li.innerText += ' ';
	const buttonApagar = document.createElement('button');
	buttonApagar.setAttribute('class', 'btnApagar');
	buttonApagar.innerText = 'apagar';
	li.appendChild(buttonApagar);
}

lbInput.addEventListener('keypress', function (e) {
	if (e.keyCode === 13) {
		if (!lbInput.value) {
			return;
		}
		CreateTask(lbInput.value);
	}
});

function LimparInput() {
	lbInput.value = '';
	lbInput.focus();
}

function CreateTask(label) {
	const li = CreateLi(label);
	CriarBtnApagar(li);
	ul.appendChild(li);
	LimparInput();
}

btnInput.addEventListener('click', function () {
	CreateTask(lbInput.value);
});

document.addEventListener('click', function(event){});