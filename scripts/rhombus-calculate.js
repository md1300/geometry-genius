// function calculateRhombusArea(){
//     const rhombusBaseInput = document.getElementById('rhombus-width');
//     const rhombusBaseText=rhombusBaseInput.value;
//     const width= parseFloat(rhombusBaseText);

//     const rhombusHeightInput = document.getElementById('rhombus-height');
//     const rhombusHeightText = rhombusHeightInput.value;
//     const height =parseFloat(rhombusHeightText) ;
    
    
//     const rhombusTotalArea = 0.5*width*height;
    
//     const newArea = document.getElementById('rhombus-area-span');
//    newArea.innerText=rhombusTotalArea;
// }
function calculateRhombusArea(){
    const base = getInputValueById('rhombus-width');
    console.log('rhombus base',base);

     const height=getInputValueById('rhombus-height')
     console.log('rhombus height',height);

     const area =0.5*base*height;
     console.log('total area',area);

     setInnerTextId('rhombus-area-span',area)

}

function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldText=inputField.Value;
    const inputValue=parseFloat(inputFieldText);
    return inputValue ;
}
function setInnerTextId(elementId,area){
    const element=document.getElementId(elementId);
     element.innerText= area;

}