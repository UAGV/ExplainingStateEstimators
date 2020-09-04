class node{
 constructor(){
   this.position = createVector(random(width), random(height));
   this.manufacturingUncertainty = random(1);
   this.C1 = 0.4;
   this.C2 = 0.4;
   this.staticUncertainty = 0.1;
   
 }
 
 measure(){
 let bogey = createVector(mouseX,mouseY);
 this.range = bogey.dist(this.position);
 this.uncertainty = this.C1 + (this.C2*this.range);
 }
 
 show(){
    // show node
   strokeWeight(8);
   stroke(180);
   point(this.position.x, this.position.y);
   // show measurement
   strokeWeight(1);
   stroke(0);
   noFill();
   //circle(this.position.x, this.position.y, this.range*2); // Pure range
   stroke(130);
   circle(this.position.x, this.position.y, (this.range*2) + this.staticUncertainty); // range with static uncertainty
   //circle(this.position.x, this.position.y, (this.range*2) + this.uncertainty); // range with realistic uncertainty
 }
}
