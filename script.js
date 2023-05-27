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
