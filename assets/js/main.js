const contactForm = document.getElementById('contact_form');
const formUsername = document.querySelector('.form_username');
const formEmail = document.getElementById('form_email');
const formSubject = document.getElementById('form_subject');
const formMessage = document.getElementById('form_message');
const modalForm = document.querySelector('#form_modal');
const closeModalForm = document.querySelector('.close_modal_form');
const openModalForm = document.querySelector('.open_modal_form');
const primaryNav = document.querySelector('.header_menu');
const navToggle = document.querySelector('.mobile_toggle');

openModalForm.addEventListener('click', () => {
	if (
		formUsername.value.trim() !== '' &&
		formEmail.value.trim() !== '' &&
		validEmail(formEmail.value.trim()) &&
		formSubject.value.trim() !== '' &&
		formMessage.value.trim() !== ''
	) {
		modalForm.showModal();
	}
});
contactForm.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});
closeModalForm.addEventListener('click', () => {
	modalForm.close();
	location.reload();
	document.getElementById('contact_form').reset();
});
navToggle.addEventListener('click', () => {
	const visibility = primaryNav.getAttribute('data-visible');
	if (visibility === 'false') {
		primaryNav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
	} else if (visibility === 'true') {
		primaryNav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	}
});
function validEmail(email) {
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
function checkInputs() {
	checkInputUsername();
	checkInputEmail();
	checkInputSubject();
	checkInputMessage();
}
function checkInputUsername() {
	formUsername.value.trim() === ''
		? setError(formUsername, 'Username cannot be blank')
		: setSuccess(formUsername);
}
function checkInputEmail() {
	formEmail.value.trim() === ''
		? setError(formEmail, 'Email cannot be blank')
		: !validEmail(formEmail.value.trim())
		? setError(formEmail, 'Not a valid email')
		: setSuccess(formEmail);
}
function checkInputSubject() {
	formSubject.value.trim() === ''
		? setError(formSubject, 'Subject cannot be blank')
		: setSuccess(formSubject);
}
function checkInputMessage() {
	formMessage.value.trim() === ''
		? setError(formMessage, 'Message cannot be blank')
		: setSuccess(formMessage);
}
function setError(e, message) {
	const inputControl = e.parentElement;
	console.log(inputControl);
	const errorDisplay = inputControl.querySelector('.error');
	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
}

function setSuccess(e) {
	const inputControl = e.parentElement;
	console.log(inputControl);
	const errorDisplay = inputControl.querySelector('.error');
	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
}
