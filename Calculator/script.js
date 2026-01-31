
const obj1 =  {
    name: "Alice",
    place: "Wonderland",
    hobby: "Adventuring"

}

const obj2 = { obj1};

obj2.place = "Looking Glass Land";

// console.log (obj2.details.place); // Output: "Looking Glass Land"
        
console.log (obj2.place); // Output: "Looking Glass Land"

let arr1 = [1, 2, 3];

let arr2 = [1 ,2, 3];

let arr3 = arr1.concat(arr2);
// console.log(arr3);  
// console.log( arr1 === arr2);

const course = {
    name : "JavaScript",
    duration: "3 months",
    courseInstructor: "Raju"
}

// console.log(course.courseInstructor);


const {courseInstructor: n} = course;
    
// console.log(course.courseInstructor);


function jaiho() {
    if( i = 9 ){
        console.log('jai ho');
         
    }
    else{
        console.log('mrityunjay hi maha vinashak om kar hai usi ki wani' );
        
    }
}
// jaiho();

function maxsum(arr5){
    let sum =0;
    for( let i = 0; i< arr5.length; i++){
        
            sum += arr5[i];
            console.log(sum);
}
            return sum;


}
arr5 = [1,2,3,4,5,6];

console.log(`max sum is ${maxsum(arr5)} now you know`);



