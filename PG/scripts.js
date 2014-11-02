// product grid js

/*
add onClick event to images fa-fa-repeat icon
onClick event should give css transition class

SPAN fa-fa-repeat
IMG  front <-next sibling
IMG  back <-next/previous sibling

*/

var repeatIcons = document.getElementsByTagName('span');
      _.each(repeatIcons, function(repeatIcon){
        repeatIcon.onclick = clickRepeatIcon;
      });

function clickRepeatIcon(event){
    if(this.nextSibling.className == "start"){
        this.nextSibling.className += " flipped";
    }
    else{
        this.nextSibling.className = "start";
    }
}

    // this.parentElement - apply CSS tranistion
    // Need CSS transition call



// Ramblings -Nhare

//Toggle? If/else? Both?
//Query? New concepts.


// function flipIt (){
//
// }
//
// function makeFront(){
//}
//
// function makeBack(){
//}
// function isFront (){
//   return (display === 'initial');
// }
//
// function isBack (){
//   return (display === 'none');
// }
