function calculateTriangleArea(){
      const inputBase = document.getElementById('triangle-base').value;
      const inputHeight = document.getElementById('triangle-height').value;
      const base = parseFloat(inputBase);
      const height = parseFloat(inputHeight);
      const area = 0.5 * base * height;
      

      const triangleArea = document.getElementById('triangle-area');
      triangleArea.innerText = area;
}

function calculateRectangle(){
      const rectangleWidth = document.getElementById('rectangle-width').value;
      const rectangleLength = document.getElementById('rectangle-length').value;
      const width = parseFloat(rectangleWidth);
      const length = parseFloat(rectangleLength);
      
      const area = width * length;
      const rectangleArea = document.getElementById('rectangle-area');
      rectangleArea.innerText = area;

}



function calculateParallelogram(){
      const base = getInputValue('parallelogram-base');
      const height = getInputValue('parallelogram-height');
      const area = base * height;
      getInnerTextarea('parallelogram-area', area);
      

      
}


function calculateRhombusArea(){
      const d1 = getInputValue('rhombus-d1');
      const d2 = getInputValue('rhombus-d2');
      const area = 0.5 * d1 * d2;
      getInnerTextarea('rhombus-area', area);
      
}

function calculatePentagonArea(){
      const p = getInputValue('pentagon-p');
      const b = getInputValue('pentagon-b');
      const area = 0.5 * p * b;
      getInnerTextarea('pentagon-area', area);
}

function calculateEllipseArea(){
      const a = getInputValue('ellipse-a');
      const b = getInputValue('ellipse-b');
      const area = a * b;
      getInnerTextarea('ellipse-area', area);
}
function getInputValue(id){
      const inputValue = document.getElementById(id).value;
      const value = parseFloat(inputValue);
      return value;
}

function getInnerTextarea(id, value){
      const area = document.getElementById(id);
      area.innerText = value;
}