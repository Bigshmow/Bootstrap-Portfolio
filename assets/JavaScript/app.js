$(document).ready(function () {

    var portArr = [{
            name: "RPS",
            image: "../Bootstrap-Portfolio/assets/images/RPS_Resized.jpg",
            title: "Rock Paper Scissors",
            link: "https://bigshmow.github.io/RockPaperScissors",
            git: "https://github.com/Bigshmow/RockPaperScissors "
        },
        {
            name: "Psychic",
            image: "../Bootstrap-Portfolio/assets/images/Psychic_Resize.jpg",
            title: "Psychic Game",
            link: "https://bigshmow.github.io/Psychic-Game",
            git: "https://github.com/Bigshmow/Psychic-Game "
        },
        {
            name: "WordGuess",
            image: "../Bootstrap-Portfolio/assets/images/WordGuess_Resize.jpg",
            title: "Word Guess Game",
            link: "https://bigshmow.github.io/WordGuessGame",
            git: "https://github.com/Bigshmow/WordGuessGame "
        },
        {
            name: "Crystal",
            image: "../Bootstrap-Portfolio/assets/images/Crystal_Resize.jpg",
            title: "Crystal Collector Game",
            link: "https://bigshmow.github.io/unit-4-game",
            git: "https://github.com/Bigshmow/unit-4-game "
        },
        {
            name: "Trivia",
            image: "../Bootstrap-Portfolio/assets/images/Trivia_Resize.jpg",
            title: "Trivia Game",
            link: "https://bigshmow.github.io/TriviaGame",
            git: "https://github.com/Bigshmow/TriviaGame "
        },
        {
            name: "GifTastic",
            image: "../Bootstrap-Portfolio/assets/images/GifTastic_200x200.jpg",
            title: "GifTastic",
            link: "https://bigshmow.github.io/GifTastic",
            git: "https://github.com/Bigshmow/GifTastic "
        },
        {
            name: "TrainGame",
            image: "../Bootstrap-Portfolio/assets/images/Train_Resize.jpg",
            title: "Train Scheduler",
            link: "https://bigshmow.github.io/Train_Scheduler",
            git: "https://github.com/Bigshmow/Train_Scheduler "
        },
        {
            name: "C2K",
            image: "../Bootstrap-Portfolio/assets/images/C2K_Resize.jpg",
            title: "Cart to Kitchen",
            link: "https://zuzanav.github.io/cart-to-kitchen",
            git: "https://github.com/Zuzanav/cart-to-kitchen "
        },
        {
            name: "LIRI",
            image: "../Bootstrap-Portfolio/assets/images/LIRI_Bot_Resize.jpg",
            title: "LIRI Bot",
            link: "https://github.com/Bigshmow/liri-node-app",
            git: "https://github.com/Bigshmow/liri-node-app "
        }
    ]

    for (let i = 0; i < portArr.length; i++) {
        var newDiv = $("<div style='float: left;'>");
        var newLink = "<a href=" + portArr[i].link + ">";
        var newImg = $(newLink + "<img src=" + portArr[i].image + " class='card-img-top'>");
        var newTitle = "<div class='card-body'>" + "<h5 class='text-center'>" + portArr[i].title + "</h5>" + "</div>";
        var newGit = "<a href=" + portArr[i].git +"<h5 style='font-size:35px'class='text-center fa fa-github'></h5>";
        var newCard = $(newDiv).attr("class", "card").append(newImg).append(newTitle).append(newGit);
        $("#portDis").prepend(newCard);
    }

    $(document).on("click", ".submit", function () {
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