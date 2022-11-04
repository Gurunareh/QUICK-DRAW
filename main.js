function setup(){
    canvas= createCanvas(280,280);
    canvas.center()
    background("white");
    canvas.mouseReleased(classifyCanvas);
 synth=window.speechSynthesis;
   }
   
   function clearCanvas(){
       background("white")
   }
   function preload(){
    classifier=m15.imageClassifier('DoodleNet');
}
function draw(){
}
// set stroke weight to 13
strokeweight(13);
// set stroke color to black
stroke(0);
//if mouse is pressed draw line between previous current mouse positions
if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX,mouseY);
}
function classifyCanvas(){
    clssifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML='label:'+results[0].label;
    document.getElementById('confidence').innerHTML='cofidence:'+Math.round(results[0].confidence*100)+'%';
    utterThis-new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}