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
        title: "Half pyramid of *",
        code:
            `
            #include <stdio.h>
            int main() {
            int i, j, rows;
            printf("Enter the number of rows: ");
            scanf("%d", &rows);
            for (i = 1; i <= rows; ++i) {
                for (j = 1; j <= i; ++j) {
                    printf("* ");
                }
                printf("\\n");
            }
            return 0;
            }
            
`,
    },
    2: {
        title: "Half pyramid of numbers",
        code:
            `
        #include <stdio.h>
            int main()
            {
                int rows;
                printf("Enter the number of rows: ");
                scanf("%d", &rows);
                for (int i = 1; i <= rows; ++i)
                {
                    for (int j = 1; j <= i; ++j)
                    {
                        printf("%d ", j);
                    }
                    printf("\\n");
                }
                return 0;
            }      
        `
    },
    3: {
        title: "Half pyramid of alphabates",
        code: `#include <stdio.h>
    int main()
    {
        int i, j;
        char input, alphabet = 'A';
        printf("Enter an uppercase character you want to print in the last row: ");
        scanf("%c", &input);
        for (i = 1; i <= (input - 'A' + 1); ++i)
        {
            for (j = 1; j <= i; ++j)
            {
                printf("%c ", alphabet);
            }
            ++alphabet;
            printf("\n");
        }
        return 0;
    }
    
`
    },
    4: {
        title: "Half inverted pyramid",
        code: `#include <stdio.h>
        int main()
        {
            int i, j, rows;
            printf("Enter the number of rows: ");
            scanf("%d", &rows);
            for (i = rows; i >= 1; --i)
            {
                for (j = 1; j <= i; ++j)
                {
                    printf("* ");
                }
                printf("\\n");
            }
            return 0;
        }
        `
    },
    5: {
        title: "Full pyradmid of *",
        code: `#include <stdio.h>
        int main()
        {
            int n;
            printf("Enter number of rows:");
            scanf("%d", &n);
            for (int i = 1; i <= n; i++)
            {
                for (int j = 1; j <= n - i; j++)
                    printf(" ");
                for (int k = 1; k <= i; k++)
                    printf("%c ", '*');
                printf("\\n");
            }
        }
        
        `
    },
    6: {
        title: "Full pyramid of alphabates",
        code: `#include <stdio.h>
        int main()
        {
            int n;
            printf("Enter number of rows:");
            scanf("%d", &n);
            for (int i = 1; i <= n; i++)
            {
                for (int j = 1; j <= n - i; j++)
                    printf(" ");
                for (int k = 1; k <= i; k++)
                    printf("%c ", k + 64);
                printf("\\n");
            }
        }
        
        `
    },
    7: {
        title: "Full inverted pyramid",
        code: `#include <stdio.h>
        int main()
        {
            int n;
            printf("Enter number of rows:");
            scanf("%d", &n);
            printf("\\n");
            for (int i = n; i >= 0; i--)
            {
                for (int j = 1; j <= n - i; j++)
                    printf(" ");
                for (int k = 1; k <= i; k++)
                    printf("%c ", '*');
                printf("\\n");
            }
        }
        `
    },
    8: {
        title: "Mirror image pattern (Using Three Loops)",
        code: `#include <stdio.h>
        int main()
        {
            int n;
            printf("Enter number of rows:");
            scanf("%d", &n);
            for (int i = -n; i <= n; i++)
            {
                int l = i;
                if (i < 0)
                    l = -i;
                for (int j = 1; j <= l; j++)
                    printf(" ");
                for (int k = 0; k <= (n - l); k++)
                    printf("* ");
                printf("\\n");
            }
        }
        `
    },
    9: {
        title: "Mirror Image patterns(With two loop)",
        code: `#include <stdio.h>
        #include <math.h>
        int main()
        {
            int n;
            printf("Enter number of rows:");
            scanf("%d", &n);
            for (int i = -n / 2; i <= n / 2; i++)
            {
                int k = abs(i);
                for (int j = 0; j <= n / 2; j++)
                {
                    if (k <= j)
                        printf("* ");
                    else
                        printf(" ");
                }
                printf("\n");
            }
        }
        `
    },
    10: {
        title: "Double pattern pyramid",
        code: `#include <stdio.h>
        #include <math.h>
        int main()
        {
            int r;
            printf("Enter number rows:");
            scanf("%d", &r);
        
            for (int i = 0; i <= r; i++)
            {
                for (int j = -r; j <= r; j++)
                {
                    int k = abs(j);
                    if (k >= i)
                        printf("%d", r - k + 1);
                    else
                        printf(" ");
                }
                printf("\\n");
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
