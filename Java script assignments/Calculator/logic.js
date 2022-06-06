let screenAnswer = document.getElementById('Answer')

var FirstNumber ="";
var SecNumber = "";
var FirstOperator = "";
var SecOperator = "";


 function EnterNumber(value) {
    
    
    

   if(FirstOperator !=""){
       
       SecNumber +=value
       screenAnswer.value +=value
   }
   else{
    screenAnswer.value += value
    FirstNumber += value
   }
   console.log(FirstNumber)
}

function EnterOperator(value){
   screenAnswer.value = ' '
   FirstOperator = value

   screenAnswer.value +=value;
    
}


function EnterClear(){
    screenAnswer.value = " ";
}

function EnterEqual(){
    
    let x = eval(`${FirstNumber}${FirstOperator}${SecNumber}`)

   screenAnswer.value = x
   FirstNumber =""
   FirstOperator =""
   SecNumber =""
}