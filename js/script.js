$(document).ready(function() { console.log("ready!");
})

$(function() {
  $('#hobbies-answer').hide();
  $('#job-answer').hide();
  $('#music-answer').hide();

});

/************************************************
    ******* Question section animations*******
 ************************************************/

$('#questions').mouseenter(function() {
  $('#questions h2').css("font-size", "2.25rem");
})

$('#cursor-hobbies').click(function() {
  $('p.active').hide(1000);
  $('#hobbies-answer').show("slow");
})

$('#cursor-job').click(function() {
  $('p.active').hide(1000);
  $('#job-answer').show("slow");
})

$('#cursor-music').click(function() {
  $('p.active').hide(1000);
  $('#music-answer').show("slow");
})

$('#questions').mouseleave(function() {
  $('#questions h2').css("font-size", "2rem");
  $('.active').hide(1000);
});

; //closes document ready function.

/*use a class called active, add it to the elements that need to be displayed. when clicked it moves to the section. read up on DRY dont repeat yourself. SRP single response principle*/