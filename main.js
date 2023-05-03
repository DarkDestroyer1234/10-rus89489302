var prediction_1 = ""
var prediction_2 = ""

Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality: 90

})

var camera = document.getElementById ("camera")


Webcam.attach("#camera")

function take_snapshot(){
Webcam.snap(function (data_uri){
document.getElementById ("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';




})



}

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1WcqKexW_/model.json", modelo_cargado)

function modelo_cargado(){

console.log ("model_charged")

}


function speak(){
    var synth = window.speechSynthesis;
    var speak_1 = "predecfdnnhuflxhuiofn one " + prediction_1
    var speak_2 = "predecfdnnhuflxhuiofn TTTWTWTWTWTWTTWO " + prediction_2
    var utterThis = new SpeechSynthesisUtterance(speak_1 + speak_2);
    synth.speak(utterThis);

}

function check(){
var img = document.getElementById("captured_image")
classifier.classify(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      document.getElementById("result_emotion_name2").innerHTML = results[1].label;
      results = results[0].label;
      results = results[1].label;
      speak();
      if(results[0].label == "1")
      {
        document.getElementById("update_emoji").innerHTML = "1"; 
      }
      if(results[0].label == "2")
      {
        document.getElementById("update_emoji").innerHTML = "2";
      }
      if(results[0].label == "3")
      {
        document.getElementById("update_emoji").innerHTML = "3";
      }
 
      if(results[1].label == "4")
      {
        document.getElementById("update_emoji2").innerHTML = "4";
      }
      if(results[1].label == "up")
      {
        document.getElementById("update_emoji2").innerHTML = "up";
      }
      if(results[1].label == "down")
      {
        document.getElementById("update_emoji2").innerHTML = "down";
      }
    }
  }


