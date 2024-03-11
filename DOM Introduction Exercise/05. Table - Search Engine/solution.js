function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById("searchField").value;
      
    let table = document.getElementsByTagName("tr");
   
    for (let i = 2; i < table.length; i++) {
         let row = table[i].textContent.toLowerCase();
        
      if (row.includes(search.toLowerCase())) {
         table[i].style.backgroundColor = "yellow";
       }

    }
   }
}