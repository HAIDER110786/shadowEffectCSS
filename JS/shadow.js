const mainDiv = document.querySelector('.mainDiv');
const heading = document.querySelector('h1');

mainDiv.addEventListener('mousemove',produceShadow);

function produceShadow(e){
    const {offsetX:x, offsetY:y} = e;
    console.log(x,y);
}