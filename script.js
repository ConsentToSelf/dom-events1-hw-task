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
// const idTagName = document.querySelector("#tag");
// document.body.addEventListener("click", (e) => {
//   idTagName.textContent = `Tag: ${e.target.nodeName}`;
// });

// fourth

/*
При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li
с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
*/

const btnGenerate = document.querySelector("#btn-generate");
const list = document.querySelector(".list");
const arrayFromList = [...list.children];
const addItemToList = () => {
  const originalListLength = list.children.length;
  arrayFromList.forEach((event, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `item ${index + originalListLength + 1}`;
    list.appendChild(listItem);
  });
};

btnGenerate.addEventListener("click", addItemToList);
