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
      console.log("clicked");
      ev.stopPropagation();
      ev.preventDefault();
      let likeStatus = $(this).data("likestatus");
      let likes = $(this).val()
      let resourceId = $(this).data("resourceid");

      if ( !likeStatus ) {
        console.log("ajax call...", resourceId)
        $.ajax({
          method: 'POST',
          url: "resources/addlike",
          data: { resourceId: resourceId}
        })
        .done((response) => {
          loadResources()
          console.log("call complete");
        })
        .fail(console.error);
    }
    })

    return resourceFormat;
  }
  loadResources();
  //loadUserResources();

});
