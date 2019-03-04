window.onload = function () {
  
    var readOnlyCodeMirrorJava = CodeMirror.fromTextArea(document.getElementById('codesnippet_readonly_java1'), {
        mode: "javascript",
        theme: "icecoder",
        lineNumbers: true,
        readOnly: true
    }); 

    var readOnlyCodeMirrorSwift = CodeMirror.fromTextArea(document.getElementById('codesnippet_readonly_java2'), {
        mode: "javascript",
        theme: "icecoder",
        lineNumbers: true,
        readOnly: true
    });

    var readOnlyCodeMirrorSwift = CodeMirror.fromTextArea(document.getElementById('codesnippet_readonly_java3'), {
        mode: "javascript",
        theme: "icecoder",
        lineNumbers: true,
        readOnly: true
    });
  
};

