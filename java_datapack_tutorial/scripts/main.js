function clearStorage() {
    sessionStorage.clear();
    sessionStorage.setItem("questions", "{}");
}

async function displayMarkdownContent(name) {
    const markdownText = await fetch(`/guides/${name}.md`).then(r => r.text());
    let markdownOutput = new showdown.Converter().makeHtml(markdownText);
    document.getElementById(`display-${name}-markdown`).innerHTML = markdownOutput;
}