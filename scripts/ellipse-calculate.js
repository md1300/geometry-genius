// function calculateEllipseArea(){
//     const ellipseBaseInput = document.getElementById('ellipse-width');
//     const ellipseBaseText = ellipseBaseInput.value
//     const base=parseFloat(ellipseBaseText )
   

//     const ellipseHeightInput = document.getElementById('ellipse-height')
//     const ellipseHeightText = ellipseHeightInput.value;
//     const height = parseFloat(ellipseHeightText)

//     const ellipseTotalArea = 3.1416*base*height
    

//     const ellipseNewArea = document.getElementById('ellipse-area-span')
//     ellipseNewArea.innerText=ellipseTotalArea 
// }

function calculateEllipseArea(){

 const base = getInputValueById('ellipse-width');
//  console.log('base value', base);

 const height=getInputValueById('ellipse-height');
//  console.log('height value',height);

 const area = 3.1416*base*height;
//  console.log('ellipse area:',area) ;

 setInnerTextId('ellipse-area-span',area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
        const inputValueText = inputField.value ;
         const inputValue=parseFloat( inputValueText);
         return inputValue;

}
function setInnerTextId(elementId,area){
    const element=document.getElementById(elementId)
     element.innerText=area
}