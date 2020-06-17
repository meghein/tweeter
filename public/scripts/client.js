/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1592223195
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1592423195
  }
]

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
        <h6>${moment(new Date(tweet.created_at) * 1000).fromNow()}</h6>
        <button type="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
        <button type="like"><i class="fa fa-heart" aria-hidden="true"></i></button>
        <button type="flag"><i class="fa fa-flag" aria-hidden="true"></i></button>
      </footer>
    </article>
  `
  return $tweetElement;
};

renderTweets(data);

// const generateRandomProfile = function(quote) {
//   const randomProfile = `{
//     user: {
//     name: "${}",
//     avatars: "https://i.imgur.com/nlhLi3I.png",
//     handle: "@rd" },
//     content: {
//       text: 
//     },
//     "created_at": 1461113959088
//   }`
// }

