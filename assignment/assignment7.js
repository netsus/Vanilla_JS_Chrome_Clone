const form = document.querySelector('.to_do_form'),
input = document.querySelector('.task'),
pending = document.querySelector('.pending'),
finished = document.querySelector('.finished');


const PEND_LS = 'PENDING';
const FIN_LS = 'FINISHED';
let taskLi = [];
let finLi = [];

// 삭제 이벤트 발생시 li삭제
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    try {
        pending.removeChild(li);
        console.log(pending);
    } catch {
        try{
            finished.removeChild(li);
            console.log(finished);} catch{
                //pass
            }
    } // ul에서 li 삭제
    // cleanToDos에는 삭제대상 id와 다른 id를 갖는 li 저장.
    const taskcleanToDos = taskLi.filter(function(toDo){ 
        return toDo.id !== parseInt(li.id);
    });
    taskLi = taskcleanToDos;
    const fincleanToDos = finLi.filter(function(toDo){ 
        return toDo.id !== parseInt(li.id);
    });
    finLi = fincleanToDos;
    saveToDos();
}


// LocalStorage에 추가 (toDos 리스트 필요)
function saveToDos() {
    localStorage.setItem(PEND_LS, JSON.stringify(taskLi));
    localStorage.setItem(FIN_LS, JSON.stringify(finLi));
}

function finToDo(event, li, finBtn,text,newId,delBtn){
    const btn = event.target;
    const pli = btn.parentNode;
    pending.removeChild(pli);
    const pendBtn = document.createElement('button');
    pendBtn.innerHTML = '<<';
    li.removeChild(finBtn);
    li.appendChild(pendBtn);
    finished.appendChild(li); // ul에 li 추가
    const toDoObj = {
        text: text,
        id: newId
    };
    delBtn.addEventListener("click", function(event){
        deleteToDo(event);}, false); // 삭제이벤트 발생하면 삭제
    pendBtn.addEventListener("click", function(event){
        pendToDo(event, li, pendBtn,text,newId,delBtn);}, false); // fin이벤트 발생하면 fin으로 이동
    finLi.push(toDoObj);
    const taskcleanToDos = taskLi.filter(function(toDo){ 
        return toDo.id !== parseInt(li.id);
    });
    taskLi = taskcleanToDos;
    saveToDos();
}

function pendToDo(event, li,pendBtn,text,newId,delBtn){
    const btn = event.target;
    const pli = btn.parentNode;
    finished.removeChild(pli);
    const finBtn = document.createElement('button');
    finBtn.innerHTML = 'V';
    li.removeChild(pendBtn);
    li.appendChild(finBtn);
    pending.appendChild(li); // ul에 li 추가
    const toDoObj = {
        text: text,
        id: newId
    };
    delBtn.addEventListener("click", function(event){
        deleteToDo(event);}, false); // 삭제이벤트 발생하면 삭제
    finBtn.addEventListener("click", function(event){
        finToDo(event, li, finBtn, text, newId, delBtn);}, false);   // fin이벤트 발생하면 fin으로 이동
    taskLi.push(toDoObj);
    const fincleanToDos = finLi.filter(function(toDo){ 
        return toDo.id !== parseInt(li.id);
    });
    finLi = fincleanToDos;
    saveToDos();
}

// 입력받은 값(text)을 ul 태그에 추가하고, toDos 리스트에 추가, localStorage에 추가
// 삭제이벤트 대응
function pendingToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const finBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = parseInt(Math.random()*10000000000);
    delBtn.innerHTML = 'X';
    finBtn.innerHTML = 'V';
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finBtn);
    li.id = newId;
    pending.appendChild(li); // ul에 li 추가
    const toDoObj = {
        text: text,
        id: newId
    };
    delBtn.addEventListener("click", function(event){
        deleteToDo(event);}, false); // 삭제이벤트 발생하면 삭제
    finBtn.addEventListener("click", function(event){
        finToDo(event, li, finBtn, text, newId, delBtn);}, false);   // fin이벤트 발생하면 fin으로 이동
    taskLi.push(toDoObj);
    saveToDos();
}
function finishToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const pendBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = parseInt(Math.random()*10000000000);
    delBtn.innerHTML = 'X';
    pendBtn.innerHTML = '<<';
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(pendBtn);
    li.id = newId;
    finished.appendChild(li); // ul에 li 추가
    const toDoObj = {
        text: text,
        id: newId
    };
    delBtn.addEventListener("click", function(event){
        deleteToDo(event);}, false); // 삭제이벤트 발생하면 삭제
    pendBtn.addEventListener("click", function(event){
        pendToDo(event, li, pendBtn, text, newId, delBtn);}, false);   // fin이벤트 발생하면 fin으로 이동
    finLi.push(toDoObj);
    saveToDos(finLi);
}

// 값 입력받으면 출력(paint)하고, 값 초기화
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    pendingToDo(currentValue);
    input.value = '';
}

// localStorage에서 값 가져와서 각자(forEach) 출력하고, pendingToDo 진행
function loadToDos() {
    const pendToDos = localStorage.getItem(PEND_LS);
    const finToDos = localStorage.getItem(FIN_LS);
    if(pendToDos !== null){
        const parsedToDos = JSON.parse(pendToDos);
        parsedToDos.forEach(function(toDo){
            console.log("PENDING:",toDo.text);
            pendingToDo(toDo.text);
        });
    }
    if(finToDos !== null){
        const parsedToDos = JSON.parse(finToDos);
        parsedToDos.forEach(function(toDo){
            console.log("FINISHED:",toDo.text);
            finishToDo(toDo.text);
        });
    }
}

function init(){
    form.addEventListener('submit', handleSubmit);
    loadToDos();
}

init();