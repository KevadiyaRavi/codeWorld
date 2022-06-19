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
    int a = a*b/(b=a);
    printf("Hello");
}
`,
    },
    3: {
        title: "WAP to find given number is even or odd using condtional operator",
        code:
            `#include <stdio.h>
            int main()
            {
                int n;
                printf("Enter number:");
                scanf("%d", &n);
                n % 2 ? printf("Number is odd") : printf("Number is even");
            }
`,
    },
    4: {
        title: "WAP to check number is power of 2 or not",
        code:
            `#include <stdio.h>
            int main()
            {
                int n;
                printf("Enter number:");
                scanf("%d", &n);
                if (n & (n - 1) != 0)
                {
                    printf("Number is not power of 2");
                }
                else
                    printf("Number is power of 2");
            }
`,
    },
    5: {
        title: "WAP to find perticular bit was set or not",
        code:
            `#include <stdio.h>
            int main()
            {
                int n, p;
                printf("Enter number:");
                scanf("%d", &n);
                printf("Enter bit position:");
                scanf("%d", &p);
                if ((n >> p) & 1 == 1)
                {
                    printf("Bit is set");
                }
                else
                    printf("Bit is not set");
            }
`,
    },
    6: {
        title: "WAP to set perticular bit in number at bit position",
        code:
            `#include <stdio.h>
            int main()
            {
                int n, bp;
                printf("Enter number:");
                scanf("%d", &n);
                printf("Enter bit position:");
                scanf("%d", &bp);
                n = n | (1 << bp);
                printf("%d", n);
            }
`,
    },
    7: {
        title: "WAP to clear perticular bit in number at bit position",
        code:
            `#include <stdio.h>
            int main()
            {
                int n, bp;
                printf("Enter number:");
                scanf("%d", &n);
                printf("Enter bit position:");
                scanf("%d", &bp);
                n = n & ~(1 << bp);
                printf("%d", n);
            }
`,
    },
    8: {
        title: "WAP to complement perticular bit in number at bit position",
        code:
            `#include <stdio.h>
            int main()
            {
                int n, bp;
                printf("Enter number:");
                scanf("%d", &n);
                printf("Enter bit position:");
                scanf("%d", &bp);
                n = n ^ (1 << bp);
                printf("%d", n);
            }
`,
    },
    9: {
        title: "WAP to find biggest number from a, b, c",
        code:
            `#include <stdio.h>
            int main()
            {
                int a, b, c;
                printf("Enter number a, b, c: ");
                scanf("%d %d %d", &a, &b, &c);
                if (a > b)
                {
                    if (a > c)
                        printf("a is biggest");
                    else
                        printf("c is biggest");
                }
                else
                {
                    if (b > c)
                        printf("b is bigger");
                    else
                        printf("c is biggest");
                }
            }
`,
    },
    10: {
        title: "WAP to check character is upper case or lower case",
        code:
            `#include <stdio.h>
            int main()
            {
                char a;
                printf("Enter char a: ");
                scanf("%c", &a);
                if (a >= 'A' && a <= 'Z')
                    printf("Char is Upper Case");
                else
                    printf("Char is Lower Case");
            }
`,
    },
    11: {
        title: "WAP to find number table using goto",
        code:
            `#include <stdio.h>
            int main()
            {
                int a;
                printf("Enter number a: ");
                scanf("%d", &a);
                int i = 1;
            loop:
                printf("%d * %d = %d\\n", a, i, a * i);
                i++;
                if (i <= 10)
                    goto loop;
            }
`,
    },
    12: {
        title: "WAP to take input number and bit position and set, clear, complement bit according to user choice",
        code:
            `#include <stdio.h>
            int main()
            {
                int n, bp;
                printf("Enter number n: ");
                scanf("%d", &n);
                printf("Enter bit position bp: ");
                scanf("%d", &bp);
                printf("------------------------\\n");
                printf("1. Set the bit\\n");
                printf("2. Clear the bit\\n");
                printf("3. Complement the bit\\n");
                printf("Choose operation number:\\n");
                int choice;
                scanf("%d", &choice);
                if (choice == 1)
                {
                    n = n | (1 << bp);
                }
                if (choice == 2)
                {
                    n = n & ~(1 << bp);
                }
                if (choice == 3)
                {
                    n = n ^ (1 << bp);
                }
                printf("%d", n);
            }
