/** 
 * objective:get base , height of a triangle.Calculate the area by using the provided formula. and then display the area. 
 * step-1:get base value of the triangle
 * step-2:added an id in the base input field
 * step-3:use getElementById to access the input field
 * step-4:get value from the input field.(value is string now)
 * step-5:convert the value to a number .use parsefloat
 * 
 */ 



function calculateTriangleArea(){
    // get triangle base value 
   const triangleBaseInput=document.getElementById('triangle-base');
   const triangleText =triangleBaseInput.value;
   const base=parseFloat(triangleText)
console.log(base)
// get triangle hight value
const triangleHightInput=document.getElementById('triangle-height') ;
const triangleContent =triangleHightInput.value;
// console.log(typeof triangleContent)
const height=parseFloat(triangleContent)
console.log(height)
// calculate triangle area
const area = 0.5 * base * height ;
console.log('area of the triangle is',area)
// display triangle area
const triangleAreaSpan=document.getElementById('triangle-area')
triangleAreaSpan.innerText=area;
}
