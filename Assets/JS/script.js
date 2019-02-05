// check off specific todos by clicking
$("ul").on("click","li", function (){
   $(this).toggleClass("completed");
});


//click on X to delete a list item
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

//add a listener on input filed
$("input[type='text']").keypress(function(event) {
    if(event.which===13) {
        //grabbing the text from the input field
        var todoText = $(this).val();
        //clear the input field after adding the text to todo list
        $(this).val("");
        // creating a new <li> for the grabbed text
        // added created <li> to the <ul>
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
        
    }
})


