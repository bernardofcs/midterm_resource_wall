$(document).ready(function (){

  function loadResources(){
    $.ajax({
      method: "GET",
      url: "/resources"
    }).done((resources) => {
      $('#main-container').html('');
      for(resource of resources) {
        let $resource = createResourceElement(resource);
        $('#main-container').prepend($resource);
      }
    });
  }

  function searchResources(){

    $.ajax({
      method: 'POST',
      url: '/resources/search/'
    }).done((result) => {
      $('#main-container').html('');
      for(resource of result) {
        let $resource = createResourceElement(resource);
        $('#main-container').prepend($resource);
      }
    });
  }
  $('#searchButton').on('submit', function(event){
    event.preventDefault();
    $('#main-container').empty();
    let searchValue = $('#searchInput').val();
    searchResources();
  })

  function createResourceElement(resource){
    let resourceFormat = $(`<div class="card">
      <div class="card-block">
        <h4 class="card-title">${resource.description}</h4>
        <p class="card-text">URL:  <iframe <img src = "http://media.comicbook.com/2017/03/richonne-236020-320x180.jpg"></img> src="${resource.url}"></iframe></p>
        <p class="card-text"><small class="text-muted">${resource.date_created}</small></p>
      </div>
    </div>`);

    return resourceFormat;
  }
  loadResources();

});
