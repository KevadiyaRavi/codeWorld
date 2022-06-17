#include <stdio.h>
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