var arr = []; 
var arr1 = [];
var arr2 = [];
function setup(){
  createCanvas(400,400)
  database=firebase.database();
  background("black")
  this.button=createButton("reset");
  this.button.position(10,10,10,10);
}

function draw(){
  beginShape();
  stroke(255);
  strokeWeight(4);
  noFill();
  for(var i=0; i<arr.length; i++){
    vertex(arr[i].x,arr[i].y)
    endShape();
  }
  readData();
  this.button.mousePressed(()=>{
    database.ref('drawing').set({"d":arr2});
  });
}
function mouseDragged(){
  var point={x:mouseX, y:mouseY}
  arr1.push(point);
  database.ref('drawing').set({"d":arr1});
}
function readData () {
  database.ref('drawing').on("value",(Data)=>{
    arr=Data.val().d;
  });
}
