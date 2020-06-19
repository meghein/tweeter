/*
 * Client-side JS logic here
 * jQuery is already loaded
 */

// Functionality to access tweets database
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

//Created a new tweet to be added to the database
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
  `;
  return $tweetElement;
};

//Loads tweets on the webpage and uses reverse() to display newest tweet first
const loadTweets = function() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    dataType: 'JSON'
  }).then(function(response) {
    const reverseData = response.reverse();
    renderTweets(reverseData);
  });
};

// Escape helper function to account for xss code. Used in the createTweetElement function
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Function to render an error message if tweet is invalid
const tweetValidation = function(text) {
  if (!text) {
    alertMessage("⚠︎ No message recieved! Please try again... ⚠︎");
    return false;
  } else if (text.length > 140) {
    alertMessage("⚠︎ This message is too long to post! Please keep to our arbitrary 140char limit. ⚠︎");
    return false;
  } else {
    return true;
  }
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

/////////////////////////////////////////////////////////
// Ajax/Jquery functionality to load elements on page //

$(document).ready(function() {
  $("#write-tweet").click(function() {
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
        $("#tweets-container").empty();
        $("form").trigger('reset');
        $(".counter").text('140');
        loadTweets();
        console.log('Ajax request successful. Client input posted');
      });
    } else {
      console.log('Client input invalid');
    }
  });
});