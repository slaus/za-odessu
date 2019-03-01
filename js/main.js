var day = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
document.getElementById('date').innerHTML=day[new Date().getDay()]+", "+new Date().getDate()+" "+new Date().toLocaleString('ru-RU',{ month: 'long' })+" "+new Date().getFullYear();

$(function() {
    $("<select />").appendTo("#select-menu");
    $("<option />", {
        "selected": "selected",
        "value"   : "",
        "text"    : "Перейти на страницу..."
    }).appendTo("#select-menu select");

    $(".select-menu a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo("#select-menu select");
    });

    $("#select-menu select").change(function() {
        window.location = $(this).find("option:selected").val();
    });
    
    
    $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest("nav").length === 0) {

            $(".navbar-collapse").removeClass("show").slideDown("slow");
            $(".navbar-toggler").removeClass("collapsed").slideDown("slow");
        
        }
    });

});