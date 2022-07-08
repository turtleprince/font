var noseX = 10;
var noseY = 10;
var wrist_left_X = 0;
var wrist_right_X = 0;
var difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(600, 130);

  posenet = ml5.poseNet(video , modelloaded);
  posenet.on("pose", got_Results);
}

function modelloaded(){
console.log("modelloaded");
}

function got_Results(results){
    if(results.length > 0){
            console.log(results);

            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;

            wrist_left_X = results[0].pose.leftWrist.x;
            wrist_right_X = results[0].pose.rightWrist.x;

            difference = floor(wrist_left_X - wrist_right_X);

            document.getElementById("sqaure_side").innerHTML = "Square size is "+ difference;

    }
    
}

function draw(){
background("white");
fill("red");
stroke("black");
circle(noseX, noseY, difference);

}