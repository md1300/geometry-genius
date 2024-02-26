function calculateEllipseArea(){
    const ellipseBaseInput = document.getElementById('ellipse-width');
    const ellipseBaseText = ellipseBaseInput.value
    const base=parseFloat(ellipseBaseText )
   

    const ellipseHeightInput = document.getElementById('ellipse-height')
    const ellipseHeightText = ellipseHeightInput.value;
    const height = parseFloat(ellipseHeightText)

    const ellipseTotalArea = 3.1416*base*height
    

    const ellipseNewArea = document.getElementById('ellipse-area-span')
    ellipseNewArea.innerText=ellipseTotalArea


  
}