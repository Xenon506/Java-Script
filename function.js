
let countVowels = ( n ) => {
    count = 0;
    for( i of n){
        if( i == 'a' || i == 'e' || i=='i' || i=='o' || i =='u'){
            count++;
        }
        else if ( i == 'A' || i == 'E' || i=='I' || i=='O' || i =='U'){
            count++;
        }
    }
    return count;
} 
var n ;

function countVowels2( n ){
    count = 0;
    for( i of n){
        if( i == 'a' || i == 'e' || i=='i' || i=='o' || i =='u'){
            count++;
        }
        else if ( i == 'A' || i == 'E' || i=='I' || i=='O' || i =='U'){
            count++;
        }
    }
    return count;
} 
console.log('d');
console.log('d');

let arr1 = [1, 2, 3, 4, 5, 'string'];

let arrnum =(arr1) => {
    for( let i =0;i<arr1.length; i++) {
        arr1[i] = arr1[i] * arr1[i];
    }
    console.log(arr1);

};




// arr1.forEach(arrnum);

