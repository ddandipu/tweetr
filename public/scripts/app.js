/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

  function renderTweets(tweets) {
    tweets.forEach((userObj) => {
      $(".show-tweet").append(createTweetElement(userObj));
    })
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

// Test / driver code (temporary). Eventually will get this from the server.


renderTweets(data);
});

