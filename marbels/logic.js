

var setInt ;
function marbleLogic() {
    let index = 0;
    let marbels = document.getElementsByClassName('imgs');
   
    setInt = setInterval(function () {
        if (index < marbels.length) {

            if (marbels[index].src == 'http://127.0.0.1:5500/marble3.jpg') {
                marbels[index].src = 'http://127.0.0.1:5500/marble1.jpg'
                index  ++;
               
            }
            else if(marbels[index].src == 'http://127.0.0.1:5500/marble1.jpg'){
                marbels[index].src = 'http://127.0.0.1:5500/marble3.jpg'
                index +1;
            }
        }
        else {
            index = 0;
        }

      

    }, 100)
}

const div = document.getElementsByClassName('marbelBody')[0];

div.addEventListener('mouseover',function (e) {
    clearInterval(setInt)
})

div.addEventListener('mouseleave',function (e) {
    marbleLogic() 
})
marbleLogic() 