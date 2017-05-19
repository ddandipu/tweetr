//this document contains jQuery which makes all the aesthetics
// of the page work

$(document).ready(function() {
  $(".new-tweet form").on("keyup", "textarea", function(){
    var counter = $(this).parent().find(".counter");
    var counterVal = 140 - this.value.length;
    if ((counterVal) < 0) {
      counter.text(counterVal);
      counter.css('color', 'red');
    } else {
      counter.text(counterVal);
      counter.css('color', 'black');
    }
  });
});
// this function makes the tweet counter work

$(document).ready(function() {
  $(".show-tweet").on("mouseover",".tweet", function(){
    var fontAwe= $(this).find("footer").find(".links");
    fontAwe.css("display", "inline");
  });
});
// this function makes the fontAwesome in bottom right corner
// of each tweet appear when a mouse hovers above the tweet
$(document).ready(function() {
  $(".show-tweet").on("mouseout",".tweet", function(){
    var fontAwe= $(this).find("footer").find(".links");
    fontAwe.css("display", "none");
  });
});
// this function does the opposite of the one before this
// when mouse is out, the fontAwesome disappears
$(document).ready(function() {
  $(".compose").on("click", function() {
    $(".new-tweet").slideDown("500" , function () {
    });
    $(".new-tweet textarea").focus();
    window.scrollTo(0,0);
  });
});
// this function is for the compose button, the form is initially hidden
// when you click on Compose, it drops down, auto focus on the textarea
// and scrolls up to the textarea no matter how far down the page viewer is.