const API_KEY = "fyF0hAswvNUJVVIFch90U0H6zsM6TlcOGLc0sQiX9mA";

$.get("https://api.unsplash.com/photos/?client_id=" + API_KEY, function (data) {
  var $galleryContainer = $('.photo-container');

  console.log(data);
  data.map(photo => {
    $galleryContainer.append('<div class="photo"><img src="' + photo.urls.small + '"></div>');
  });
}, );

function getPhotos() {
  let query = $('input').val();
  $.get("https://api.unsplash.com/search/photos/?client_id=" + API_KEY + "&query=" + query, function (data) {
    var $galleryContainer = $('.photo-container');
    $galleryContainer.empty();

    console.log(data);
    data.results.map(photo => {
      console.log(photo);
      $galleryContainer.append('<div class="photo"><img src="' + photo.urls.small + '"></div>')
    });
  }, );
  return false;
};