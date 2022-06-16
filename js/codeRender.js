//code mirror setup
CodeMirror.commands.save = function () {
    var elt = editor.getWrapperElement();
    elt.style.background = "#def";
    setTimeout(function () { elt.style.background = ""; }, 300);
};
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "text/x-csrc",
    matchBrackets: true,
    keyMap: "emacs",
    readOnly: "false",

});
//end of codemirror setup

//database variable
var database = {
    1: {
        title: "Swapping two number with temp variable",
        code:
            `#include<stdio.h>
main() {
    int a = 5;
    int b = 10;
    printf("a=%d b=%d",a,b);
    int temp = a;
    a = b;
    b = temp;
    printf("a=%d b=%d",a,b);
}
`,
    },
    2: {
        title: "Swapping two numbers without using temp variable",
        code:
            `#include<stdio.h>
main() {
    int a = 5;
    int b = 6;
    int a = a*b/(b=1);
    printf("Hello");
}
`,
    }
}
//end of database variable
var renderId = localStorage.getItem('urlName')
var txtcode = document.getElementById('code')
var title = document.getElementById('title')
var data = database[`${renderId}`]
title.innerText = data.title
editor.getDoc().setValue(data.code);
