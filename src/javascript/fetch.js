class PhotoGallery {
  constructor() {
    const api_key = "563492ad6f917000010000016a1cddb5e2924a85a77ad1d190cb3915";
    this.galleryDiv = document.querySelector("ul");
    this.images = this.getImage();
  }

  async getImage() {
    const baseURL = "https://api.pexels.com/v1/search?query=nature&per_page=1";
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: this.api_key,
      },
    });
    const data = await response.json();
    console.log(data);
  }
}
const photo = new PhotoGallery();
