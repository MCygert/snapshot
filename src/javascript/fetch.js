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
  $.get("https://api.unsplash.com/search/photos/?client_id=" + API_KEY + "&query=" + query + "&per_page=20", function (data) {
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

var $container = $('.photo-container').infiniteScroll({
  path: function() {
    console.log("test")
    return "https://api.unsplash.com/search/photos/?client_id=" + API_KEY + "&query=" + query + "&per_page=20" + '&page=' + this.pageIndex;
  },
  // load page as text
  responseType: 'text',
  // disable history
  history: false,
  status: '.scroll-status',
});

// $container.on( 'load.infiniteScroll', function( event, response ) {
//   // parse response into JSON data
//   var data = JSON.parse( response );
//   console.log(data);
//   // compile data into HTML
//   var itemsHTML = data.map( getItemHTML ).join('');
//   console.log(itemsHTML);
//   // convert HTML string into elements
//   var $items =  $( itemsHTML );
//   console.log($items)
//   // append item elements
//   $container.infiniteScroll( 'appendItems', $items );
// });


$container.on( 'load.infiniteScroll', function( event, response ) {
  // parse response into JSON data
  var data = JSON.parse( response );
  
  data.results.map(photo => {
    console.log(photo);
    $galleryContainer.append('<div class="photo"><img src="' + photo.urls.small + '"></div>')
  });
  $container.infiniteScroll( 'appendItems', $items );
});