const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'TODO';
let toDos = [];

// 삭제 이벤트 발생시 li삭제
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); // ul에서 li 삭제
    // cleanToDos에는 삭제대상 id와 다른 id를 갖는 li 저장.
    const cleanToDos = toDos.filter(function(toDo){ 
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

// LocalStorage에 추가 (toDos 리스트 필요)
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// 입력받은 값(text)을 ul 태그에 추가하고, toDos 리스트에 추가, localStorage에 추가
// 삭제이벤트 대응
function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerHTML = 'X';
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li); // ul에 li 추가
    const toDoObj = {
        text: text,
        id: newId
    };
    delBtn.addEventListener('click',deleteToDo); // 삭제이벤트 발생하면 삭제
    toDos.push(toDoObj);
    saveToDos();
}

// 값 입력받으면 출력(paint)하고, 값 초기화
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

// localStorage에서 값 가져와서 각자(forEach) 출력하고, paintToDO 진행
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }
}

function init(){
    toDoForm.addEventListener('submit', handleSubmit);
    loadToDos();
}

init();