
//toggle when clicked
$("ul").on("click","li",function(){
    $(this).toggleClass("done");
})
//click to remove activity
$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(1000,function(){
    $(this).remove();
   })
   event.stopPropagation();
})
//we select input to  manuplate it
$("input[type='text'").on("keypress",function(event){
    
    if(event.which===13){
        var getInput=$(this).val();
        $(this).val(" ")
        $("ul").append("<li><span><img src='/assert/images/icons8_delete_512px.png' alt='' width='18px'></span> "+ getInput+"</li>")  
    }

})
//make the plus image to toggle
$("img").on("click",function(){
    $("input").toggle();
})

