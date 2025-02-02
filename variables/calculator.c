#include<stdio.h>
int main(){
    char ch;
    printf("enter the symbol:");
    scanf("%c", &ch);
    float a,b;
    printf("enter the value of a and b:");
    scanf("%f%f",&a,&b);
    switch (ch) {
        case '+':
        printf("%.1f+%.1f=%.2f",a,b,a+b);
        break;
         case '-':
        printf("%.1f-%.1f=%.2f",a,b,a-b);
        break;
         case '*':
        printf("%.1f*%.1f=%.2f",a,b,a*b);
        break;
         case '/':
        printf("%.1f/%.1f=%.2f",a,b,a/b);
        break;
         case '%':
        printf("%.1f%%.1f=%.2f",a,b,a+b);
        break;
        default:
        printf("invalid operation:");
    }
	return 0;
}