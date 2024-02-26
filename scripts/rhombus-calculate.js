function calculateRhombusArea(){
    const rhombusBaseInput = document.getElementById('rhombus-width')
    const rhombusBaseText=rhombusBaseInput.value
    const width= parseFloat(rhombusBaseText)

    const rhombusHeightInput = document.getElementById('rhombus-height')
    const rhombusHeightText = rhombusHeightInput.value
    const height =parseFloat(rhombusHeightText) 
    
    
    const rhombusTotalArea = 0.5*width*height
    
    const newArea = document.getElementById('rhombus-area-span')
   newArea.innerText=rhombusTotalArea

    
}