`,
    },
    13: {
        title: "WAP to find sum of all digits of number",
        code:
            `#include <stdio.h>
            int main()
            {
                int n, sum = 0;
                printf("Enter number n: ");
                scanf("%d", &n);
                while (n)
                {
                    int r = n % 10;
                    sum += r;
                    n /= 10;
                }
            
                printf("%d", sum);
            }
`,
    },
    14: {
        title: "WAP to find factorial of number",
        code:
            `#include <stdio.h>
            int main()
            {
                int n, res = 1;
                printf("Enter number n: ");
                scanf("%d", &n);
                while (n)
                {
                    res *= n;
                    n--;
                }
            
                printf("%d", res);
            }
`,
    },
    15: {
        title: "WAP to find equivalent binary of a given number",
        code:
            `#include <stdio.h>
            int main()
            {
                int n;
                printf("Enter number n: ");
                scanf("%d", &n);
                for (int i = sizeof(int) * 8-1; i >= 0; printf("%d", (n >> i--) & 1))
                    ;
            }
`,
    },
    16: {
        title: "WAP to find number of bits set and cleared bits in a given number",
        code:
            `#include <stdio.h>
            int main()
            {
                int n, count = 0;
                printf("Enter number n: ");
                scanf("%d", &n);
                for (int i = sizeof(int) * 8 - 1; i >= 0; i--)
                {
                    if ((n >> i) & 1)
                        count++;
                }
                printf("Number of bits set in %d = %d and cleared bits = %d", n, count, sizeof(int) * 8 - count);
            }
`,
    },
    17: {
        title: "WAP to find number is prime or not",
        code:
            `#include <stdio.h>
            int main()
            {
                int n;
                printf("Enter number n: ");
                scanf("%d", &n);
                printf("Method 1:\\n");
                int i;
                for (i = 2; i < n; i++)
                {
                    if (n % i == 0)
                        break;
                }
                if (i == n)
                    printf("Number is Prime");
                else
                    printf("Number is not Prime");
            
                printf("\\nMethod 2:\\n");
                int flag = 0;
                for (i = 2; i <= n / 2; i++)
                {
                    if (n % i == 0)
                    {
                        flag = 1;
                        break;
                    }
                }
                if (flag)
                    printf("Number is not prime");
                else
                    printf("Number is prime");
            }
`,
    },
    18: {
        title: "WAP to find number is Perfect or not",
        code:
            `#include <stdio.h>
            // Perfect number is the sum of its factors(excepts that number) is equal to origin number
            int main()
            {
                int n, sum = 0;
                printf("Enter number n: ");
                scanf("%d", &n);
                for (int i = 1; i <= n / 2; i++)
                {
                    if (n % i == 0)
                    {
                        sum += i;
                    }
                }
                if (sum == n)
                {
                    printf("Number is Perfect");
                }
                else
                    printf("Number is not Perfect");
            }
`,
    },
    19: {
        title: "WAP to reverse bits in given number",
        code:
            `#include <stdio.h>
            int main()
            {
                int n;
                printf("Enter number n: ");
                scanf("%d", &n);
                printf("Before:\\n");
                for (int i = sizeof(int) * 8 - 1; i >= 0; printf("%d", (n >> i--) & 1))
                    ;
                printf("\\n");
                for (int i = 0, j = sizeof(int) * 8 - 1; j > i; j--, i++)
                {
                    int t1 = n >> i & 1;
                    int t2 = n >> j & 1;
                    if (t1 != t2)
                    {
                        n = n ^ (1 << j);
                        n = n ^ (1 << i);
                    }
                }
                printf("After:\\n");
            
                for (int i = sizeof(int) * 8 - 1; i >= 0; printf("%d", (n >> i--) & 1))
                    ;
            }
