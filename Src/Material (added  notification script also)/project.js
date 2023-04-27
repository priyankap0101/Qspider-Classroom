var start=document.getElementById('btn');
var stop=document.getElementById('btn_stop') ;
const videoElem = document.getElementById("video");
var displayMediaOptions = {
    video: {
      cursor: "always",
      height:1000,
      width:1200
    },
    audio: false
  };
var a=start.addEventListener('click',()=>{
    startCapture();  
},false);
var a=stop.addEventListener('click',()=>{
    stopCapture();  
},false);
async function startCapture(){
    try{
        videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
          dumpOptionsInfo();
      
    }
    catch(err){
        console.error("Error:"+err);
    }
}
function stopCapture(evt) {
        let tracks = videoElem.srcObject.getTracks();
        tracks.forEach(track => track.stop());
        videoElem.srcObject = null;
      }
function dumpOptionsInfo(){
     const videoTrack = videoElem.srcObject.getVideoTracks()[0];
        console.info("Track settings:");
        console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
        console.info("Track constraints:");
        console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
   
}
function runSpeechRecognition() {
     var output = document.getElementById("output");
    var action = document.getElementById("action");
     var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

     recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
    }
  
     recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        output.innerHTML = "<b>Text:</b> " + transcript ;
        output.classList.remove("hide");
    };
  recognition.start();
}