$(document).ready(function(){
// alert("Linked Up!");
var portArr = [
    {name:"RPS" , image: "../Bootstrap-Portfolio/assets/images/RPS_Resized.jpg" , title: "Rock Paper Scissors" , link: "https://bigshmow.github.io/RockPaperScissors"},
    {name:"Psychic" , image: "../Bootstrap-Portfolio/assets/images/Psychic_Resize.JPG" , title: "Psychic Game" , link: "https://bigshmow.github.io/Psychic-Game"},
    {name:"WordGuess" , image: "../Bootstrap-Portfolio/assets/images/WordGuess_Resize.JPG" , title: "Word Guess Game", link: "https://bigshmow.github.io/WordGuessGame" },
    {name:"Crystal" , image: "../Bootstrap-Portfolio/assets/images/Crystal_Resize.JPG" , title: "Crystal Collector Game", link: "https://bigshmow.github.io/unit-4-game/"},
    {name:"Trivia",image: "../Bootstrap-Portfolio/assets/images/Trivia_Resize.JPG" , title: "Trivia Game", link: "https://bigshmow.github.io/TriviaGame"},
    {name: "GifTastic",image: "../Bootstrap-Portfolio/assets/images/GifTastic_200x200.JPG",title: "GifTastic",link: "https://bigshmow.github.io/GifTastic"},
    {name:"TrainGame",image: "../Bootstrap-Portfolio/assets/images/Train_Resize.JPG",title:"Train Scheduler",link: "https://bigshmow.github.io/Train_Scheduler"}
]

for (let i = 0; i < portArr.length; i++) {   
    var newDiv = $("<div style='float: left;'>");
    var newImg = $("<img src=" + portArr[i].image + " class='card-img-top'>");
    var newTitle = "<div class='card-body'>" + "<h5 class=text-center>" + portArr[i].title + "</h5>" + "</div>";
    var newLink = "<a href=" + portArr[i].link + " class='stretched-link'>";
    var newCard = $(newDiv).attr("class" , "card").append(newImg).append(newLink + newTitle);
    $("#portDis").prepend(newCard);
}
    // 
    $(document).on("click",".submit", function(){
    $(".form-control").val(" ");
    $("#bigText").val("I appreciate your interest and will get back to you soon.")
    $(".submit").fadeToggle(1000);
    setTimeout(() => {
        $(".submit").text("Thank you!");
        $(".submit").fadeToggle(1000);
    }, 2000);
});

// document.ready
})
