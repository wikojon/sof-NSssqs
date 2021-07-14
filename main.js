img =""
status =""

function setup()
{
    canvas = createCanvas(500,450);
    canvas.center()
    //its Loading cocossd
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
    status=true
    console.log("Model Loaded!")
    //running the module here. The img is input, the output is the gotResult
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error)
    }
    console.log(results)
}

function preload()
{
    img = loadImage('download.jpeg')
}

function draw()
{
    image(img, 0, 0, 500, 450)
    fill("red")
    stroke("red")
    noFill()
    text("Dog", 50, 75)
   rect(30, 60, 460, 380)
   
   fill("red")
   noFill();
   text("cat", 250, 90);
   stroke("red")
   rect(245, 80, 245, 350)
   
}