`,
    },
    20: {
        title: "WAP to reverse nibble bits in 1byte number",
        code:
            `#include <stdio.h>
            int main()
            {
                int n;
                printf("Enter number n: ");
                scanf("%d", &n);
                printf("Before:\\n");
                for (int i = 7; i >= 0; printf("%d", (n >> i--) & 1))
                    ;
                printf("\\n");
                for (int i = 0, j = 7; j > i; j--, i++)
                {
                    int t1 = n >> i & 1;
                    int t2 = n >> j & 1;
                    if (t1 != t2)
                    {
                        n = n ^ (1 << j);
                        n = n ^ (1 << i);
                    }
                }
                printf("After:\\n");
            
                for (int i = 7; i >= 0; printf("%d", (n >> i--) & 1))
                    ;
            }
`,
    },
    21: {
        title: "WAP to find all prime numbers between two ranges",
        code:
            `#include <stdio.h>
            int main()
            {
                int r1, r2;
                printf("Enter range r1 and r2:");
                scanf("%d %d", &r1, &r2);
                for (int n = r1; n <= r2; n++)
                {
            
                    int i;
                    for (i = 2; i < n; i++)
                    {
                        if (n % i == 0)
                            break;
                    }
                    if (i == n)
                        printf("%d ", n);
                }
            }
            
`,
    },
    22: {
        title: "WAP to find Armstrong number is between two ranges",
        code:
            `
            #include <stdio.h>
            #include <math.h>
            // Armstrong number: sum of digit's power of number of digits equal to number itself
            // eg n = 153 sum = 1^3 + 5^3 + 3^3 = 153
            // n == sum so its a armstrong number
            int main()
            {
                int r1, r2;
                printf("Enter number r1 and r2:\n");
                scanf("%d %d", &r1, &r2);
                for (int n = r1; n <= r2; n++)
                {
                    int numDigit = floor(log10(n) + 1);
                    double res = 0;
                    int t1 = n;
                    while (t1)
                    {
                        int r = t1 % 10;
                        res += pow(r, numDigit);
                        t1 /= 10;
                    }
                    if (res == n)
                    {
                        printf("%d ", n);
                    }
                }
                printf("\n");
            }          
`,
    },
    23: {
        title: "WAP to find Strong number is between two ranges",
        code:
            `#include <stdio.h>
            #include <math.h>
            // Strong number: Sum of Individual digits factorial sum equal to that original number called strong
            // 145 = 1! + 4! + 5!
            int main()
            {
                int r1, r2;
                printf("Enter range r1 and r2:");
                scanf("%d %d", &r1, &r2);
                for (int n = r1; n <= r2; n++)
                {
                    int numDigit = floor(log10(n) + 1);
                    int t = n, res = 0;
                    while (t)
                    {
                        int r = t % 10;
                        int fact = 1;
                        for (int j = 1; j <= r; fact *= j++)
                            ;
                        res += fact;
                        t /= 10;
                    }
                    if (res == n)
                    {
                        printf("%d ", n);
                    }
                }
            }
`,
    },
    24: {
        title: "WAP to find that given number is palindrome or not",
        code: `        #include <stdio.h>
        #include <stdlib.h>
        int main()
        {
            int n = 123211;
            int flag = 1;
        
            while (n != 0)
            {
                int numDigit = floor(log10(n) + 1);
                int x = n / ((int)pow(10, numDigit - 1));
                int y = n % 10;
                if (x == y)
                    flag = 1;
                else
                {
                    flag = 0;
                    break;
                }
                n %= (int)pow(10, numDigit - 1);
                n /= 10;
            }
            if (flag == 1)
                printf("Number is Palindrome");
            else
                printf("Number is not palindrome");
        }
        `
    }
}
//end of database variable
var renderId = localStorage.getItem('urlName')
var txtcode = document.getElementById('code')
var title = document.getElementById('title')
var data = database[`${renderId}`]
title.innerText = data.title
document.querySelector('title').innerText = `${data.title}`

editor.getDoc().setValue(data.code);

