// product grid js

/*
add onClick event to images fa-fa-repeat icon
onClick event should give css transition class

SPAN fa-fa-repeat
IMG  front <-next sibling
IMG  back

*/

function clickNavItem(event){
   if (isFront(this.nextSibling.display)){
     flipIt(this.nextSibling);
   } else if (isBack(this.nextSibling.display)){
     flipIt(this.nextSibling);
   }
}

function flipIt (){

}

// function isFront (){
//   return (display === 'initial');
// }
//
// function isBack (){
//   return (display === 'none');
// }

// function flipFront (){
//
// }
//
// function flipBack (){
//
// }


// var navItems = document.getElementsByTagName('h3');
//       _.each(navItems, function(navItem){
//         navItem.onclick = clickNavItem;
//       });

// function clickNavItem(event){
//    if (isClosed(this.parentElement)){
//      makeEverythingClosed(navItems);
//      makeItOpen(this.parentElement);
//      //otherwise if this navItem is open
//    } else if (isOpen(this.parentElement)){
//      makeItClosed(this.parentElement);
//    }
// }
