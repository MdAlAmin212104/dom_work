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