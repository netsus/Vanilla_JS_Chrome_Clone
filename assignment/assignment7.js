const form = document.querySelector('.to_do_form'),
input = document.querySelector('.task'),
pending = document.querySelector('.pending'),
finished = document.querySelector('.finished');

function addList(task){
    
}

function handleSubmit(event){
    event.preventDefault();
    const task = input.value;
    addList(task);
    task = '';
}

function init(){
    form.addEventListener('submit',handleSubmit);
}
init();