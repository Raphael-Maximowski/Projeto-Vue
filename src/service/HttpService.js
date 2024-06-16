import axios from 'axios';
import md5 from 'crypto-js/md5';

// Chaves Privadas e Publicas
const PUBLIC_API_KEY = '523aff10b02e22ff9fa23ede7818dbfb';
const PRIVATE_API_KEY = 'b60966412eb0b8ccd7fec12d07ecb01d44b93276';

// Definindo URL Base e Retorno .json
const HttpService = axios.create({
    baseURL: 'https://gateway.marvel.com',
    headers: {
        'Content-type': 'application/json',
    },
});

// Retornando a Autenticação para Fazer as Requisições 
const getAuthParams = () => {
    const ts = new Date().getTime();
    const hash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY).toString();
    return { ts, apikey: PUBLIC_API_KEY, hash };
};

// Criando Caminho de Requisição
export const getCharacters = async (page = 1) => {
    const authParams = getAuthParams(); // Passando Autenticação
    authParams.offset = (page -1) * 30; // Adicionando o parâmetro offset aos parâmetros de autenticação
    authParams.limit = "30"; // Adicionando o parâmetro offset aos parâmetros de autenticação

    return await HttpService.get('/v1/public/characters', { params: authParams }); // Caminho de Requisição
};

export const getCharacter = async (id) => {
    const authParams = getAuthParams(); // Obtendo os parâmetros de autenticação
    return await HttpService.get(`/v1/public/characters/${id}`, { params: authParams }); // Fazendo a requisição com os parâmetros
}

export const getComics = async () => {
    const authParams = getAuthParams(); // Passando Autenticação
    authParams.offset = "30"; // Adicionando o parâmetro offset aos parâmetros de autenticação
    authParams.limit = "30"; // Adicionando o parâmetro offset aos parâmetros de autenticação
    return await HttpService.get('/v1/public/comics', { params: authParams });  // Caminho de Requisição 
};

export const getComic = async (id) => {
    const authParams = getAuthParams(); // Passando Autenticação
    return await HttpService.get(`/v1/public/comics/${id}`, { params: authParams });  // Caminho de Requisição 
};

export const getCreators = async () => {
    const authParams = getAuthParams(); // Passando Autenticação
    authParams.offset = "99"; // Adicionando o parâmetro offset aos parâmetros de autenticação
    authParams.limit = "99"; // Adicionando o parâmetro offset aos parâmetros de autenticação
    return await HttpService.get('/v1/public/creators', { params: authParams });  // Caminho de Requisição 
};

export const getCreator = async (id) => {
    const authParams = getAuthParams(); // Passando Autenticação
    return await HttpService.get(`/v1/public/creators/${id}`, { params: authParams });  // Caminho de Requisição 
};

export const getEvents = async () => {
    const authParams = getAuthParams(); // Passando Autenticação
    authParams.offset = "30"; // Adicionando o parâmetro offset aos parâmetros de autenticação
    authParams.limit = "30"; // Adicionando o parâmetro offset aos parâmetros de autenticação
    return await HttpService.get('/v1/public/events', { params: authParams });  // Caminho de Requisição 
};

export const getEvent = async (id) => {
    const authParams = getAuthParams(); // Passando Autenticação
    return await HttpService.get(`/v1/public/events/${id}`, { params: authParams });  // Caminho de Requisição 
};

export const getSeries = async () => {
    const authParams = getAuthParams(); // Passando Autenticação
    authParams.offset = "30"; // Adicionando o parâmetro offset aos parâmetros de autenticação
    authParams.limit = "30"; // Adicionando o parâmetro offset aos parâmetros de autenticação
    return await HttpService.get('/v1/public/series', { params: authParams });  // Caminho de Requisição 
};

export const getSerie = async (id) => {
    const authParams = getAuthParams(); // Passando Autenticação
    return await HttpService.get(`/v1/public/series/${id}`, { params: authParams });  // Caminho de Requisição 
};
