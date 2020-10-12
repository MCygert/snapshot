import {
    createClient
} from "pexels";

const api_key = "563492ad6f917000010000016a1cddb5e2924a85a77ad1d190cb3915";
const client = createClient(api_key);
const query = "Nature";
console.log("it's working");
client.photos.random().then((photo) => {
    console.log(photo);
});
client.photos
    .search({
        query,
        per_page: 1,
    })
    .then((photos) => {
        console.log(photos);
    });