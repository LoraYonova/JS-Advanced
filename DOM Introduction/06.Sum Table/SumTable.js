function sumTable() {

   let allElements = document.querySelectorAll('tbody tr');

   let sum = 0;

   for (let i = 1; i < allElements.length - 1; i++) {
   
        let children = allElements[i].children;
        let cost = children[children.length -1].textContent;
        sum += Number(cost);

   }

   console.log(sum);

   document.getElementById('sum').textContent = sum;

}