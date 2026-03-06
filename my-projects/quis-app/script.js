
let arr=[
    {
    question: "what color is pikachu",
    options: ["yellow","red","white","pink"],
    answer: "yellow"
    },
    {
    question: "capital of India",
    options: ["mumbai","nagpur","new delhi","pune"],
    answer: "new delhi"
    },
    {
    question: "what is the value of pi",
    options: ["1.088","2.66","doesnt exits","3.14"],
    answer: "3.14"
    }
]

let currentIndex =0;
let currentScore =0;

function displayQuestion(){
    document.getElementById("Display-question").innerHTML=arr[currentIndex].question;
   arr[currentIndex].options.forEach(function(option){
    
    const button = document.createElement("button");
    button.innerText=option;
   button.addEventListener("click",function(){
    if(button.innerText === arr[currentIndex].answer){
        currentScore++;
        document.getElementById("Score-js").innerHTML=`Score:${currentScore}`

    }
   });
   document.getElementById("options-container").appendChild(button);
})
    };

    function nextQuestion(){
       let buttonELement=  document.getElementById("next-button") ;

       buttonELement.addEventListener('click',function(){
        if(currentIndex>=arr.length-1){
            document.getElementById("options-container").innerHTML = "";
            document.getElementById("Display-question").innerHTML = "";
            document.getElementById("next-button").style.display = "none";
            document.getElementById("Score-js").innerHTML = `Score:${currentScore}`
        }else{
        currentIndex++;
        document.getElementById("options-container").innerHTML = "";
        displayQuestion();
    }})

    }


    
       

displayQuestion();
nextQuestion();
