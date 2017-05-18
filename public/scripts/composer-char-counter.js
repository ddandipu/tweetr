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

$(document).ready(function() {
  $(".show-tweet").on("mouseover",".tweet", function(){
    var fontAwe= $(this).find("footer").find(".links");
    fontAwe.css("display", "inline");
  });
});

$(document).ready(function() {
  $(".show-tweet").on("mouseout",".tweet", function(){
    var fontAwe= $(this).find("footer").find(".links");
    fontAwe.css("display", "none");
  });
});

$(document).ready(function() {
  $(".compose").on("click", function() {
    $(".new-tweet").slideDown("500" , function () {
    });
    $(".new-tweet textarea").focus();
    window.scrollTo(0,0);
  });
});