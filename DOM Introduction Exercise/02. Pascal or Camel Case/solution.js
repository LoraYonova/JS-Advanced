function solve() {
  
   let text = document.getElementById("text").value.toLowerCase();
   let namingConvention = document.getElementById("naming-convention").value;

   let arrText = text.split(" ");
   let result = "";

   if (namingConvention === "Camel Case") {
   result = arrText.shift();
   arrText.forEach(element => {

    result += element[0].toUpperCase() + element.substring(1).toLowerCase();
    
   });
    
  } else if (namingConvention === "Pascal Case") {
    arrText.forEach(element => {
      result += element[0].toUpperCase() + element.substring(1).toLowerCase();
    })

  } else {
    result = "Error!";
}
  

   document.getElementById("result").textContent = result;
 
}