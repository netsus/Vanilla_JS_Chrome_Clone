const form = document.querySelector('.to_do_form'),
input = document.querySelector('.task'),
pending = document.querySelector('.pending'),
finished = document.querySelector('.finished'),
PEND_LS = 'PENDING',
FIN_LS = 'FINISHED';
let penLi = [];
let finLi = [];

function saveFin(){
    localStorage.setItem(FIN_LS,JSON.stringify(finLi));
}

function savePen(){
    localStorage.setItem(PEND_LS,JSON.stringify(penLi));
}

function updateLs(li){
    if (li.parentNode ===pending){
        const otherLi = penLi.filter(function(task){
            console.log(task);
            return task.id !== parseInt(li.id);
        });
        const selectLi = penLi.filter(function(task){
            return task.id === parseInt(li.id);
        })
        penLi = otherLi;
        // finLi.push(selectLi);
        savePen();
        // saveFin();
    }
    else if(li.parentNode === finished){
        const otherLi = finLi.filter(function(task){
            return task.id !== parseInt(li.id);
        });
        const selectLi = finLi.filter(function(task){
            return task.id === parseInt(li.id);
        })
        finLi = otherLi;
        // penLi.push(selectLi);
        // savePen();
        saveFin();
    }
    
}
//pending에서 제거, finished에 추가
function checkTask(event){
    const btn = event.target;
    let li = btn.parentNode;

    if (pending.hasChildNodes(li) || pending.hasChildNodes(li.parentNode)){
        try {
            pending.removeChild(li);
            finished.appendChild(li);
        } catch (error) {
            li = li.parentNode;
            pending.removeChild(li);
            finished.appendChild(li);
        } 
    }
    else if(finished.hasChildNodes(li) || finished.hasChildNodes(li.parentNode)){
        try {
            finished.removeChild(li);
            pending.appendChild(li);
        } catch (error) {
            li = li.parentNode;
            finished.removeChild(li);
            pending.appendChild(li);
        }
    }    
    updateLs(li);

}

function deleteTask(event){
    const btn = event.target;
    const li = btn.parentNode;
    try {
        const ul = li.parentNode;
        ul.removeChild(li);
    } catch (error) {
        ul.removeChild(li.parentNode);
    }
    updateLs(li);
}

// pending ul에 추가
function addPending(task){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const checkBtn = document.createElement('button');
    const newId = penLi.length + 1;
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    checkBtn.innerHTML = '<i class="fas fa-check-square"></i>';
    li.innerText = task;
    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    pending.appendChild(li);

    const taskObj = {
        id: newId,
        text:task
    }
    delBtn.addEventListener('click',deleteTask);
    checkBtn.addEventListener('click',checkTask)
    penLi.push(taskObj);
    savePen();
}

function handleSubmit(event){
    event.preventDefault();
    const task = input.value;
    addPending(task);
}

function loadTask(){
    const loadedTasks = localStorage.getItem(PEND_LS);

}

function init(){
    form.addEventListener('submit',handleSubmit);
    loadTask();
}
init();