//calls the Canvas element
const canvas = document.querySelector('canvas');
//Sets the context for the canvas element.
const context = canvas.getContext('2d');

//sets const for general canvas width and height
let canvasWidth = 700;
let canvasHeight= 288;

//Sets Width and Height
canvas.width = canvasWidth;
canvas.height = canvasHeight;


//Starts Drawing 
context.beginPath();
context.moveTo( 250, 50);   //takes x and y  co-ordinate values
context.lineTo( 250, 250);  //takes x and y co-ordinate values
context.lineTo( 500, 250);  //takes x and y co-ordinate values
context.lineWidth = 3;
context.lineCap = 'round';
context.stroke();
//Adds V text.
context.font = "20px Arial";
context.fillText("v", 243, 40)

//Adds T text.
context.font = "20px Arial ";
context.fillStyle = "bold";
context.fillText("t", 505, 255)

//Adds text for the velocity
context.font = "20px Arial ";
context.fillStyle = "bold";
context.fillText("1.02 sec", 350, 274)

//Adds text for the velocity
context.font = "20px Arial ";
context.fillStyle = "bold";
context.fillText("10 m/s", 170, 135);

//movement on the Velocity Graph.
context.beginPath();
context.moveTo(250, 130);
context.lineTo(352, 249);
context.lineTo(440, 124.5);
context.stroke();

//Second Canvas
const canvas2 = document.querySelector(".canvas2")
const context2 = canvas2.getContext("2d");

//sets width and height for second canvas
canvas2.width = 700;
canvas2.height = 288;

//gets Image and draws it on the canvas
// const cityImage = document.getElementById("city");
// context2.drawImage(cityImage, 0, 0, 700, 288);
// context2.save();



let canonBallX = 373;
let canonBallY = 232.5;
let value;
// formerly drawn canonImage using canvas
//gets 2nd Image
// const canonImage = document.getElementById("canon");
// context2.drawImage(canonImage, canonX, 246, 40, 40);

//sets functionality for tyhe album.
// var check1 = document.getElementById('check1');
// var check2 = document.getElementById('check2');

// Set function 
const checkCall = ()=>{
    document.getElementById('adg').disabled = true;
    document.getElementById("adg").value = "0.005";
    value= 0.005
}

const customCall =()=>{
    document.getElementById('adg').disabled = false;

}

//Getting acceleration due to gravity from the text box.  
function onValueChanged(val) {
    // alert("The input value has changed. The new value is: " + val);
value=parseFloat(val)
  }

// var gravity =  document.getElementById("adg").value;
// console.log(gravity);
// var gravity = 0.005;
var frictionalforce = 0.98;
//draws a ball
function Ball(x, y, dy, radius, color){
    this.x = x;
	this.y = y;
	// this.dx = dx;
	this.dy = dy;
	this.radius = radius;
    this.color = color;
    this.bounce = 0.6;
    
    this.update = function(){

        if(this.y + this.radius + this.dy >canvas2.height){
            //increases the y velocity of the ball.
             this.dy = this.dy;
         } else{
            this.dy -=(value*frictionalforce);
        }

        
        this.y -=this.dy;
        this.draw();
    }

    this.draw = function(){
        context2.beginPath();
        context2.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        context2.fillStyle = this.color;
        context2.fill();
        context2.closePath();
    }
}

//initiates the ball with its Property.
let ball;
function init(){
    //   var dy = 1.3;   
      var dy =document.getElementById("initialVel-box").value;        
      ball = new Ball(canonBallX, canonBallY, dy, 9, 'red');
      console.log(ball)
}

//Loop for the animation
function animate() {
    requestAnimationFrame(animate); 
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
    ball.update();
}
// function calls


const launchCanon= () =>{

    init();
    animate();
}