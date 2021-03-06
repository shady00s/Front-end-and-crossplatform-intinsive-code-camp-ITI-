/*
A. Function Object
A.1. Create an adding function that adds n numbers only. Throw exception if the user passed any data type other than “number” or called your function without passing any parameters.
*/


function q1() {
    let x = parseInt(prompt("enter number"))
    console.log(typeof (x))
    if (isNaN(x)) {

        throw "there is error the value is not a number"
    }
    else {
        alert(x)
    }
}

/*
A.2. Write two different function with two different forms implementations that takes any number of 
parameters and returns them reversed using array’s reverse function.
*/

let numbers = [1, 2, 3, 4, 5, 6]

reverseWithApply.apply(this, numbers)


function reverseWithApply() {
   
    let args = [];
    for (let index = arguments.length -1; index >= 0; index--) {

        args.push(arguments[index ])
    }

    console.log(args)
}




function reverseWithBind() {
    
    let args = [];
    
    for (let index = arguments.length-1; index >= 0; index--) {
            args.push(arguments[index])
    }

   console.log(args.sort(function(a,b){
    return b-a;
})) 
}
let result = reverseWithBind.bind(this,1,2,3,4,5,6);
result()

/*
B. Javascript as an oop
1. Display the area and perimeter of an object created from using Rectangle Constructor that has width and height properties
 and 2 extended methods (using prototype property) for calculating area, perimeter.
Override .toString() function to display a message declaring the width, height, area and perimeter of the created object.
Create Class Property that counts numbers of created objects and Class method to retrieve it.
*/


/*
2. Make proper updates in your previous code of generating Rectangle object that should inherit from Shape Constructor, 
    and create your Square constructor that inherits from Rectangle.
    Prevent creating any object from shape, allow creation of only rectangles and square

*/
function ShapeConstructor(width, height) {
    this.width = width
    this.height = height
}
ShapeConstructor.prototype.areaFunction = function () {
    return this.width * this.height;
}
ShapeConstructor.prototype.parameterFunction = function () {
    return eval(2 * (this.width + this.height));
}
ShapeConstructor.prototype.toString = function () {
    return `the width is ${this.width}, the height is ${this.height} the parameter is ${this.parameterFunction()} and the area is ${this.areaFunction()}`
}

function RectangleObject() {

}
function SquareObject() { }

RectangleObject.prototype = new ShapeConstructor(width = 13, height = 22)

let RectangleFromShape = new RectangleObject();
//alert(RectangleFromShape.toString())

let SquareFromRectangle = SquareObject.prototype = new ShapeConstructor(width = 22, height = 22)

//alert(SquareFromRectangle.toString())


/*

3. Create your own object that contains a list of numerical sequence, with the following details
• Your constructor takes 3 parameters to define start, end of list and step
• The list should be private and filled with private method
• You can create getter and setter for the list if needed
• Allow the user to apply the following functionality to his created sequence
o Append or prepend a new value (you have to ensure that you are pushing sequential value otherwise through exception)
o Dequeue or pop a value,
o display all its content,
• all of the properties should be defined using accessor descriptor, prevent them from being deleted, iterated or being modified.
• you can add any property you need.
*/

function MyObject(start, end, step) {
    let privateArray = [];
    this.start = start
    this.end = end
    this.step = step


    let val;
    function privateArrayCreator() {
        for (let index = 0; index < this.end; index++) {

            if (this.step === 0) {
                val = this.start * index
            }
            else {
                val = (this.start * index) * step
            }

            privateArray.push(val)

        }
    }
    privateArrayCreator();

    this.arrayShower = function () {
        return privateArray
    }
    this.arraySetter = function (val) {
        privateArray.push(val)
    }
//accessor descriptor to prevent user from changing the properties
Object.defineProperties(this,{
    start:{
        value:this.start,
        configurable:false,
    },
    end:{
        value:this.end, 
        configurable:false,
    },
    step:{
        value:this.step,
        configurable:false,
    },
    arraySetter:{
        configurable:false,
        writable:false
    },
    arrayShower:{
        configurable:false,
        writable:false
    }

})
}




MyObject.prototype.addNumber = function (number) {
    return this.arraySetter(number)
}

// remove number with only the value
MyObject.prototype.removeNumber = function (number) {
    let oldArray = this.arrayShower();
    let newArray = [];
    console.log(oldArray)
    for (let index = 0; index < oldArray.length; index++) {
        if (oldArray[index] == number) {
            oldArray.splice(index, number)
            newArray.push(oldArray[index])
        }
    }

    return newArray;
}

// rmove number with index only
MyObject.prototype.removeNumberWithIndex = function (index) {
    let oldArray = this.arrayShower();
    let newArray = [];

    oldArray.splice(index, 1)

    newArray = oldArray


    return newArray;
}

let array = new MyObject(start = 1, end = 4, step = 0)

// array.addNumber(12)
// alert(array.arrayShower())

// array.removeNumberWithIndex(2)



// console.log(array.arrayShower )

// alert("after remove by index" + array.arrayShower())


/*** 
    1- Create your own custom object that has getSetGen as function value, this function should generate setters and gettersfor the properties of the caller object
This object may have description property of string value if needed
Let any other created object can use this function property to generate getters and setters for his own properties
Avoid generating getters or setters for property of function value
Hint:
if getSetGen() applied on any other object it should generate getters and setters for all of the applied object properties
i.e. if you have the following object
obj = {id:”SD-10”,location:”SV”, addr:”123 st.”, getSetGen:
function(){//should be implemented//}}using of getSetGen() will generate the following getId(), setId(), getLocation(), setLocation(), getAddr(), setAddr()If you created the following object var user = { name:”Ali”,age:10}When applying getSetGen() on user object (you can use call or bind or apply), it will result in creating the following : getName(), getAge(),setName(),setAge().
***/ 

let TestObject ={
    id:'SD-10',
    location:'SV',
     addr:'123 st.',
     getSetData: getSetData()
}

function getSetData(){}


 

