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

  $('#searchButton').on('submit', function(event){
    console.log('hello');
    $('#main-container').empty();
    let searchValue = $('#searchInput').val();
    searchResources(searchValue);
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
  if(($('#main-container').html() == '')){
    console.log('notempty');
   loadResources();
  }
  else{
    console.log('empty')
  }

});
