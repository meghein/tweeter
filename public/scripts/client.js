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
  $(document).ready(() => {
    $('#tweets-container').append(tweetsArr);
  })
};

const createTweetElement = function(tweet) {
  const $tweetElement = `
    <article>
      <header>
        <h4><img src="${tweet.user.avatars}">${tweet.user.name}</h4>
        <h5>${tweet.user.handle}</h5>
      </header>
      <section class="quote">"${tweet.content.text}"</section>
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

// const generateRandomProfile = function(quote) {
//   const randomProfile = `{
//     user: {
//     name: "name",
//     avatars: "https://i.imgur.com/nlhLi3I.png",
//     handle: "@handle" },
//     content: {
//       text: ${quote}
//     },
//     "created_at": ${new Date().getTime()}
//   }`;
//   return randomProfile;
// };

const loadTweets = function() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    dataType: 'JSON'
  }).then(function(response) {
    const reverseData = response.reverse()
    // console.log("loadTweets -> reverseData", reverseData)
    renderTweets(reverseData)
  })
};

$(document).ready(() => {
  loadTweets();
  $("form").on("submit", event => {
    event.preventDefault();
    // const text = $("#tweet-text").val();
    // if (tweetValidation(text)) {
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $("form").serialize(),
      dataType: "text"
    }).then(() => {
      $("#tweets-container").empty()
      $("form").trigger('reset');
      $(".counter").text('140')
      loadTweets()
      console.log('Ajax request success')
    });
  // }
  })
})