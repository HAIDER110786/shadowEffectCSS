const mainDiv = document.querySelector('.mainDiv');
const heading = mainDiv.querySelector('h1');

mainDiv.addEventListener('mousemove',produceShadow);

function produceShadow(e){

    const {offsetWidth:textWidth,offsetHeight:textHeight} = mainDiv;

    let {offsetX:mouseX,offsetY:mouseY} = e;

    let xShadow = ((mouseX / 2.5) / textWidth * 100);
    let yShadow = ((mouseY / 2) / textHeight * 100);

    if(e.target!==this){
        xShadow = ((e.offsetX)/ 50)  + xShadow ;
        yShadow = ((e.offsetY)/ 2) + yShadow ;
    }
    
    heading.style.textShadow = 
    `
    ${xShadow}px ${yShadow}px red ,
    ${-xShadow}px ${yShadow}px blue ,
    ${xShadow}px ${-yShadow}px green ,
    ${-xShadow}px ${-yShadow}px orange 
    `
}