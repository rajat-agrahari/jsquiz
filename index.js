
var quizContainer = document.querySelectorAll('.quiz-container');
var option = document.querySelectorAll('.option');
var firstclick = false;
var points = 0
var countQues = 1
var firstNext = false;

quizContainer.forEach(e =>{
    e.style.display="none";
});
quizContainer[0].style.display="block";

option.forEach(e => {
    var rightanswer = document.getElementsByClassName("right-answer");
    var right = rightanswer[0];
   
    e.addEventListener("click",fun)
    function fun(){
        if(e.classList.contains("right-answer") == true){
            e.classList.add('green-answer');
            firstclick = true;
            points = points+2;
        }
        else{
            e.classList.add("yellow-wrong");
            right.classList.add("green-answer");
            firstclick = true;
        }
        document.getElementById('points').innerText = points;
    }
    
});
var countSpan = document.getElementById("count-ques");
var nextBox = document.querySelector(".next-box");

nextBox.addEventListener("click",nextpage);

function nextpage() {
    if(!firstNext){
        quizContainer[0].style.display="none";
    }
    if(countQues == 5 ){
            if(confirm('Congratulations! You have score ' + points)){
                window.location.reload();  
            }
    }
    firstNext = true;
    quizContainer[countQues-1].style.display="none";
    quizContainer[countQues].style.display="block";
    
    countQues = countQues+1;
    countSpan.innerText = countQues;
    if(countQues == 5){
        nextBox.innerText="Submit";
    }
}