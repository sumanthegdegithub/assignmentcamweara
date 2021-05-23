var ipvalue = $("#ipvalue");
$(function() {
            $( "#slider" ).slider({
               min: 0,
               max: 500,
               value: 50,
               animate:"slow",
               orientation: "horizontal",
               slide: updateSliderValue
            });
         });


var updateSliderValue = function (event, ui) {
    ipvalue.text(ui.value + ' %');
    $("#img").css("-webkit-filter","brightness(" + ui.value + "%)");
};


function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#img').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  } else {
    alert('select a file to see preview');
    $('#img').attr('src', '');
  }
}

$("#filePhoto").change(function() {
  readURL(this);
});


