Webcam.set({
    height:300,
    width:300,
    image_format:'png',
    png_quality:90,

    constraints:{
        facingMode:'environment' 
    }
 });

 
 Camera = document.getElementById("camera");

 Webcam.attach('#camera');

 function TakeSnapshot() {
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="image" src="'+ data_uri +'"/>'
     })
 }

 console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier('MobileNet' , Modelloaded);

function Modelloaded(){
    console.log("ModelLoaded");
}

function Check(){
    img = document.getElementById("image");
    classifier.classify( img , gotResult)
}

function gotResult(error,results){
    if(error)
    {
    console.error(error);
    }
     else{
         document.getElementById("object_result").innerHTML = results[0].label;
         console.log(results);
     }
}