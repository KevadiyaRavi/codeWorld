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
        title: "Find equivalent binary of Integer using char pointer",
        code: `        #include <stdio.h>
        #include <stdlib.h>
        int main()
        {
            int x = 10;
            char *cp = &x;
            for (int i = sizeof(int) - 1; i >= 0; i--)
            {
                for (int j = 7; j >= 0; j--)
                {
                    printf("%d", *(cp + i) >> j & 1);
                }
            }
        }
        `
    },
    2: {
        title: "Find equivalent binary of Float using char pointer",
        code: `     #include <stdio.h>
        #include <stdlib.h>
        int main()
        {
            float x = 7.5;
            char *cp = &x;
            for (int i = sizeof(float) - 1; i >= 0; i--)
            {
                for (int j = 7; j >= 0; j--)
                {
                    printf("%d", *(cp + i) >> j & 1);
                }
            }
        }
        `
    },
    3: {
        title: "Find equivalent binary of Double using char pointer",
        code: `#include <stdio.h>
        #include <stdlib.h>
        int main()
        {
            double x = 7.5;
            char *cp = &x;
            for (int i = 7 - 1; i >= 0; i--)
            {
                for (int j = 7; j >= 0; j--)
                {
                    printf("%d", *(cp + i) >> j & 1);
                }
            }
        }
        `
    },
    4: {
        title: "Find equivalent binary of Double using integer pointer",
        code: `        #include <stdio.h>
        #include <stdlib.h>
        int main()
        {
            double x = 7.5;
            int *ip = &x;
            for (int i = 1; i >= 0; i--)
            {
                for (int j = 31; j >= 0; j--)
                {
                    printf("%d", *(ip + i) >> j & 1);
                }
            }
        }
        `
    },
    x: {
        title: "",
        code: `
        `
    },
}
//end of database variable
var renderId = localStorage.getItem('urlName')
var txtcode = document.getElementById('code')
var title = document.getElementById('title')
var data = database[`${renderId}`]
title.innerText = data.title
document.querySelector('title').innerText = `${data.title}`

editor.getDoc().setValue(data.code);
