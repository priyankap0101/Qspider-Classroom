const videoElement = document.getElementById("video")
const start = document.getElementById("start")
const stop = document.getElementById("stop")


var displayMediaOption = {
    video:{
        cursor:'always'
    },
    audio:true
}


start.addEventListener("click",function(e) {
    startCapture()
},false)

stop.addEventListener("click",function(e) {
    stopCapture()
},false)



async function  startCapture(){
 
    try{

        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOption)

    }

    catch(err){
        console.log("Error" + err)
    }
}
function stopCapture(e){
    let tracks = videoElement.srcObject.getTracks()
    tracks.forEach(track => track.stop())
videoElement.srcObject = null              
}