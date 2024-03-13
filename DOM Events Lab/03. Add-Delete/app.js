function addItem() {

    let input = document.getElementById("newItemText").value;
    if (input.length === 0) return;

    let items = document.getElementById("items");

    let listElement = document.createElement("li");
    listElement.textContent = input;

    let remove = document.createElement("a");
    remove.textContent = "[Delete]";
    remove.href = "#";
    remove.onclick = () => listElement.remove();

    listElement.appendChild(remove);
    items.appendChild(listElement);
}

