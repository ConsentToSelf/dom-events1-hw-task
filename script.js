// first

/*
По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
*/

const btnMsg = document.querySelector("#btn-msg");

btnMsg.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  alert(btnMsg.dataset.text);
});

// second

/*
При наведении указателя мыши на "btn-msg", кнопка становится красной;
когда указатель мыши покидает кнопку, она становится прежнего цвета.
Цвет менять можно через добавление класса.
*/

btnMsg.addEventListener("mouseover", (e) => {
  btnMsg.classList.add("green");
});
btnMsg.addEventListener("mouseout", (e) => {
  btnMsg.classList.remove("green");
});

// third

/*
При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
*/
const idTagName = document.querySelector("#tag");
document.body.addEventListener("click", (e) => {
  idTagName.textContent = `Tag: ${e.target.nodeName}`;
});
