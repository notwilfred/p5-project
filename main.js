function preload(){

}


function setup(){
canvas=createCanvas(640,480);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,300,300);
    circle(30,30,20);
    fill(255,0,0);
    stroke(0,60,20);
    }


    function take_snapshot(){
    save('myselfie.png');
    }