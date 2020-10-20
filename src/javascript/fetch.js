class galleryPhotoFetching {
  constructor(galleryContainer) {
    this.API_KEY = "fyF0hAswvNUJVVIFch90U0H6zsM6TlcOGLc0sQiX9mA";
    this.$galleryContainer = galleryContainer;
    this.loadPhotos();
    this.addScrollListener();
  }

  loadPhotos() {
    $.get(
      "https://api.unsplash.com/photos/?client_id=" +
        this.API_KEY +
        "&per_page=30",
      function (data) {
        data.map((photo) => {
          this.$galleryContainer.append(
            this.createPhotoObject(photo.urls.small)
          );
        });
      }
    );
  }

  infinityLoading() {
    let query = $("input").val();
    $.get(
      "https://api.unsplash.com/search/photos/?client_id=" +
        this.API_KEY +
        "&query=" +
        query +
        "&per_page=20",
      function (data) {
        this.creatingPhotoFromResponse(data);
      }
    );
    return false;
  }

  addScrollListener() {
    $(window).on("scroll", this.loadNewPhoto);
  }

  loadNewPhoto() {
    if (
      $(window).scrollTop() + $(window).height() >=
      $(document).height() - $(document).height() * 0.1
    ) {
      this.infinityLoading;
    }
  }
  getPhotos() {
    let query = $("input").val();
    $.get(
      "https://api.unsplash.com/search/photos/?client_id=" +
        this.API_KEY +
        "&query=" +
        query +
        "&per_page=20",
      function (data) {
        this.$galleryContainer.empty();

        this.creatingPhotoFromResponse(data);
      }
    );
    return false;
  }

  creatingPhotoFromResponse(data) {
    data.results.map((photo) => {
      this.createPhotoObject(photo.urls.small);
    });
  }

  createPhotoObject(photoUrl) {
    return '<div class="photo"><img src="' + photoUrl + '"></div>';
  }
}

$(document).ready(() => {
  new galleryPhotoFetching($(".photo-container"));
});
