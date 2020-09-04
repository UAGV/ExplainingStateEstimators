// NOTE: Accuracy and Precision are terms used seperatly and importantly

const network = [];

function setup() {
 deltaT = 1; 
  
 createCanvas(900,900);
 for (let i = 0; i <8; i++){
  network.push(new node());
 }
 sensor = new velocitySensor(deltaT);
}


function draw() {
  background(244, 248, 252);
  
  // Draw position
  strokeWeight(2);
  stroke(255,0,0);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY,height, mouseY);
  
  // update nodes
  for(let node of network) {
    node.measure();
    node.show();
  }
  
  // estimate
  
}
