#include <stdio.h>
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