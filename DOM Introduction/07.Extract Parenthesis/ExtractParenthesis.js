function extract(content) {

    let targetElement = document.getElementById(content);
    const textContent = targetElement.textContent;
    const regex = /\((.*?)\)/g;
    const matches = textContent.match(regex);

    if (!matches) {
        return "";
    }

    let extractedText = matches.map(match => match.slice(1, -1)).join("; ");

   return document.getElementById('holder').textContent = extractedText;

}

