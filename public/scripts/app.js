$(document).ready(function (){

  function loadResources(){
    $.ajax({
      method: "GET",
      url: "/resources"
    }).done((resources) => {
      $('#main-container').html('');
      for(resource of resources) {
        let $resource = createResourceElement(resource);
        $('#main-container').append($resource);
      }
    });
  }

  function createStars(count) {
    var result = '';
    for (var i = 0; i < count; i++) {
      result += '*';
    }
    return result;
  }


  function createResourceElement(resource){
    let likes = resource.likecount ? resource.likecount : "";

    let resourceFormat = $(`<div class="card">
      <div class="card-block">
        <h4 class="card-title">${resource.description}</h4>
        <p class="card-text">URL:  <iframe class="url-image" src="${resource.url}"></iframe></p>
        <p class="card-text"><small class="text-muted">Date Created: ${resource.date_created}</small></p>
        <footer>
          <div class="url-rating">
            <span>${createStars(resource.rating)}</span>
            <a class="likes-button" data-resourceId="${resource.id}" data-likes="${likes}" data-likeStatus="false">
              <i class="fa fa-heart" aria-hidden="true">${likes}</i>
            </a>
          </div>
        </footer>
      </div>
    </div>`);

    $( ".likes-button" ).click(function(ev) {
      // ev.stopPropagation();
      // ev.preventDefault();
      let likeStatus = $(ev.target).closest('a').data("likestatus");
      let likes = $(ev.target).closest('a').val()
      let tweetId = $(ev.target).closest('a').data("tweetid");
        if ( !likeStatus ) {
          $.ajax({
            method: 'POST',
            url: `/likes`,
            data: { tweetId: tweetId},
            success: loadTweets()
          })
          .done((response) => {
          })
          .fail(console.error);
      }
    })

    return resourceFormat;
  }
  loadResources();

});
