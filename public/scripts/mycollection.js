$(document).ready(function (){


  let $userid = 1; // session.id
  function loadUserResources(){
    $.ajax({
      method: "GET",
      url: `/resources/${$userid}`,
    }).done((resources) => {
      $('#my-container').html('');
      for(resource of resources) {
        let $resource = createResourceElement(resource);
        $('#my-container').append($resource);
      }

    });
  }

  function createResourceElement(resource){
    let resourceFormat = $(`<div class="card">
      <div class="card-block">
        <h4 class="card-title">${resource.description}</h4>
        <p class="card-text">URL:  <iframe src="${resource.url}"></iframe></p>
        <p class="card-text"><small class="text-muted">${resource.date_created}</small></p>
      </div>
    </div>`);

    return resourceFormat;
  }
  loadUserResources();

});
