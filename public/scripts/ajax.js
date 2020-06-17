$(document).ready(() => {
  console.log("ready!");
  $('form').on('submit', (evt) => {
      evt.preventDefault();
      // How do I get the value of what i typed INTO my search URL?
      // How do i bundle the data i need to send to the user  ( hint hint serilize? )
      $.ajax({
          url: `http://api.tvmaze.com/search/shows?q=${evt.target.search.value}`,
          method: 'GET',
          dataType: 'JSON'
      }).then(function(response) {
          console.log(response);
          // const item = createItem(response[0])
          $('#results').empty();
          createItems(response);
      })
  })
})