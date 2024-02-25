function calculateParallelogramArea(){
    const parallelogramBaseInput=document.getElementById('parallelogram-b')
    const parallelogramText=parallelogramBaseInput.value;
    // console.log(typeof parallelogramText) 
    const base =parseFloat(parallelogramText)
    // console.log(typeof base)

    const parallelogramHeightInput=document.getElementById('parallelogram-h')
    const parallelogramHeightText=parallelogramHeightInput.value;
    // console.log(parallelogramHeightText)
    // console.log(typeof parallelogramHeightText)
    const height = parseFloat(parallelogramHeightText)
    // console.log(height)
    const parallelogramArea = base * height
    // console.log(parallelogramArea)
    const parallelogramAreaSpan=document.getElementById('parallelogram-span')
    parallelogramAreaSpan.innerText=parallelogramArea
}