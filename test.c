#include <stdio.h>
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
    printf("max = %d min = %d", max, min);
}