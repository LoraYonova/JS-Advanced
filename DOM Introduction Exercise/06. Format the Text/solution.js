function solve() {
  
  let inputText = document.getElementById("input").value.trim();
  let sentences = inputText.split('.'); 

  let outputContainer = document.getElementById("output");
  outputContainer.innerHTML = '';

  let paragraphSentences = [];
  for (let i = 0; i < sentences.length; i++) {
      paragraphSentences.push(sentences[i]); 

   
      if (paragraphSentences.length === 3 || i === sentences.length - 1) {
          let paragraph = document.createElement("p");
          paragraph.textContent = paragraphSentences.join('. '); 
          outputContainer.appendChild(paragraph);
          paragraphSentences = []; 
      }
  }
}