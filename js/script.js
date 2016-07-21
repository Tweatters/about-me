$(document).ready(function() { console.log("ready!");
})

$(function() {
  $('#hobbies-answer').hide();
  $('#job-answer').hide();
  $('#music-answer').hide();

});

/***** show then hide hobbies*****/

$('#cursor-hobbies').click(function() {
  $("#hobbies-answer").first().show("fast", function showNext() {
    $(this).next("#hobbies-answer").show("fast", showNext);
  });
});
  $("#cursor-job, #cursor-music").click(function() {
  $("#hobbies-answer").hide(1000);
});

/***** Show then hide job ****/

$('#cursor-job').click(function() {
  $('#job-answer').first().show("fast", function showNext() {
    $(this).next('#job-answer').show("fast", showNext);
  });
});

$('#cursor-music, #cursor-hobbies').click(function() {
  $('#job-answer').hide(1000);
});

/******* Show then hide music ******/

$('#cursor-music').click(function() {
  $('#music-answer').first().show("fast", function showNext() {
    $(this).next("#music-answer").show("fast", showNext);
  });
});

$('#cursor-hobbies, #cursor-job').click(function() {
  $('#music-answer').hide(1000);
});

;