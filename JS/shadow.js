const mainDiv = document.querySelector('.mainDiv');
const heading = mainDiv.querySelector('h1');

mainDiv.addEventListener('mousemove',produceShadow);

function produceShadow(e){

    const {offsetWidth:width,offsetHeight:height} = mainDiv;

    let {offsetX:x,offsetY:y} = e;

    let xWalk = ((x / 2.5) / width * 100);
    let yWalk = ((y / 2) / height * 100);

    if(e.target!==this){
        x = e.offsetX  + x ;
        y = e.offsetY + y ;
    }
    
    heading.style.textShadow = 
    `
    ${xWalk}px ${yWalk}px red ,
    ${-xWalk}px ${yWalk}px blue ,
    ${xWalk}px ${-yWalk}px green ,
    ${-xWalk}px ${-yWalk}px orange 
    `
}