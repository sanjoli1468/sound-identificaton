function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UmaM97G9z/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.errpr(error);
    }
    else{
        console.log(results)
        random_num_r = Math.floor(Math.random() * 255) + 1;
        random_num_g = Math.floor(Math.random() * 255) + 1;
        random_num_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = " I can Hear- "+ results[0].label;
       document.getElementById("result_confidence").innerHTML = "Accuracy- "+(results[0].confidence*100).toFixed(2)+" % "
       document.getElementById("result_label").style.color = "rgb("+random_num_r+","+random_num_g+","+random_num_b+")";
       document.getElementById("result_confidence").style.color = "rgb("+random_num_r+","+random_num_g+","+random_num_b+")";

       img1 = document.getElementById("alien1");
       img2 = document.getElementById("alien2");
       img3 = document.getElementById("alien3");
       img4 = document.getElementById("alien4");

       if(results[0].label == "Clapping"){
           img1.src = 'aliens-01.gif';
           img2.src = 'aliens-02.png';
           img3.src = 'aliens-03.png';
           img4.src = 'aliens-04.png';
       }
       else if(results[0].label =="Whistling") {
img2.src = 'aliens-02.gif';
img1.src = 'aliens-01.png';
img3.src = 'aliens-03.png';
img4.src = 'aliens-04.png';
       } 
       else if(results[0].label == "Cluching"){
           img3.src = 'aliens-03.gif';
           img2.src = 'aliens-02.png';
           img1.src = 'aliens-01.png';
           img4.src = 'aliens-04.png';
       }
       else{
           img4.src = 'aliens-04.gif';
           img2.src = 'aliens-02.png';
           img1.src = 'aliens-01.png';
           img3.src = 'aliens-03.png';
       }
    }
}
