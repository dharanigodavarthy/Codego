debugger
console.log("in script of js");
var editor = CodeMirror.fromTextArea(document.getElementById("editor-js"),{
    mode: "javascript",
    lineNumbers: true,
    lint: true,
    gutters: ["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"]
    
});