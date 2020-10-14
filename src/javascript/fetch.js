import fetch from "node-fetch"
import Unsplash, { toJson } from 'unsplash-js';

global.fetch = fetch;

const API_KEY = "fyF0hAswvNUJVVIFch90U0H6zsM6TlcOGLc0sQiX9mA";
const unsplash = new Unsplash({ accessKey: API_KEY });

unsplash.search.collections("dogs", 1)
.then(toJson)  
.then(json => {
    console.log(json);
});