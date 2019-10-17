$(document).ready(function () {

    var portArr = [{
            name: "RPS",
            image: "assets/images/RPS.jpg",
            title: "Rock Paper Scissors",
            link: "https://bigshmow.github.io/RockPaperScissors",
            git: "https://github.com/Bigshmow/RockPaperScissors "
        },
        {
            name: "Psychic",
            image: "assets/images/PsychicGame.jpg",
            title: "Psychic Game",
            link: "https://bigshmow.github.io/Psychic-Game",
            git: "https://github.com/Bigshmow/Psychic-Game "
        },
        {
            name: "WordGuess",
            image: "assets/images/WordGuess.jpg",
            title: "Word Guess Game",
            link: "https://bigshmow.github.io/WordGuessGame",
            git: "https://github.com/Bigshmow/WordGuessGame "
        },
        {
            name: "Crystal",
            image: "assets/images/CrystalCollector.jpg",
            title: "Crystal Collector Game",
            link: "https://bigshmow.github.io/unit-4-game",
            git: "https://github.com/Bigshmow/unit-4-game "
        },
        {
            name: "Trivia",
            image: "assets/images/TriviaGame.jpg",
            title: "Trivia Game",
            link: "https://bigshmow.github.io/TriviaGame",
            git: "https://github.com/Bigshmow/TriviaGame "
        },
        {
            name: "GifTastic",
            image: "assets/images/GifTastic.jpg",
            title: "GifTastic",
            link: "https://bigshmow.github.io/GifTastic",
            git: "https://github.com/Bigshmow/GifTastic "
        },
        {
            name: "TrainGame",
            image: "assets/images/Train_Scheduler.jpg",
            title: "Train Scheduler",
            link: "https://bigshmow.github.io/Train_Scheduler",
            git: "https://github.com/Bigshmow/Train_Scheduler "
        },
        {
            name: "C2K",
            image: "assets/images/BetterCart.jpg",
            title: "Cart to Kitchen",
            link: "https://zuzanav.github.io/cart-to-kitchen",
            git: "https://github.com/Zuzanav/cart-to-kitchen "
        },
        {
            name: "LIRI",
            image: "assets/images/BetterLiri.jpg",
            title: "LIRI Bot",
            link: "https://github.com/Bigshmow/liri-node-app",
            git: "https://github.com/Bigshmow/liri-node-app "
        },
        {
            name: "Bamazon",
            image: "assets/images/BetterBamazon.jpg",
            title: "Bamazon App",
            link: "https://github.com/Bigshmow/Bamazon",
            git: "https://github.com/Bigshmow/Bamazon "
        },
        {
            name: "FriendFinder",
            image: "assets/images/BetterFriend.jpg",
            title: "FriendFinder",
            link: "https://agile-everglades-82324.herokuapp.com",
            git: "https://github.com/Bigshmow/FriendFinder "
        },
        {
            name: "EatDaBurger",
            image: "assets/images/BetterBurger.jpg",
            title: "EatDaBurger",
            link: "https://eatdaburger-bigshmow.herokuapp.com",
            git: "https://github.com/Bigshmow/burger "
        }

    ]

    for (let i = 0; i < portArr.length; i++) {
        var newDiv = $("<div style='float: left;'>");
        var newLink = "<a href=" + portArr[i].link + ">";
        var newImg = $(newLink + "<img src=" + portArr[i].image + " class='img-fluid card-img-top'>");
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