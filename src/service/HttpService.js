import axios from 'axios';
import md5 from 'crypto-js/md5';

const PUBLIC_API_KEY = '523aff10b02e22ff9fa23ede7818dbfb';
const PRIVATE_API_KEY = 'b60966412eb0b8ccd7fec12d07ecb01d44b93276';

const HttpService = axios.create({
    baseURL: 'https://gateway.marvel.com',
    headers: {
        'Content-type': 'application/json',
    },
});

const getAuthParams = () => {
    const ts = new Date().getTime();
    const hash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY).toString();
    return { ts, apikey: PUBLIC_API_KEY, hash };
};

export const getCharacters = async () => {
    const authParams = getAuthParams();
    return await HttpService.get('/v1/public/characters', { params: authParams });
};

export const getCharacter = async (id) => {
    const authParams = getAuthParams();
    return await HttpService.get(`/v1/public/characters/${id}`, { params: authParams });
};

export const getComics = async () => {
    const authParams = getAuthParams();
    return await HttpService.get('/v1/public/comics', { params: authParams });
};

export const getComic = async (comicId) => {
    const authParams = getAuthParams();
    return await HttpService.get(`/v1/public/comics/${comicId}`, { params: authParams });
};