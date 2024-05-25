async function main() {
    let pyodide = await loadPyodide({indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/" });
    await pyodide.loadPackage("micropip");
    pyodide.runPythonAsync(`
        import micropip
        await micropip.install("tokenstream")
        await micropip.install("allay")
        
        import allay
        import js

        parser = allay.Parser()
        
        def parse_text(text):
            js.document.getElementById("output_text").value = parser.parse(text)
    `).then(() => {
        self.parse_text = pyodide.globals.get("parse_text");
        document.getElementById("parse_button").disabled = false;
    });
};
