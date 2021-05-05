let numberOfFaces = 5;
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');



function generateFaces() {
    for (let i = 0; i < numberOfFaces; i++) {
        const face = document.createElement('img');
        face.src = 'smile.png';
        let randomTop = Math.floor(Math.random() * 400);
        let randomLeft = Math.floor(Math.random() * 400);
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        leftSide.appendChild(face);
    } 
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener('click',nextLevel);
    document.body.addEventListener('click', gameOver);
}
function gameOver() {
    alert('Game over');
    theLeftSide.lastChild.removeEventListener('click', nextLevel);
    document.body.removeEventListener('click', gameOver);
}



function nextLevel() {
    event.stopPropagation();
    numberOfFaces += 5;
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide,firstChild);
    }
    while (theLeftSide,firstChild) {
        theRightSide.removeChild(theRightSide,firstChild);
    }
    generateFaces();
}

