// function calculatePentagonArea(){
//     const pentagonBaseInput = document.getElementById('pentagon-base')
//     const pentagonBaseText=pentagonBaseInput.value
//     const base = parseFloat(pentagonBaseText)

//     const pentagonHeightInput = document.getElementById('pentagon-height')
//     const pentagonHeightText = pentagonHeightInput.value
//     const height = parseFloat(pentagonHeightText)

//     const pentagonTotalArea = 0.5*base*height


//     const pentagonNewArea = document.getElementById('pentagon-area-span')
//     pentagonNewArea.innerText=pentagonTotalArea
// }


function calculatePentagonArea(){
    console.log('connected')
    const base = getElementById('pentagon-width')
    console.log('the value of base is',base)

    const height = getElementById('pentagon-height')
    console.log('the value of height is',height)

    const area = 0.5* base *height ;
    console.log('the total area is',area)

   const newtext =setElementById('pentagon-span',area)
}

function getElementById(elementId){
    const inputField =document.getElementById(elementId);
    const inputValue=inputField.value;
    const inputTextValue=parseFloat(inputValue);
    return inputTextValue;
}
 
function setElementById(elementId,area){
    const newElement=document.getElementById(elementId);
    newElement.innerText=area
}


















