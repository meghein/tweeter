/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 const renderTweets = function(tweets) {
  const tweetsArr = [];
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    tweetsArr.push(createTweetElement(tweet));
  }
  // takes return value and appends it to the tweets container
  $('#tweets-container').append(tweetsArr);

};

const createTweetElement = function(tweet) {
  const $tweetElement = `
    <article id="tweet">
      <header>
        <div class="user">
          <img src="${tweet.user.avatars}">
          <h4>${tweet.user.name}</h4>
        </div>
        <h5>${tweet.user.handle}</h5>
      </header>
      <section class="quote">"${escape(tweet.content.text)}"</section>
      <footer>
        <h6>${moment(new Date(tweet.created_at)).fromNow()}</h6>
        <button type="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
        <button type="like"><i class="fa fa-heart" aria-hidden="true"></i></button>
        <button type="flag"><i class="fa fa-flag" aria-hidden="true"></i></button>
      </footer>
    </article>
  `
  return $tweetElement;
};

const loadTweets = function() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    dataType: 'JSON'
  }).then(function(response) {
    const reverseData = response.reverse()
    renderTweets(reverseData)
  })
};

const tweetValidation = function(text) {
  if (!text) {
    alertMessage("⚠︎ Invalid or Missing Text! ⚠︎")
    return false;
  } else if (text.length > 140) {
    alertMessage("⚠︎ Text too long! ⚠︎");
    return false;
  } else {
    return true;
  }
};

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const alertMessage = function(message) {
  $('.alert').text(message);
  /*animate the bar*/
  $('.alert').slideDown(() => {
    setTimeout(() => {
        $('.alert').slideUp(() => {
          $(this).remove()
        });
    }, 1500);
  });
};

$(document).ready(function(){
  $("#write-tweet").click(function(){
    $("form").slideToggle();
  });
});

$(document).ready(() => {
  loadTweets();
  $("form").on("submit", event => {
    event.preventDefault();
    const text = $("#tweet-text").val();
    if (tweetValidation(text)) {
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $("#tweet-text").serialize(),
      dataType: "text"
    }).then(() => {
      $("#tweets-container").empty()
      $("form").trigger('reset');
      $(".counter").text('140')
      loadTweets()
      console.log('Ajax request successful. Client input posted')
    });
    } else {
      console.log('Client input invalid')
    }
  })
});