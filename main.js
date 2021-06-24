noseX=0
noseY=0
difference=0
leftWrist=0
rightWrist=0

function setup () {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,400)
    canvas.position(600,140)

    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function preload(){

}

function modelLoaded(){
    console.log("PoseNet Is Initialized!")
}

function gotPoses(results){
     if(results.length > 0){
         console.log(results)
         noseX=results[0].pose.nose.x
         noseY=results[0].pose.nose.y
         console.log("NoseX=" + noseX + "NoseY=" + noseY)

         leftWrist=results[0].pose.leftWrist.x
         rightWrist=results[0].pose.rightWrist.x
         difference= floor(leftWrist-rightWrist)
         console.log("Left Wrist=" + leftWrist + "Right Wrist=" + rightWrist + "Difference is=" + difference)

     }
}

function draw(){
    background('#6e2424')
    textSize(difference)
    text("SHIVENDRA SONTAKKE",noseX,noseY)
}