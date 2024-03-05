function colorize() {
    let allElement = document.querySelectorAll('table tr');

    for (let i = 1; i < allElement.length; i+= 2) {
       
        allElement[i].style.background = 'teal'
        
    }
}