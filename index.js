// 브라우저에서 제공하는 함수 존재
// -> HTML을 다루는게 목적

const title = document.getElementById("title");
// index.html 페이지의 개발자도구의 Console에 아래 내용이 출력된다.
console.log(title);

console.error("Fuck");


//DOM

title.innerHTML = "Hi! From JS";

// title의 모든 오브젝트를 보여줌 -> Console에서
console.dir(title);

// title의 style 변경 가능
title.style.color = "yellow";

// HTML과 CSS 문서 전체 오브젝트 보여줌.
console.dir(document);

document.title = "I own you now"

// querySelector는 CSS 선택자와 유사
// 제일 많이 사용!!
const qeurySelector = document.querySelector("#title")