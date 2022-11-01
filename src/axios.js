import axios from "axios";

// base url to make reuqests to tmbd

const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3",
})

//instance.get('/foo-bar');

// this makes the address as https://api/themovdiedb.org/3/foo-bar

export default instance;