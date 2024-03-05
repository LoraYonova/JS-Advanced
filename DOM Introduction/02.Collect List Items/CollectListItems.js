function extractText() {
   

    let items = document.getElementById('items').getElementsByTagName('li');

    let textArea = document.getElementById('result');

    for (let node of items) {
        console.log(node);
        textArea.value += node.textContent + "\n";
    }

    
}