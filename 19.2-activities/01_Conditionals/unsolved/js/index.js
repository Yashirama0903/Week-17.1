$('.tab').on("click", function(){
  
    if($(this).hasClass("tab1")) {
        $(".tab1").addClass("active");
        $(".tab2").addClass("active");
        $("#tabContent1").css("display","black");
        $("tabContent2").css("display","none");
    }
    else if ($(this).hasClass("tab2")) {
        $(".tab2").addClass("active");
        $(".tab1").addClass("active");
        $("#tabContent2").css("display","black");
        $("tabContent1").css("display","none"); 
    }
}); 
