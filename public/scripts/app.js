$(document).ready(function (){

  loadResources();

  function loadResources(){
    $.ajax({
      method: "GET",
      url: "/resources"
    }).done((resources) => {
      $('#main-container').html('');
      for(resource of resources) {
        let $resource = createResourceElement(resource);
      }
    });
  }


  function createResourceElement(resource){
    let likes = resource.likecount ? resource.likecount : "";
    let resourceFormat = $(`<div class="card">
      <div class="card-block">
        <h4 class="card-title">${resource.description}</h4>
        <p class="card-text"><a href="${resource.url}"><img style="max-height:100%;max-width:80%"src="${resource.image}"></a></p>
        <p class="card-text"><small class="text-muted">Date Created: ${resource.date_created}</small></p>
        <footer>
            <button id="likes-button-${resource.id}" class="likes-button" data-resourceId="${resource.id}" data-likes="${likes}" data-likeStatus="false">
              <i class="fa fa-heart" aria-hidden="true"></i>${likes}
            </button>
            <div class="rate-button" data-resourceId="${resource.id}" data-user_id="${resource.user_id}" >
              Rate Me
            </div>
            <div id="#el">
              <ul class="el c-rating">
                <li class="c-rating__item" data-index="0"></li>
                <li class="c-rating__item" data-index="1"></li>
                <li class="c-rating__item" data-index="2"></li>
                <li class="c-rating__item" data-index="3"></li>
                <li class="c-rating__item" data-index="4"></li>
              </ul>
            </div>
        </footer>
      </div>
    </div>`);

    $('#main-container').append(resourceFormat);

    let resourceid = `${resource.id}`;
    let tag = '#likes-button-' + resourceid;

    $(tag).click(function(ev) {
      // $(this).click(false);
      console.log("clicked");
      ev.stopPropagation();
      ev.preventDefault();
      let likeStatus = $(this).data("likestatus");
      let likes = $(this).val()
      let resourceId = $(this).data("resourceid");
      if ( !likeStatus ) {
        console.log("ajax call...")
        $.ajax({
          method: 'POST',
          url: "resources/add-likes",
          data: { resourceId: resourceId}
        })
        .done((response) => {
          loadResources()
          console.log("call complete");
        })
        .fail(console.error);
      }
    })

    $( ".el" ).click(function(ev) {
      console.log("clicked!");
      // this.disabled = true;
      ev.preventDefault();
      var el = document.querySelector('#el');
      // current rating, or initial rating
      var currentRating = 0;
      // max rating, i.e. number of stars you want
      var maxRating= 5;
      // callback to run after setting the rating
      var callback = function(rating) { alert(rating); };
      // rating instance
      var myRating = rating(el, currentRating, maxRating, callback);
      myRating.setRating(3);
      $.ajax({
        method: 'POST',
        url: "resources/ratings",
        data: { resourceId: resourceId }
        })
        .done((response) => {
          loadResources()
          console.log("call complete");
        })
        .fail(console.error);
    })



  function searchResources(searchValue){

    $.ajax({
      method: 'GET',
      url: `/resources/search/${searchValue}`
    }).done((result) => {
      $('#main-container').html('');
      for(resource of result) {
        let $resource = createResourceElement(resource);
        $('#main-container').prepend($resource);
      }
    });
  }

  $('#searchButton').on('click', function(event){
    event.preventDefault();
    $('#main-container').empty();
    let searchValue = $('#searchInput').val();
    searchResources(searchValue);
  })

  function createResourceElement(resource){
    let resourceFormat = $(`<div class="card">
      <div class="card-block">
        <h4 class="card-title">${resource.description}</h4>
        <p class="card-text"><a href="${resource.url}"><img style="max-height:100%;max-width:80%"src="${resource.image}"></a></p>
        <p class="card-text"><small class="text-muted">${resource.date_created}</small></p>
      </div>
    </div>`);

    // return resourceFormat;
  }
  // if(($('#main-container').html() == '')){
  //   console.log('notempty');

  }

  loadResources();
  // else{
  //   console.log('empty')
  // }


});
