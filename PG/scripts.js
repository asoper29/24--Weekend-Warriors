// product grid js
/*
add onClick event to images fa-fa-repeat icon
onClick event should give css transition class

SPAN fa-fa-repeat
IMG  front <-next sibling
IMG  back <-next/previous sibling

Toggle? If/else? Both?
Query? New concepts.
Ramblings -Nhare
*/

function clickRepeatIcon(event){
    // console.log(this.nextSibling.nextSibling.firstChild.nextSibling);
    this.nextSibling.nextSibling.firstChild.nextSibling.classList.toggle('awesome');
}
