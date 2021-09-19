noseX=0;
noseY=0;

function preload(){
moustache= loadImage('https://i.postimg.cc/4dX35v12/moustache.png');
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 500, 500);
    image(moustache, noseX, noseY, 100, 50);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log("Posenet is Initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x -47;
        noseY = results[0].pose.nose.y +7;
        console.log("moustache x = " + noseX);
        console.log("moustache y = " + noseY);
    }
}