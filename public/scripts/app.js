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
        $('#main-container').prepend($resource);
      }
    });
  }

  // function createResource(){
  //   $.ajax({
  //     method: "POST",
  //     url:
  //   });
  // }

  function searchResources(searchValue){

    $.ajax({
      method: 'GET',
      url: `/resources/search/${searchValue}`
    }).done((result) => {
      $('#main-container').html('');
      for(resource of result) {
        console.log('')
        let $resource = createResourceElement(resource);
        $('#main-container').prepend($resource);
      }
    });
  }

  $('#searchButton').on('click', function(event){
    console.log('hello');
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

    return resourceFormat;
  }

});
