import axios from "axios";
// import { FAKE_RECOMMENDATIONS } from './fakeData'

const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY_PARAM = "?api_key=0d30e6fa2de64430cc122453a3aea0a3"
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/w300";
const SMALL_IMG_COVER_BASE_URL = "https://image.tmdb.org/t/p/w300";

export class TVSHOWAPI {
    static async fetchPopulars() {
        const res = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        return res.data.results;
    }

    static async fetchRecommendations(tvShowID) {
        const res = await axios.get(`${BASE_URL}tv/${tvShowID}/recommendations${API_KEY_PARAM}`);
        return res.data.results;

    }

    static async fetchByTitle(title) {
        const res = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`);
        return res.data.results;


    }
}

export { BACKDROP_BASE_URL, API_KEY_PARAM, BASE_URL, SMALL_IMG_COVER_BASE_URL };
