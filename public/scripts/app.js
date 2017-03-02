$(document).ready(function (){
  function loadResources(){
    $.ajax({
      method: "GET",
      url: "/resources"
    }).done((resources) => {
      for(resource of resources) {

      }
    });
  }
});
