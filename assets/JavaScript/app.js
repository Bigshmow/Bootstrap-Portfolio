// alert("Linked Up!");

$(document).on("click",".submit", function(){
    $(".form-control").val(" ");
    $("#bigText").val("I appreciate your interest and will get back to you soon.")
    $(".submit").fadeToggle(1000);
    setTimeout(() => {
        $(".submit").text("Thank you!");
        $(".submit").fadeToggle(1000);
    }, 2000);
});