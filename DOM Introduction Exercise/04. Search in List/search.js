function search() {
   
   let towns = document.getElementById("towns").getElementsByTagName("li");
  
   let search = document.getElementById("searchText").value.toLowerCase().trim();

   let result = 0;
   for (let i = 0; i < towns.length; i++) {
      let townText = towns[i].textContent.toLowerCase().trim();

      if (townText.includes(search)) {
          result++;
          towns[i].style.fontWeight = "bold";
      } else {
          towns[i].style.fontWeight = "normal"; 
          towns[i].style.textDecoration = "none"; 
      }
  }

   

   let text = document.getElementById("result");

   text.textContent = (`${result} matches found`)
}
