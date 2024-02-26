function calculatePentagonArea(){
    const pentagonBaseInput = document.getElementById('pentagon-base')
    const pentagonBaseText=pentagonBaseInput.value
    const base = parseFloat(pentagonBaseText)

    const pentagonHeightInput = document.getElementById('pentagon-height')
    const pentagonHeightText = pentagonHeightInput.value
    const height = parseFloat(pentagonHeightText)

    const pentagonTotalArea = 0.5*base*height


    const pentagonNewArea = document.getElementById('pentagon-area-span')
    pentagonNewArea.innerText=pentagonTotalArea
}