

$(function(){

    $(".toggle-contact").on("click",function(){
        if($(".contact").hasClass("active")){
            $(".contact").removeClass("active");
            $(".back").hide();
        }else{
            $(".contact").addClass("active");
            $(".back").show();
        }
    });
});
