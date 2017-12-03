function getIt() {
  $('p').on('click', function(){
    alert('i was clicked')
  });
}

function frameIt() {
  $('img').on('load', function(){
      $('img').addClass('tasty')
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71){
        alert('s was pressed');
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    // if ($( "input:first" ).val() === "correct") {
    //   alert('your form is going to be submitted now');
    //   return;
    // }
    alert("Your form is going to be submitted now.");
    return;
  });
}

$(document).ready(function(){
  frameIt()
  pressIt()
  getIt()

});
