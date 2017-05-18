/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 $(document).ready(function() {


  function renderTweets(tweets) {
    for(var i=0;i<tweets.length; i++) {
      $(".show-tweet").prepend(createTweetElement(tweets[i]));
    }
  }

  function loadTweets() {
    $.ajax({
      url: "/tweets",
      method: "get"
    }).done(renderTweets);
    }


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
loadTweets();
//Test / driver code (temporary). Eventually will get this from the server.


  $(".new-tweet").on("submit", "form", function(event) {
    event.preventDefault();
    var tweetlength = $(this).find("textarea").val()
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



