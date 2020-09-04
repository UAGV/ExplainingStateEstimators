class velocitySensor{
  constructor(deltaT){
     this.deltsT = deltaT;
     this.uncertainty = 0.001;
     this.priorPosition = createVector(mouseX,mouseY);
     this.currentPosition = createVector(mouseX,mouseY);
  }
  
  measure(){
   this.currentPosition.x = mouseX;
   this.currentPosition.y = mouseY;
   let measurement = this.currentPosition.dist(this.priorPosition) * this.deltsT;
   
   this.priorPosition = this.currentPosition;
   
   return measurement;
  }

}
