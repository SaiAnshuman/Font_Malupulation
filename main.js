function setup(){

    video = createCapture(VIDEO);
    video.size(750,650);
   
    canvas = createCanvas(550,550);
    canvas.position(800,135);
   
   
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses)
   
   
   }
   
   function modelLoaded(){
   
   console.log("poseNet is initialized");
   
   }
   
   function gotPoses(results){
   
   if(results.length > 0){
   
    console.log(results);
   
   }
   
   }
   
   function draw(){
   
   background("#fa961b");
   
   }
   