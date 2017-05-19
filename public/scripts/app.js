//this page contains functions which post the inputted form value into the database
// and then render the same page using AJAX with updated '.show-tweets class' shown
$(document).ready(function() {


  function renderTweets(tweets) {
    for(var i=0;i<tweets.length; i++) {
      $(".show-tweet").prepend(createTweetElement(tweets[i]));
    }
  }
//This function goes through the data array, goes thru each data and applies
//the createTweetElement (see below) function to each one (this creates the HTML element) and puts the resulting html into the
//show-tweet class container
  function loadTweets() {
    $.ajax({
      url: "/tweets",
      method: "get"
    }).done(renderTweets);
    }
//this function will be inputted into the AJAX success .done portion on the jQuery
//function below, it renders the page with updated .show-tweets container

  function createTweetElement(tweetData) {
    var $profilepic = $("<img>").attr("src", tweetData.user.avatars.small).addClass("profile-pic");
    var $username = $("<h3>").text(tweetData.user.name).addClass("username");
    var $twittername = $("<p>").text(tweetData.user.handle).addClass("twittername");
    var $header = $("<header>").append($profilepic, $username, $twittername);
    var $message = $("<p>").text(tweetData.content.text).addClass("twitterbody");
    var $postdate = $("<p>").text(Math.floor(((new Date().getTime()) - tweetData.created_at)/86400000) + " days ago").addClass("postdate");
    var $links = $("<i>").addClass("icon-android links");
    var $links2 = $("<i>").addClass("icon-camera-retro links");
    var $links3 = $("<i>").addClass("icon-instagram links links");
    var $footer = $("<footer>").append($postdate, $links, $links2, $links3);
    var $tweet = $("<article>").append($header, $message, $footer).addClass("tweet");
    return($tweet);
  }
// this function builds the HTML element from the object on the database
loadTweets();
//loads the page for the first time upon page load

//the following jQuery fires off the functions above when the form button is clicked
//It also contains if statements which doesn't allow empty tweets and tweets that have
// too many characters (more than 140).
  $(".new-tweet").on("submit", "form", function(event) {
    event.preventDefault();
    $(".show-tweet").empty();
    var tweetlength = $(this).find("textarea").val();
    if (tweetlength.length > 140) {
      alert("Your tweet is too long");
      return;
    } else if (tweetlength.trim().length === 0 ){
      alert("Your tweet is empty");
      return;
    } else {
        $.ajax({
          method: "Post",
          url: "/tweets",
          data: $(this).serialize()
        }).done( () => {
          $("textarea").val("");
          $(".counter").text("140");
          loadTweets();
        })
    }
  });

});



