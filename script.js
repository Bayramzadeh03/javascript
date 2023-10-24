// for (let i = 0; i <100; i+=2) {
//     console.log(i);

// }

// for (let i = 100; i > 0; i-=3) {
//     if (i===100) {
//         continue
//     }
//     console.log(i);

// }


// for (let i = 0; i < 100; i+=15) {
//     if (i===0) {
//         continue;
//     }
//     console.log(i);

// }

// let text = 'salam'
// let number = [1,2,3,4,5,6,7,8,9]

// for (let i = 0; i < number.length; i++) {
//     console.log(i + '-' + number[i]);

// }

// for (let a = 0; a < text.length; a++) {
//     console.log( a + "-" + text[a]);

// }


// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let i = 0
// while (i < number.length) {
//     console.log(i + '-' + number[i]);
//     i++
// }

// let toplam=0
// for (let i = 1; i < 100; i+=2) {
//     toplam+=i;
    
// }
// console.log(toplam);



// let sum=0
// for (let i = 0; i < 100; i++) {
//     if (i%2===0) {
//         sum++    
//     }
// }
// console.log(sum);


// let total=1
// let num=+prompt('ededi daxil edin')
// for (let i = 1; i <= num; i++) {
//     total*=i
// }
// console.log(total);


// const arr=[1,2,3,4,5]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0) {
//         console.log(arr[i]);
//     }
    
// }


// const newarr=[1,2,3,203,5]
// for (let i = 0; i < newarr.length; i++) {
//     if (newarr[i]>200) {
//         console.log(true);
//     }else{
//         console.log(false);
//     }
    
// }

// const newarr=[1,2,-3,203,5]
// for (let i = 0; i < newarr.length; i++) {
//     if (newarr[i]<0) {
//         console.log(newarr[i]);
//     }
    
// }

// let cut=0
// let tek=0

// const newarr=[1,2,3,4,5]
// for (let i = 0; i < newarr.length; i++) {
//     if (newarr[i]%2==0 ) {
//         cut=cut+newarr[i]
//     }else if(newarr[i]%2==1){
//         tek=tek+newarr[i]
//     }
// }

// console.log(cut-tek);

// let cut=0

// const newarr=[1,12,33,44,55,66,77,88,99,10]
// for (let i = 0; i < newarr.length; i++) {
//     if (i%2==0 ) {
//         console.log(newarr[i]);
//     }
// }

// let edediorta=0
// let sum =0;
// const orta=[1,2,4,5]
// for (let i = 0; i < orta.length; i++) {
//     sum=sum+orta[i]
//     edediorta=sum/orta.length
// }
// console.log(edediorta);

let cem=0
for (let i = 0; i < 100; i++) {
    if (i%11==0) {
        cem=cem+i 
    }
    
}
console.log(cem);