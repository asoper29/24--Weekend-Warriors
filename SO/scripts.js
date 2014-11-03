var navItems = document.getElementsByTagName('h3');

_.each(navItems, function(navItem){

    var isNull = _.isNull(navItem.nextSibling);

    if (!isNull){
      navItem.onclick = clickNavItem;
    }
});

/***
 * @param DOMevent event
 * @return undefined
 */
function clickNavItem(event){

   if (isClosed(this.nextSibling.nextSibling)){
     makeEverythingClosed(navItems);
     makeItOpen(this.nextSibling.nextSibling);
   } else if (isOpen(this.nextSibling.nextSibling)){
     makeItClosed(this.nextSibling.nextSibling);
   }
}

/**
 * @param HTMLElement element
 * @return Boolean if `element` is "open"
 */
function isOpen(element){
  return (element.className === 'open');
}

/**
 * @param HTMLElement element
 * @return Boolean if `element` is "closed"
 */
function isClosed(element){
  return !isOpen(element);
}

/**
 * @param HTMLElement element
 * @return undefined
 */
function makeItOpen(element){
  element.style.display = 'block';
  element.className = 'open';
}

/**
 * @param HTMLElement element
 * @return undefined
 */
function makeItClosed(element){
  element.style.display = 'none';
  element.className = '';
}

/**
 * @param Collection elements
 * @return undefined
 */
function makeEverythingClosed(elements){

  _.each(elements, function(element){
      var isNull = _.isNull(element.nextSibling);
      if (!isNull){
        makeItClosed(element.nextSibling.nextSibling);
      }
  });
}
