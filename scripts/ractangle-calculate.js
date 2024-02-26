// function calculateRactangleArea(){
     // get ractangle base value 

   // const ractangleWidthInput=document.getElementById('ractangle-width')
   // const ractangleWidthText = ractangleWidthInput.value;
//    console.log(typeof ractangleWidthText)
   // const width=parseFloat(ractangleWidthText);
//    console.log(width)
//    console.log(typeof width)

// get triangle hight value
// const ractangleLengthInput=document.getElementById('ractangle-length');
// console.log('your name is tawhid')
// const ractangleLengthText=ractangleLengthInput.value;
// console.log(ractangleLengthText)

// console.log(typeof triangleContent)
// const length=parseFloat(ractangleLengthText);
// console.log(typeof length)

// calculate triangle area
// const area=width*length;


// display triangle area
// const ractangleAreaSpan=document.getElementById('ractangle-span');
// ractangleAreaSpan.innerText= area;

// }

// unique System
function calculateRactangleArea(){
   const base= getElementById('ractangle-width');
   const height=getElementById('ractangle-length');
   const area = base*height;
   const newtext=setElementById('ractangle-span',area)
}