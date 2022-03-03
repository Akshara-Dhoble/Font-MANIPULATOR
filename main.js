difference = 0 ;
rightWristX = 0 ;
leftWristY = 0 ;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);
    
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);

}

function draw(){
    background("#fffde7");
    textSize(difference);
    fill("#DC143C");
    text('peter' , 50 , 400);

    document.getElementById("font_side").innerHTML = "Font Size Of The Text Will Be = " + difference + "px" ;
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results ,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x ;
        left_wrist_x = results[0].pose.leftWrist.x ;

        difference = floor(left_wrist_x - right_wrist_x);

        console.log("rightwrist_x = " + results[0].pose.rightWrist.x + "rightwrist_y = " +  results[0].pose.rightWrist.y);
        console.log("leftwrist_x = " + results[0].pose.leftWrist.x + "leftwrist_y = " +  results[0].pose.leftWrist.y);

    }
}

    