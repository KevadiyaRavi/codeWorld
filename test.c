#include <stdio.h>
#include <stdlib.h>
int main()
{
    int array[] = {3, 4, 1, 2, 3, 7, 6, 5};
    int size = sizeof(array) / sizeof(array[0]);
    printf("Actual array: ");
    for (int i = 0; i < size; printf("%d ", array[i++]))
        ;
    printf("\nPrinting array in reverse order: ");
    for (int i = size - 1; i >= 0; printf("%d ", array[i--]))
        ;
    for (int i = 0; i <= size / 2; i++)
    {
        int t = array[i];
        array[i] = array[size - 1 - i];
        array[size - 1 - i] = t;
    }
    printf("\nAfter reversing array itself: ");
    for (int i = 0; i < size; printf("%d ", array[i++]))
        ;
}