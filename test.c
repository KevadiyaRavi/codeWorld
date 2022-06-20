#include <stdio.h>
#include <stdlib.h>
void print_array(int *p, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", p[i]);
    }
}
int main()
{
    int array[] = {10, 20, 30, 40};
    print_array(array, sizeof(array) / sizeof(array[0]));
}