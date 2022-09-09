const form= document.getElementById('contact_form');
const username=document.getElementById('username');
const email=document.getElementById('email');
//const topic=document.getElementById('topic');
const subject=document.getElementById('subject');
const message=document.getElementById('message');

const modalForm=document.querySelector("#form_modal")
const closeModalForm=document.querySelector(".close_modal_form")
const openModalForm=document.querySelector(".open_modal_form")

const primaryNav= document.querySelector(".header_menu")
const navToggle=document.querySelector(".mobile_toggle")

navToggle.addEventListener("click",()=>{
    const visibility=primaryNav.getAttribute("data-visible")
    if(visibility=== "false"){
        primaryNav.setAttribute("data-visible",true)
        navToggle.setAttribute("aria-expanded",true)
    }else if(visibility==="true"){
        primaryNav.setAttribute("data-visible",false)
        navToggle.setAttribute("aria-expanded",false)
    }
})

form.addEventListener('submit',e=>{
    e.preventDefault();
    
    checkInputs(); 
})

console.log(email.value.trim())
function checkInputs(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
   // const topicValue=topic.value.trim();
    const subjectValue=subject.value.trim();
    const messageValue=message.value.trim();
    usernameValue ===''?setError(username,"Username cannot be blank"):setSuccess(username);
    emailValue === ''?setError(email,'Email cannot be blank'):!validEmail(emailValue)?setError(email,'Not a valid email'):setSuccess(email);
   // topicValue ===''?setError(topic,"Topic cannot be blank"):setSuccess(topic);
    subjectValue ===''?setError(subject,"Subject cannot be blank"):setSuccess(subject);
    messageValue ===''?setError(message,"Message cannot be blank"):setSuccess(message);
    console.log(messageValue)
    console.log("hello")
}

/* function setError(input,message){
    const formControl=input.parentElement;
    const small= formControl.querySelector('small');
    formControl.className='input_status_error'
    small.innerText=message;
}
function setSuccess(input){
    const formControl=input.parentElement;
    formControl.ClassName = 'input_status_success';
} */

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
function validEmail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
console.log(username.value)
console.log(email.value)
console.log(subject.value)
console.log(message.value)


    openModalForm.addEventListener("click",()=>{
        if(username.value.trim() !== '' && email.value.trim() !== '' && validEmail(email.value.trim()) && subject.value.trim() !== '' && message.value.trim()!==''){
            modalForm.showModal();
        }
    })

closeModalForm.addEventListener("click",()=>{  
    modalForm.close();      
    location.reload();
    document.getElementById("contact_form").reset();
})