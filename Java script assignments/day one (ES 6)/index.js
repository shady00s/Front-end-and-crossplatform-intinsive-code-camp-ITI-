//1) Swap the values of two variables using destructuring

let arr1 = [1, 2, 3]

const [x, y, z] = arr1

console.log(x, y, z)

/*
Using rest parameter and spread operator return max value from any array note: array length is not fixed return min and max value and display each of them separately after function call
*/

function maxVal(...args) {

    let x = Math.min(...args)
    let y = Math.max(...args)
    let result = {
        minVal: x,
        maxVal: y
    }
    return result
}

console.log(maxVal(1, 2, 3, 4, 5, 6))


/*

3) Study new array api methods then create the following methods and apply it on this array var fruits = ["apple", "strawberry", "banana", "orange", "mango"]
a. test that every element in the given array is a string
b. test that some of array elements starts with "a"
c. generate new array filtered from the given array with only elements that starts with "b" or "s"
d. generate new array each element of the new array contains a string declaring that you like the give fruit element
e. use forEach to display all elements of the new array from previous point
*/

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

function ArrayTester(_array) {
    this.array = _array;
}

ArrayTester.prototype.isString = function () {
    let isString = 0
    let notString = 0
    for (let index = 0; index < this.array.length; index++) {

        console.log(typeof (this.array[2]))

        if (typeof (this.array[index]) === "string") {
            isString++;
        }
        else {
            notString = index;

        }


    }
    console.log(notString)
    if (isString === this.array.length) {
        console.log(true)
        return true
    }
    else {
        console.log(false + " and the element at index " + this.array[notString] + " and is type is " + typeof (this.array[notString]))
        return false
    }
}

ArrayTester.prototype.startsWith = function (value) {
    let startWithIndex = 0;
    let result =[]
    if (this.isString()) {
        for (let index = 0; index < this.array.length; index++) {
            let stringVal = this.array[index].split("");
           
            stringVal.forEach(element => {
                if (element === value) {
                    startWithIndex++;

                    
                }
            });

        }
        result.push(this.array[startWithIndex])
    }
    console.log("The word that start with "+value +" is "+result)

    return result;

}

let d = new ArrayTester(fruits)
d.isString()

d.startsWith("m")

// 4) Make a set that holds student names.
// a. Try to add repeated names, will the set accept it?
// b. Print the set values using spread operator and using for…of.


let set = new Set();

set.add("shady")
set.add("ahmed")
set.add("shady")


console.log(set)





// Make a Map that contains the student name as a key, and object that contains an array of his studied courses and his grade in each course. (The object structure as following: {Grades:[
//     {Coursename:”JavaScript”, Grade:”Excellent”},
//     {Coursename:”Jquery”, Grade:”Good”},
//     {Coursename:”CSS”, Grade:”V.Good”}]}
//     a. Loop in the Map and display each student along with his grades in all courses.
//     b. Make a dropdownlist and fill it with the student names (from the Map), and when the user selects specific student display his grades in all courses.




let StudentGrades = {
    Grades:[
    {Coursename:'JavaScript', Grade:'Excellent'},
    {Coursename:'Jquery', Grade:'Good'},
    {Coursename:'CSS', Grade:'V.Good'}]
}

let map = new Map([

]);

map.set("shadyGrade",StudentGrades)
map.set("ahmedGrade",StudentGrades)


for (const [key,value] of map) {
    
   console.log( key,value)
}




