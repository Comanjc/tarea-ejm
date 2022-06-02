$(document).ready(function () {
    
    $(".primero").css({"background-color": "orange"});
    $("#segundo").css({"background-color": "yellow"});
    $("#tercero").css({"background-color": "blue"});
    $(".cuarto").css({"background-color": "red"});


    $("#click").click(function () {
        alert(" Hola Hermosa 🥵");
    });
    $("#btn-hide").click(function () {
        $("#segundo").hide();
    });

    $("#btn-show").click(function () {
        $("#segundo").show();

    });
    $("#cuarto").mouseenter(function () {
        $("#tercero").fadeOut();

    });

    $("#cuarto").mouseleave(function () {
        $("#tercero").fadeIn();

    });
    
     /* de los parrafos*/
    $("#p-1").hide();
    $("#h-1").mouseenter(function (){
        $("#p-1").slideDown();
    });
    $("#h-1").click(function (){
        $("#p-1").slideUp();
    });
    
    $("#p-2").hide();
    $("#h-2").mouseenter(function (){
        $("#p-2").slideDown();
    });
    $("#h-2").click(function (){
        $("#p-2").slideUp();
    });
    
    $("#p-3").hide();
    $("#h-3").mouseenter(function (){
        $("#p-3").slideDown();
    });
    $("#h-3").click(function (){
        $("#p-3").slideUp();
    });
    
    $("#p-4").hide();
    $("#h-4").mouseenter(function (){
        $("#p-4").slideDown();
    });
    $("#h-4").click(function (){
        $("#p-4").slideUp();
    });
    
    /* preguntas */
    $("#mi-1").hide();
    $("#b-1").click(function (){
        $("#b-1").hide();
        $("#mi-1").show();
    });
    $("#mi-1").click(function (){
        $("#mi-1").hide();
        $("#b-1").show();
    });
    $("#mi-2").hide();
    $("#b-2").click(function (){
        $("#b-2").hide();
        $("#mi-2").show();
    });
    $("#mi-2").click(function (){
        $("#mi-2").hide();
        $("#b-2").show();
    });
    $("#mi-3").hide();
    $("#b-3").click(function (){
        $("#b-3").hide();
        $("#mi-3").show();
    });
    $("#mi-3").click(function (){
        $("#mi-3").hide();
        $("#b-3").show();
    });
    
    $("#mi-4").hide();
    $("#b-4").click(function (){
        $("#b-4").hide();
        $("#mi-4").show();
    });
    $("#mi-4").click(function (){
        $("#mi-4").hide();
        $("#b-4").show();
    });
    
    $("#mi-5").hide();
    $("#b-5").click(function (){
        $("#b-5").hide();
        $("#mi-5").show();
    });
    $("#mi-5").click(function (){
        $("#mi-5").hide();
        $("#b-5").show();
    });

    $("#dos").hide();
    $("#uno").click(function (){
        $("uno").hide(2000);
        $("#dos").slideToggle(2000);
    });
   



}); 

