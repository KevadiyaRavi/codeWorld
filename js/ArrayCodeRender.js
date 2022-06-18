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
            `
            #include <stdio.h>
            #include <stdlib.h>
            int main()
            {
                int array[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
                int size = sizeof(array) / sizeof(array[0]);
                int *odd = (int *)malloc(size * sizeof(int));
                int *even = (int *)malloc(size * sizeof(int));
                int oddIndex = 0, evenIndex = 0;
                for (int i = 0; i < size; i++)
                {
                    if (array[i] % 2 == 0)
                    {
                        even[evenIndex++] = array[i];
                    }
                    else
                        odd[oddIndex++] = array[i];
                }
                printf("Odd Array: ");
                for (int i = 0; i < oddIndex; i++)
                {
                    printf("%d ", odd[i]);
                }
                printf("\\nEven Array: ");
                for (int i = 0; i < evenIndex; i++)
                {
                    printf("%d ", even[i]);
                }
            }
`,
    },
    2: {
        title: "Linear search for single element",
        code:
            `
    #include <stdio.h>
    int Linear_search(int a[], int n, int element)
    {
        int i;
        int index;
        for (i = 0; i < n; i++)
        {
            if (a[i] == element)
                return i;
        }
        return -1;
    }


    main()
    {

        int a[] = {10, 35, 28, 29, 56, 78, 100, 45, 24, 7, 2, 0}; // int array
        int n = sizeof(a) / sizeof(a[0]);
        int element;
        int res;

        printf("Enter the element you want to find: \\n");
        scanf("%d", &element);

        res = Linear_search(a, n, element);

        if (res != -1)
            printf("The element %d you have entered is present at index %d.\\n", element, res);

        else
            printf("The element %d is not present.\\n", element);
    }
`,
    },
    3: {
        title: "Linear search if element is repeated from array",
        code:
            `
        #include <stdio.h>
        int Linear_search(int a[], int n, int element)
        {
            int i;
            int count = 0;
            for (i = 0; i < n; i++)
            {
                if (a[i] == element)
                {
                    printf("The element %d is present at index %d.\\n", element, i);
                    count++;
                }
            }
            if (count == 0)
                return -1;
            else
                return 0;
        }
        
        
        main()
        {
        
            int a[] = {10, 35, 28, 29, 56, 78, 100, 45, 24, 7, 2, 10}; // int array
            int n = sizeof(a) / sizeof(a[0]);
            int element;
            int res;
        
            printf("Enter the element you want to find: \\n");
            scanf("%d", &element);
        
            res = Linear_search(a, n, element);
        
            if (res == -1)
                printf("The element %d is not present.\\n", element);
        }`
    },
    4: {
        title: "Binary Search for element in array",
        code:
            `
    #include <stdio.h>
    int Binary_search(int a[], int n, int element)
    {

        int high, low, mid;
        low = 0;
        high = n - 1;

        while (low <= high)
        {
            // mid = (low + high)/2;
            mid = (low + high) >> 1;

            if (a[mid] == element)
                return mid;
            if (a[mid] < element)
                low = mid + 1;
            if (a[mid] > element)
                high = mid - 1;
        }
        return -1;
    }

    main()
    {
        int a[] = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
        int n = sizeof(a) / sizeof(a[0]);
        int element;
        int res;
        printf("Enter the element you want to find: \\n");
        scanf("%d", &element);
        res = Binary_search(a, n, element);
        if (res != -1)
            printf("The element %d you have entered is present at index %d.\\n", element, res);
        else
            printf("The element %d is not present.\\n", element);
    }
        `
    },
    5: {
        title: "",
        code:
            `
        `
    },
    x: {
        title: "",
        code:
            'hello'
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
