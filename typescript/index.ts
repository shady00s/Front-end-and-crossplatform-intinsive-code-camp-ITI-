// 1. Using TypeScript to solve the following:
// a. Implement Rectangle custom type:
// a. Constructor that width and height.
// b. CalcCircumference() function that returns the circumference of the rectangle.
// c. WhoAmI() Static function that prints text (“I am rectangle”).
// b. Implement Square custom type, that inherits from rectangle, and change the following:
// a. Make the constructor of square takes one parameter only.
// b. In the square constructor, make width and height of the parent equal.
// i. You’ll need to call the super() constructor in the square constructor to access the parent object properties.
// c. Override circumference () to return circumference of the Square.
// d. Override WhoAmI() function to print text (“I am square”).
// c. Create objects from rectangle and square and test them, and make sure the square inherited rectangle members.
// d. Try to make modules


class Rectangle{
    width:number;
    heights:number;
    constructor(width:number,height:number){
       
       this.heights = height;
       this.width = width;
    }
    CalcCircumference ():void {
             alert("Circumference of rectangle "+2*(this.width + this.heights))
    }

    WhoAmI  ():void{
        alert("I am rectangle")
    }
}


class Square extends Rectangle{
    width:number;
    height:number;
    
   

    constructor(width:number){
        super(width,width);
        this.width = width;
        this.height = width;
    }

    
    CalcCircumference():void{

        alert("Circumference of square "+this.width*this.height)
       
    }
    WhoAmI () :void{alert("I am square")}  ;
}

var s = new Square(12)

s.CalcCircumference()

s.WhoAmI()

// Try the following Typescript features:
// a. Types annotation, union types
// b. Function with typed arguments and return type.
// c. Interfaces
// d. Generics
// e. Enums


// union 
let test1 :number|string

//enum
enum test {
    first,
    sec,
    third
}
//Types annotation,
var x :number = 21


// Function with typed arguments and return type.
function returnString (a:string):string{
    return a
}

// interfaces 
interface testInterface{
    t1:number,
    testFuc():void
}

// d. Generics
function genericFunc<T>(a:T){
    let result = []
    result.push(a)
    return result;
}