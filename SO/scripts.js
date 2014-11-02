//Slide Out

//similiar to hz drop
// h3s toggle transition


var menuItems = document.getElementsByTagName('h3');
_.each(menuItems, function(menuItem){
  menuItem.onclick = clickMenuItem;
});

function clickNavItem(event){
  if (isClosed(this.nextSibling) ){
    makeEverythingClosed(menuItems);
    makeItOpen(this.nextSibling);
  } else if (isOpen(this.nextSibling)){
    makeItClosed(this.nextSibling);
  }
}


function isOpen(element){
  return (element.className === 'open');
}

function isClosed(element){
  return !isOpen(element);
}

function makeItOpen(element){
  element.className = 'open';
}

function makeItClosed(element){
  element.className = '';
}

function makeEverythingClosed(elements){
  return _.each(elements, makeItClosed);
  // _.each(elements, function(element){
  //   makeItClosed(element.nextSibling);
  // });
}
