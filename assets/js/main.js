$(document).ready(function() {
    tabs();
    changeLuxuryCar();
});

function changeLuxuryCar(){
    $("#luxuryWhite").on('click', function(){
        $("#colorTxt").text("White Pearl");
        $("#luxury_color_change").css("background-image", "url('assets/img/luxury1.avif')");
    });
    $("#luxuryBlack").on('click', function(){
        $("#colorTxt").text("Obsidian");
        $("#luxury_color_change").css("background-image", "url('assets/img/luxuryBlack.avif')");
    });
    $("#luxuryRed").on('click', function(){
        $("#colorTxt").text("Lava red");
        $("#luxury_color_change").css("background-image", "url('assets/img/luxuryRed.avif')");
    });
    $("#luxuryBlue").on('click', function(){
        $("#colorTxt").text("Midnight blue");
        $("#luxury_color_change").css("background-image", "url('assets/img/luxuryBlue.avif')");
    });
}
function tabs(){

}