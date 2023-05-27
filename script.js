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
