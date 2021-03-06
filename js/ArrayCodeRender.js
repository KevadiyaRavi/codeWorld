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
        title: "Find sum of all element from int array",
        code:
            `#include <stdio.h>
            #include <math.h>
            int main()
            {
                int array[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
                int size = sizeof(array) / sizeof(array[0]);
                int sum = 0;
                for (int i = 0; i < size; i++)
                {
                    sum += array[i];
                }
                printf("Sum of all numbers from array = %d", sum);
            }
        `
    },
    6: {
        title: "Sort an integer array(Bubble sort)",
        code: `
        #include <stdio.h>
        #include <stdlib.h>
        int main()
        {
            int array[] = {2, 4, 3, 5, 6, 4, 3, 2, 7};
            int size = sizeof(array) / sizeof(int);
            for (int i = 1; i < size; i++)
            {
                for (int j = 0; j < size - i; j++)
                {
                    if (array[j] > array[j + 1])
                    {
                        int t = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = t;
                    }
                }
            }
            for (int i = 0; i < size; i++)
            {
                printf("%d ", array[i]);
            }
        }
        `
    },
    7: {
        title: "Sort an integer array(Selection Sort)",
        code: `        #include <stdio.h>
        #include <stdlib.h>
        int main()
        {
            int array[] = {2, 4, 3, 5, 6, 4, 3, 2, 7};
            int size = sizeof(array) / sizeof(int);
            for (int i = 1; i < size - 1; i++)
            {
                for (int j = i + 1; j < size; j++)
                {
                    if (array[j] < array[i])
                    {
                        int t = array[j];
                        array[j] = array[i];
                        array[i] = t;
                    }
                }
            }
            for (int i = 0; i < size; i++)
            {
                printf("%d ", array[i]);
            }
        }
        `
    },
    8: {
        title: "Find max and min from integer array",
        code: `#include <stdio.h>
        int main()
        {
            int array[] = {2, 4, 3, 5, 6, 4, 3, 2, 7};
            int size = sizeof(array) / sizeof(int);
            for (int i = 1; i < size - 1; i++)
            {
                for (int j = i + 1; j < size; j++)
                {
                    if (array[j] < array[i])
                    {
                        int t = array[j];
                        array[j] = array[i];
                        array[i] = t;
                    }
                }
            }
            int max = array[size - 1];
            int min = array[0];
            printf("max = %d \\nmin = %d", max, min);
        }
        `
    },
    9: {
        title: "Reverse print array and reverse array itself",
        code: `        #include <stdio.h>
        #include <stdlib.h>
        int main()
        {
            int array[] = {3, 4, 1, 2, 3, 7, 6, 5};
            int size = sizeof(array) / sizeof(array[0]);
            printf("Actual array: ");
            for (int i = 0; i < size; printf("%d ", array[i++]))
                ;
            printf("\\nPrinting array in reverse order: ");
            for (int i = size - 1; i >= 0; printf("%d ", array[i--]))
                ;
            for (int i = 0; i <= size / 2; i++)
            {
                int t = array[i];
                array[i] = array[size - 1 - i];
                array[size - 1 - i] = t;
            }
            printf("\\nAfter reversing array itself: ");
            for (int i = 0; i < size; printf("%d ", array[i++]))
                ;
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
