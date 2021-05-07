eyex=0;
eyey=0;
function preload(){
    crown=loadImage('https://i.postimg.cc/DzttCwgX/Golden-King-Crown-Transparent-Background-PNG-640x380.png');
}
function draw(){
    image(video,0,0,300,300);
    image(crown,eyex,eyey,100,100);
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPose);
}
function takespeshot(){
    save('Queen.png');
}
function modelLoaded(){
    console.log("modelLoaded");
}
function getPose(results){
if(results.length>0){
    console.log(results);
    eyex=results[0].pose.rightEye.x-50;
    eyey=results[0].pose.rightEye.y-120;
}
}
