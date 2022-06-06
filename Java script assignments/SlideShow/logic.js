let imageElem = document.getElementById("imag")
const imagePath = ['1.jpg','2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
var index = 0;

let timeInterval;
function nextPh() {

    if (index < imagePath.length) {
        imageElem  = imagePath[index]
        index++;
        
        console.log(index)
    }
    else {
        index = 0;
    }

}

console.log(index)
function prePh() {

    if (index > 0) {
        
        index--;
        imageElem.src = imagePath[index]
        console.log(index)
    }
    else if(index == 0){

            imageElem.src ="1.jpg"
    }
    else {
        index = 0;
    }

}
function slideShow() {
   
    timeInterval = setInterval(
        
        function () {
            if(index >= 0 && index < imagePath.length){
                imageElem.src = imagePath[index]
                index++
            }
            else{
                index = 0
            }
        }
    ,1000)
}
function slideShowStop() {
    clearInterval(timeInterval)
}