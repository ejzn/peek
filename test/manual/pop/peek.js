/*
 * Use as you please, no restrictions
 * Author: @erikjohnzon, erikj54@gmail.com
 */

var buffer = 100;

function peekMove(element, evt) {
    var translateX = evt.x - buffer;

    if (translateX >= 0) {
        element.style.webkitTransform = 'translate3d(' + (evt.x - 100)  + 'px, 0px, 0px)';
    }
}

function peekStart(element) {
    element.addEventListener('touchmove', peekMove.bind(this, element));
    element.addEventListener('mousemove', peekMove.bind(this, element));
}


function peekEnd(element) {
    console.log("Peek end on element:" + element);
    element.removeEventListener('mousemove', peekMove);
    element.removeEventListener('touchmove', peekMove);
}

function init() {
    var peekElements = document.getElementsByClassName('card'),
        i;

    // Intialize our intial starting point for a peek
    initialX = 0;

    for(i = 0; i < peekElements.length; i++) {
        // Bind event listeners to the divs with the class attribute added
        peekElements[i].addEventListener('touchstart', peekStart.bind(this, peekElements[i]));
        peekElements[i].addEventListener('mousedown', peekStart.bind(this, peekElements[i]));

        peekElements[i].addEventListener('touchend', peekEnd.bind(this, peekElements[i]));
        peekElements[i].addEventListener('mouseup', peekEnd.bind(this, peekElements[i]));
    }
}

document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
        init();
}, false );

