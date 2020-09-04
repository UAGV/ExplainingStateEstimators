class estimator{
  // rudimentary state estimator
  // states modeled are x,y xDot, yDot
  
  constructor(deltaT){
     // initialise state at 0
     this.deltaT = deltaT;
     this.position = createVector(0,0);
     this.velocity = createVector(0,0);
     this.priorPosiiton = this.position;
     this.priorVelocity = this.velocity;
  }
  
  predict(measurementV){
  // predict next position based on precise velocity measurement
  this.predictedPosition = this.priorPosition + (measurementV * this.deltaT);
    
  }

  update(){
  
  }
}
