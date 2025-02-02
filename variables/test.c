/* #include<stdio.h>
int main(){
    int a,b;
    char fun;
    printf("enter the value of sign:");
    scanf("%c",&fun);
    printf("enter the value of a and b:");
    scanf("%d%d",&a,&b);
    
    switch(fun){
        case '+':
        printf("sum:%d",a+b);
        break;
        case '-':
        printf("subtract:%d",a-b);
        break;
        case '*':
        printf("multiple:%d",a*b);
        break;
        case '/':
        printf("divide:%d",a/b);
        break;
        case '%':
        printf("modula:%d",a%b);
        break;
        default:
        printf("thankyou");
    }
    return 0;
}

#include<stdio.h>
int main(){
    int n,sum=0,mul=1;
    printf("enter the value of n:");
    scanf("%d",&n);
    int a[n];
    printf("enter the element of array:");
    for(int i=0;i<n;i++){
        scanf("%d",&a[i]);
    }
    printf("elements are: ");
    for(int i=0;i<n;i++){
       printf("%d ",a[i]);
    }
    printf("\n");
    for(int i=0;i<n;i++){
       sum=sum+a[i];
       
    }
    printf("sum:%d",sum);
     printf("\n");  
    for(int i=0;i<n;i++){
       mul=mul*a[i];       
    }
    printf("mul:%d",mul);
     printf("\n");

     int max=a[0];
    for(int i=0; i<n; i++){
       if(a[i+1]>a[i])  max=a[i+1]; 
       else   max=a[i];       
    }
    printf("max:%d",max);

return 0;
}              

#include<stdio.h>
int main(){
    int a[5]={6,2,5,4,3};
    int max=a[0];
    for(int i=0;i<4;i++){
        if(a[i]>=a[i+1])  max=a[i];
        else max=a[i+1];
    }
    printf("max:%d",max);

    return 0;
}     


#include<stdio.h>
int main(){
    int a[4]={19,2,4,5};
    int max=a[0];
    for(int i=0;i<4;i++){
       if(max<a[i]) max=a[i];
       
    }
    printf("max:%d",max);
    return 0;
}             
#include<stdio.h>
int main(){

    int a[5]={1,2,3,4,5};

    for(int i=4;i>=0;i--){
        printf("%d ",a[i]);
    }
        return 0;
}


#include<stdio.h>
int main(){
    int a[2][2]= {1,2,3,4};
    int b[2][2]= {1,2,3,4};
    int c[2][2];
    for(int i=0;i<2;i++){
        printf("\n");
        for(int j=0;j<2;j++){
            c[i][j]=a[i][j]+b[i][j];
            printf("%d ",c[i][j]);
        }
    }

}


#include<stdio.h>
int main(){
    int sum=0;
    int a[2][2]= {1,2,3,4};
   // int b[2][2]= {1,2,3,4};
   // int c[2][2];
    for(int i=0;i<2;i++){
       
        for(int j=0;j<2;j++){
            sum+=a[i][j];
  
        }
    }
     printf("sum:%d ",sum);
}

 
#include<stdio.h>
int main(){
    int a[2][2]= {1,2,3,4};
    int b[2][2]= {1,2,3,4};
    int c[2][2];
    for(int i=0;i<2;i++){
        printf("\n");
         for(int j=0;j<2;j++){
           int sum=0;
              for(int k=0;k<2;k++){
                sum=sum+a[i][k]*b[k][j];
                  c[i][j]=sum; 
                  
        }
        
    }
    }
    for(int i=0;i<2;i++){
        printf("\n");
        for(int j=0;j<2;j++){
            printf("%d ",c[i][j]);
        }
    }

return 0;

#include<stdio.h>
int main(){
    int a[2][2]={1,2,3,4};
   
     for(int i=0;i<2;i++){
        printf("\n");
       for(int j=0;j<2;j++){
            printf("%d ",a[i][j]);
        }
     }
     printf("\n");
     printf("IN transpose:");
    for(int i=0;i<2;i++){
        printf("\n");
        for(int j=0;j<2;j++){
            printf("%d ",a[j][i]);
        }
    }
}       
}             


#include<stdio.h>
int main(){
    int a[4]={1,2,3,4};
    int max=0,smax=0;
    for(int i=0;i<4;i++){
        if(a[i]>max){
            smax=max;
            max=a[i];
            
        }
         else if(a[i] > smax&&a[i]!=max )
            smax=a[i];
         
    printf("max:%d smax:%d",max,smax);
    return 0;
    }
}        


#include<stdio.h>
int main(){
    printf("code for sum of digit:");
    int x=123,sum;
    int i=0;
    while(x!=0){
        int r;
        r=x%10;
        x/=10;
        sum=sum+r;
        i++;
    }
    printf("sum:%d",sum);
}
           

#include<stdio.h>
int main(){
    int x=124,d1,d2,sum;
    d1=x%10;
    x/=10;
    d2=x%10;
    x/=10;
   sum=x+d1+d2;
   printf("sum:%d",sum);
    return 0;
}
     
     
     #include<stdio.h>
     int main(){
        int x=052;
        if(x==42) printf("same");
        else printf("different");

     }     

     #include<stdio.h>
     int main(){
        int day=1;
        switch(day);
        printf("prabhat a great guy");
     }     
    
#include<stdio.h>
int main(){
    int m,n,p,q;
    printf("m n p q:");
    scanf("%d%d%d%d",&m,&n,&p,&q);
    int x[m][n],y[p][q],s[m][n];
    printf("enter the element of x:");
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            scanf("%d",&x[i][j]);
        }
    }
    for(int i=0;i<m;i++){
        printf("\n");
        for(int j=0;j<n;j++){
            printf("%d ",x[i][j]);
        }
    }
    printf("\nenter the element of y:");
    for(int i=0;i<p;i++){
        for(int j=0;j<q;j++){
            scanf("%d",&y[i][j]);
        }
    }
    for(int i=0;i<p;i++){
        printf("\n");
        for(int j=0;j<q;j++){
            printf("%d ",y[i][j]);
        }
    }
    printf("\n multiplication:");
   for(int i=0;i<m;i++){
        printf("\n");
        for(int j=0;j<q;j++){
            s[i][j]=0;
          for(int a=0;a<n;a++){
                s[i][j]+=x[i][a]*y[a][j];
                
          }
           printf("%d ",s[i][j]); 
         
        }
    }
   
    
    return 0;
}     */ 

#include<stdio.h>
int main(){
    printf(" output:%d",3+3*4*3/6/4*3-2);
    return 0;

}
