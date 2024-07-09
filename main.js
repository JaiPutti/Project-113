function preload(){

}

function setup()
{

canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();

tint_color = "";

image(img, 100, 280, 340, 0,)  

fill(0, 128, 0);
stroke(0, 128, 0);
circle(350, 50, 70);

image(img, 200, 280, 340, 0,)  

fill(0, 128, 0);
stroke(0, 128, 0);
circle(350, 50, 70);

image(img, 100, 0, 340, 0,)  

fill(0, 128, 0);
stroke(0, 128, 0);
circle(350, 50, 70);

image(img, 100, 0, 340, 0,)  

fill(0, 128, 0);
stroke(0, 128, 0);
circle(350, 50, 70);

createCanvas(100, 100);


line(30, 20, 85, 75);

createCanvas(100, 100);


line(30, 30, 95, 75);

}

function draw()
{

    image(video, 0, 0, 340, 280);
    tint(tint_color);



 
}

function take_snapshot()
{

save ('student+name.png');


}

function filter_tint()
{

tint_color = document.getElementById("color_name").value;

}