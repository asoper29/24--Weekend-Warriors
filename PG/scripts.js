// product grid js

/*
add onClick event to images fa-fa-repeat icon
onClick event should give css transition class

SPAN fa-fa-repeat
IMG  front <-next sibling
IMG  back

*/

var repeatIcons = document.getElementsByTagName('span');
      _.each(repeatIcons, function(repeatIcon){
        repeatIcon.onclick = clickRepeatIcon;
      });

function clickRepeatIcon(event){
    // this.parentElement - apply CSS tranistion
    // Need CSS transition call
}





// Ramblings -Nhare

// function flipIt (){
//
// }
//
// function isFront (){
//   return (display === 'initial');
// }
//
// function isBack (){
//   return (display === 'none');
// }
