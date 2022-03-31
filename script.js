// add a button, when the button is clicked:

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function (event) {
  let addItem = document.getElementById("addItem").value;
  const addNewItem = document.createElement("li");
  addNewItem.innerHTML = addItem;
  const list = document.querySelector("ul");
  list.appendChild(addNewItem);
  document.getElementById("addItem").value = "";
  removeEventListener(addNewItem);
});

const removeItemList = document.getElementsByTagName("li");
for (let i = 0; i < removeItemList.length; i++) {
  removeEventListener(removeItemList[i]);
}

function removeEventListener(el) {
  el.addEventListener("click", function (event) {
    event.target.classList.add("crossOut");

    // user clicks on a list item - removed

    setTimeout(() => {
      event.target.remove();
    }, 1000);
  });
}
