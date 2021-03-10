function setup(){

    video = createCapture(VIDEO);
    video.size(550,550);
   
    canvas = createCanvas(550,550);
    canvas.position(800,135);
   
   
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses)
   
   
   }
   
   function modelLoaded(){
   
   console.log("poseNet is initialized");
   
   }


   noseX = 0;
   noseY = 0;
   rightWristX = 0;
   leftWristX = 0;
   difference = 0;
   
   function gotPoses(results){
   
   if(results.length > 0){
   
    console.log(results);
    noseX = results[0].pose.nose.x;
 noseY = results[0].pose.nose.y;
 console.log("Nose X cordinate = " + noseX + " Nose Y cordinate = " + noseY);

 rightWristX = results[0].pose.rightWrist.x;
 leftWristX = results[0].pose.leftWrist.x;
 difference = floor(leftWristX - rightWristX);

 console.log( "right wrist x cordinate is = " + rightWristX + " left wrist x cordinate is = " + leftWristX + " difference = " + difference);
   
   }
   
   }
   
   function draw(){
   
   background("#D48ECD");
  textSize(difference);
  text("Hello" , noseX , noseY)


document.getElementById("sqr_size").innerHTML = "width and height of the text is: " + difference + "px";

   
   }


   