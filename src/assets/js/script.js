const lbInput = document.querySelector('.InputTask');
const btnInput = document.querySelector('.btn');
const ul = document.querySelector('.ul');

function CreateLi(label) {
	const li = document.createElement('li');
	li.innerHTML = label;
	return li;
}

function CreateTask(label) {
	const li = CreateLi(label);
	ul.appendChild(li);
}

btnInput.addEventListener('click', function () {
	CreateTask(lbInput.value);
});