// 브라우저에서 제공하는 함수 존재
// -> HTML을 다루는게 목적

const title = document.getElementById("title");

// index.html 페이지의 개발자도구의 Console에 아래 내용이 출력된다.
console.log(title);

console.error("Fuck");


//DOM

title.innerHTML = "Hi! From JS";