perdiction_1 ="";
perdiction_2 ="";

Webcam.set({
    width:350,
    height:350,
    image_format: "png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");


function snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='Img_Results' src ='" + data_uri + "'/>"
    });
}

console.log("version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LXyDxH7n_/model.json", modelLoaded());

function modelLoaded()
{
    console.log("Model Loaded")
}

function speak()
{
    var synth = window.speechSynthesis
    speachData1 = "The first perdiction is" + perdiction_1;
    speachData2 = "The first perdiction is" + perdiction_2;
    var utterThis = new SpeechSynthesisUtterance(speachData1 + speachData2);
    synth.speak(utterThis);
}